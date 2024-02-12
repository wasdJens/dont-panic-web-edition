# Fastify

Fastify ist ein Web Framework für NodeJS. Es ist inspiriert von Express und Hapi und wurde speziell auf Performance optimiert (ca. 30.000 Requests pro Sekunde) sowie einem niedrigen Overhead für typische Server Aufgaben.

Fastify zeichnet sich durch sein Plugin System hervor, welches es ermöglicht, Funktionalitäten in Form von Plugins zu kapseln und wiederverwendbar zu machen bzw. mit anderen Plugins zu erweitern. Darüber hinaus unterstützt Fastify out-of-the-box JSON Schema (Auch wenn es nicht benötigt wird) für die Validierung von Routen und Output Objekten.

Der Modulare Ansatz von Fastiy erlaubt es eine vielzahl an unterschiedlichen Software Problemen zu lösen und unterschiedliche System zu bauen ohne die Developer Experience zu stark zu beeinträchtigen. Fastiy unterstützt darüber hinaus noch Typescript. Typische Anwendungsfälle von Fastify sind bspw. das Erstellen von API Schnittstellen die dann über HTTP angesprochen werden können.

# Fastify Grundlagen

## Server erstellen

Fastify kann einen Web Server in JavaScript erstellen und ausführen. Dafür muss eine neue Fastify Instanz erzeugt werden:

```js
import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});
```

Zuerst importieren wir das Objekt `Fastify` aus dem Modul `fastify`. Dann erstellen wir eine neue Instanz von Fastify und speichern diese in der Variable `fastify`. Der Parameter `logger` ist optional und aktiviert das Logging für die Instanz. Fastify liefert out-of-the-box Logging Funktionalität die wir verwenden können.

Der Fastify Server kann dann über eine `listen` Methode gestartet werden. Der Parameter von `listen` ist dabei der Port auf dem der Server hören soll.

```js
try {
  await fastify.listen(3000);
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
```

## Route definieren

In Fastify können Endpunkte auf Routen definiert werden. Eine Route besteht dabei aus einer HTTP Methode, einem Pfad, optionalen Optionen und einem Handler was passieren soll wenn eine Anfrage auf die Route eingeht. Routen folgen dabei immer dem folgendem Schema:

```
fastify.<http-method>(<path>, [options], handler)
```

Für eine HTTP Anfrage die eine GET Methode Implementiert würde die Route so aussehen:

```js
const getOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          hello: { type: "string" },
        },
      },
    },
  },
};

fastify.get("/", getOptions, (request, reply) => {
  reply.send({ hello: "world" });
});
```

Das Object `getOptions` definiert dabei die JSON Schema Validierung für die Antwort. Hier wird definiert, dass die Antwort mit dem definierten Schema Serializiert werden soll. Ein Output Schema sollte immer verwendet werden, dadurch kann vermieden werden, dass unerwartete Daten an den Client gesendet werden.

Die Zeile `.get('/', getOptions, (request, reply))` definiert die Route. Unser Server nimmt HTTP Anfragen mit der GET Methode unter dem Pfad `/` entgegen. Als Antwort schickt der Server das Schema zurück welches zuvor in `getOptions` definiert wurde. Die Definition von einem Schema ist dabei optional. Der Dritte Parameter ist der Handler der aufgerufen wird wenn eine Anfrage auf die Route eingeht.

Der Handler bekommt dabei zwei Parameter übergeben: `request` Objekt und `reply` Objekt. Das `request` Objekt enthält alle Informationen über die Anfrage und das `reply` Objekt enthält alle Informationen über die Antwort. Mit dem `reply` Objekt kann der Server eine Antwort an den Client senden.

In Fastify ist es aber auch erlaubt einfach ein `return` Statement zu verwenden um eine Antwort zu senden.

## Sammlung an Routen als Funktion

In Fastify kann auch eine Sammlung an Routen in einer einzelnen Funktion definiert werden. Diese Funktion können wir dann über ein Plugin registrieren.

```js
async function userRoutes(fastify, options) {
  fastify.get("/", async (request, reply) => {
    return { hello: "world" };
  });

  fastify.get("/:id", async (request, reply) => {
    return { id: request.params.id };
  });
}
```

Alle Endpunkte in der Funktion `userRoutes` können dann über die `register` Funktion als Plugin registriert werden und ein Prefix kann auch noch vergeben werden für den Pfad der Route:

```js
fastify.register(userRoutes, { prefix: "/user" });
```

Darauf verarbeitet der Server alle Anfragen unter dem Pfad `/user` und ruft die entsprechenden Handler auf.

## Routen Parameter, Query und HTTP Body

Fastify bietet auch die Möglichkeit Routen Parameter, Query Parameter und den HTTP Body zu verarbeiten. Routen Parameter können in der Route definiert werden und werden dann automatisch in das `request` Objekt geschrieben. Query Parameter und der HTTP Body können über das `request` Objekt abgerufen werden.

```js
fastify.get("/:id", async (request, reply) => {
  return { id: request.params.id };
});
```

Ein Routen Parameter wird dabei mit `:<name>` im Pfad definiert. In diesem Fall wird der Wert von `:id` in das `request` Objekt geschrieben und kann dann im Handler verwendet werden.

> [!WARNING]
> Fastify speichert alle Routen Parametern in dem Objekt `params`. Wenn ihr also mehrere Routen Parameter verwendet stellt sicher, dass ihr die Namen der Parameter eindeutig definiert und im Aufruf verwendet.

Query Parameter können über das `request` Objekt abgerufen werden. Fastify speichert alle Query Parameter in dem Objekt `query`.

```js
fastify.get("/query", async (request, reply) => {
  return { query: request.query };
});
```

Ein Query String kann auch über das Schema definiert und validiert werden:

```js
const queryOptions = {
  schema: {
    querystring: {
      type: "object",
      properties: {
        name: { type: "string" },
        excitement: { type: "integer" },
      },
      required: ["name"],
    },
    response: {
      200: {
        type: "object",
        properties: {
          query: {
            type: "object",
            properties: {
              name: { type: "string" },
              excitement: { type: "integer" },
            },
          },
        },
      },
    },
  },
};

fastify.get("/query", queryOptions, async (request, reply) => {
  return { query: request.query };
});
```

Der HTTP Body kann über das `request` Objekt abgerufen werden. Fastify speichert den HTTP Body in dem Objekt `body`.

```js
fastify.post("/body", async (request, reply) => {
  return { body: request.body };
});
```

Fastify übersetzt dabei automatisch alle HTTP Body Anfragen entweder als `application/json` oder `text/plain`. In allen anderen Fällen wirft Fastify einen Fehler. (vgl. https://fastify.dev/docs/latest/Reference/ContentTypeParser/#content-type-parser)

Der HTTP Body kann dabei auch über eine Schema Definition validiert werden:

```js
const bodyOptions = {
  schema: {
    body: {
      type: "object",
      properties: {
        name: { type: "string" },
        excitement: { type: "integer" },
      },
      required: ["name"],
    },
    response: {
      200: {
        type: "object",
        properties: {
          body: {
            type: "object",
            properties: {
              name: { type: "string" },
              excitement: { type: "integer" },
            },
          },
        },
      },
    },
  },
};

fastify.post("/body", bodyOptions, async (request, reply) => {
  return { body: request.body };
});
```

## Schema Kombination

Fastify nimmt als optionalen `options` Parameter ein `schema` Objekt entgegen. Das Schema kann dabei aus folgenden Properties bestehen:

- `body` - Validiert den Body von einem Request für POST, PUT, PATCH, TRACE oder SEARCH HTTP Methoden
- `querystring` oder `query` - Validiert den Query String von einem Request
- `params` - Validiert die Parameter von einem Request
- `response` - Filtert und erstellt ein Schema für die Antwort vom Server. Mit Response Schemas können HTTP Anfragen ca. 10-20% schneller verarbeitet werden.

```js
const options = {
  schema: {
    querystring: {
      type: "object",
      properties: {
        name: { type: "string" },
        excitement: { type: "integer" },
      },
      required: ["name"],
    },
    response: {
      200: {
        type: "object",
        properties: {
          query: {
            type: "object",
            properties: {
              name: { type: "string" },
              excitement: { type: "integer" },
            },
          },
        },
      },
    },
  },
};

fastify.get("/query", options, async (request, reply) => {
  return { query: request.query };
});
```

## Plugins

Fastify kann über eigene Plugins erweitert und in seiner Funktionalität ergänzt werden. Ein Plugin kann eine Reihe an Routen, Decorator oder einfach nur eine JavaScript Funktion sein. Plugins erzeugen automatisch einen neuen `scope` und sind voneinander isoliert.

```js
fastify.register(plugin, [options]);
```

Ein einfaches Beispiel für das Registrieren eines Plugins:

```js
import Fastify from "fastify";
const fastify = Fastify();

fastify.register(import("./plugin.js"));

fastify.listen({ port: 3000 }, console.log);
```

Und das dazugehörige Plugin:

```js
// plugin.js
async function plugin(fastify, opts) {
  fastify.get("/", async (req, reply) => {
    return { hello: "world" };
  });
}

export default plugin;
```

## Hooks

Hooks sind Funktionen die auf bestimmte Ergeignisse im Applikations Kontext und dem Request / Response Lifecycle reagieren. Ein Hook kann dabei auf ein bestimmtes Event registriert werden und wird dann automatisch aufgerufen. Fastify unterscheidet dabei in unterschiedliche Hook Kategorien:

- Request/Reply Hooks
- Application Hooks
- ... und weitere siehe [^2]

Der Lifecycle von Fastify kann [hier](https://fastify.dev/docs/latest/Reference/Lifecycle/) nachgelesen werden um die nachfolgenden Hooks besser einordnen zu können.

Alle Hooks können [hier](https://fastify.dev/docs/latest/Reference/Hooks/#requestreply-hooks) nachgelesen werden.

# Plugin Anleitung

## Register

In JavaScript ist alles ein Objekt. Fastify nutzt eine ähnliche Philosohpie und sagt alles ist ein Plugin. API Endpunkte (Routen), Hilfsfunktionen und co sind also alles Plugins die wir registrieren können. Mit der `register` Funktion kann ein neues Plugin registriert werden.

```js
import { myPlugin } from "./my-plugin.js";

fastify.register(myPlugin, { options });
```

Im Hintergrund erstellt Fastify einen neuen `Context` und wir können beliebige Aktionen auf der Fastify Instanz ausführen ohne andere Kontexte zu beeinflussen.

> [!NOTE]
> Die Fastify `register` Funktion bietet uns das Konzept der Encapsulation automatisch an.

Ein Vorteil davon ist, dass wir unsere Software Architektur beliebig aufbauen können. Am Anfang macht ggf. eine Monolithische Architektur Sinn, später können wir dann aber auch auf eine Microservice Architektur umsteigen ohne das wir die gesamte Software neu schreiben müssen.

In unserem Plugin können wir jetzt also beliebige Dinge implementieren. Für einen API Endpunkt können wir bspw. eine Route registrieren:

```js
export async function myPlugin(fastify, options) {
  fastify.get("/hello", (request, reply) => {
    reply.send({ hello: "world" });
  });
}
```

Mehr über das `Encapsulation` Konzept hinter Fastify kann in [^1] nachgelesen werden.

## Decorators

Plugins beinhalten aber nicht nur API Endpunkte (Routen) sondern können auch normale JavaScript Funktionen als Utility Funktionen bspw. anbieten. Fastify bietet die Möglichkeit eigene Decorators zu erstellen um die Funktionalität an jeder beliebigen Stelle einzusetzen.

```js
export function sum(a, b) {
  return a + b;
}

import { sum } from "./my-plugin.js";
console.log(sum("yes ", "this is a valid js sum function"));
```

Die oben dargstellte Funktion kann als Decorator registriert werden und dann in der gesamten Fastify Instanz verwendet werden:

```js
fastify.decorate("sum", (a, b) => a + b);
```

Ein Decorator kann dann als Plugin definiert und verwendet werden.

```js
export async function myPlugin(fastify, options) {
  fastify.decorate("sum", (a, b) => a + b);

  console.log(fastify.sum(1, 2)); // 3
}

fastify.register(myPlugin, { options });
```

> [!CAUTION]
> Remember: Plugins sind voneinander isoliert. Das bedeutet, dass ein Decorator nur in dem Plugin verwendet werden kann, in dem er registriert wurde. Wenn wir also ein zweites Plugin erstellen und versuchen den Decorator zu verwenden, wird ein Fehler geworfen.

Fastify bietet auch noch zwei weitere Decorator an: `decorateRequest` und `decorateReply`. Als Beispiel gibt es eine Funktion die aus einem JSON Objekt ein HTML Dokument erstellt. Der folgende Decorator kann dafür verwendet werden:

```js
fastify.decorateReply("html", function (payload) {
  this.type("text/html"); // This is the 'Reply' object
  this.send(generateHtml(payload));
});

fastify.get("/html", (request, reply) => {
  reply.html({ hello: "world" });
});
```

Die Besonderheit an dieser Lösung ist, dass der Kontext der `reply` Instanz erhalten bleibt. Das bedeutet, dass wir auf die `reply` Instanz zugreifen können und die `html` Methode verwenden können.

> [!CAUTION]
> JavaScript Arrow Functions (`=>`) bekommen kein eigenes `this` Objekt. Das bedeutet, dass wir in diesem Fall nicht auf die `reply` Instanz zugreifen können. Achtet also darauf, dass ihr normale Funktionen verwendet.

## Hooks

Hooks bieten in Fastify die Möglichkeit Plugins und Decorators auf ein bestimmtes Event anzuwenden. Wenn man auf einen Endpunkt immer eine Utility Funktion ausführen möchte (Diese ist als Plugin bzw. als Decorator definiert) müsste man in jedem Endpunkt den Decorator aufrufen.

```js
fastify.decorate("time", (request, key, value) => {
  request[key] = value;
});

fastify.get("/plugin1", (request, reply) => {
  fastify.time(request, "timestamp", new Date());
  reply.send(request);
});

fastify.get("/plugin2", (request, reply) => {
  fastify.time(request, "timestamp", new Date());
  reply.send(request);
});
```

Das obere Beispiel kann mit einem Hook abgebildet werden, um den `time` Decorator automatisch auf allen Endpunkten anzuwenden.

```js
fastify.decorate("time", (request, key, value) => {
  request[key] = value;
});

fastify.addHook("preHandler", (request, reply, done) => {
  fastify.time(request, "timestamp", new Date());
  done();
});

fastify.get("/plugin1", (request, reply) => {
  reply.send(request);
});

fastify.get("/plugin2", (request, reply) => {
  reply.send(request);
});
```

> [!NOTE]
> Ein Hook kann über die Plugin Encapsulation auch nur für bestimmte Routen definiert werden

## Encapsulation und Wiederverwendbarkeit

Fastify bietet ein Modul [`fastify-plugin`](https://github.com/fastify/fastify-plugin) an, welches `plugins` die ein `register` nutzen ihren Kontext auch nach außen tragen können. Das Plugin dreht also das normale Verhalten um. Von der Github Beschreibung:

> When you build plugins for Fastify and you want them to be accessible in the same context where you require them, you have two ways:

Eine weitere Erklärung findet man hier https://fastify.dev/docs/latest/Reference/Plugins/#handle-the-scope

## Error Handling

Plugins können beim registireren Fehler hervorheben. Fastify bietet deshalb eine `after` Funktion an. `after` wird immer von Fastify nach dem `register` aufgerufen (Eine Art Callback Funktion). Die `after` Funktion nimmt 3 Parameter entgegen die das Verhalten der Funktion verändern:

- Wenn kein Parameter angegeben wird und ein Fehler auftritt, wird der Fehler als Argument an die Funktion übergeben
- Wenn ein Parameter an die Callback Funktion übergeben wird, wird dieser Parameter zum Fehler Objekt
- Wenn zwei Parameter angegeben sind wird der erste zum Fehler Objekt und der zweite bekommt die `done` Callback Funktion
- Wenn drei Parameter angegeben werden ist der erste das Fehler Objekt, der zweite ein Top Level Context Objekt und der dritte die `done` Callback Funktion

```js
fastify.register(databasePlugin).after((err) => {
  if (err) throw err;
});
```

# References

[^1]: [Fastify Encapsulation](https://fastify.dev/docs/latest/Reference/Encapsulation/)
[^2]: [Fastify Hooks](https://fastify.dev/docs/latest/Reference/Hooks/)
