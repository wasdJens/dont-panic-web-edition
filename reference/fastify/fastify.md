# Fastify

Fastify ist ein Web Framework für NodeJS. Es ist inspiriert von Express und Hapi und wurde speziell auf Performance optimiert (ca. 30.000 Requests pro Sekunde) sowie einem niedrigen Overhead für typische Server Aufgaben. 

Fastify zeichnet sich durch sein Plugin System hervor, welches es ermöglicht, Funktionalitäten in Form von Plugins zu kapseln und wiederverwendbar zu machen bzw. mit anderen Plugins zu erweitern. Darüber hinaus unterstützt Fastify out-of-the-box JSON Schema (Auch wenn es nicht benötigt wird) für die Validierung von Routen und Output Objekten.

Der Modulare Ansatz von Fastiy erlaubt es eine vielzahl an unterschiedlichen Software Problemen zu lösen und unterschiedliche System zu bauen ohne die Developer Experience zu stark zu beeinträchtigen. Fastiy unterstützt darüber hinaus noch Typescript. Typische Anwendungsfälle von Fastify sind bspw. das Erstellen von API Schnittstellen die dann über HTTP angesprochen werden können.

# Fastify Referenzen

## Plugins

Fastify kann über eigene Plugins erweitert und in seiner Funktionalität ergänzt werden. Ein Plugin kann eine Reihe an Routen, Decorator oder einfach nur eine JavaScript Funktion sein. Plugins erzeugen automatisch einen neuen `scope` und sind voneinander isoliert.

```js
fastify.register(plugin, [options])
```

Ein einfaches Beispiel für das Registrieren eines Plugins:

```js
import Fastify from 'fastify'
const fastify = Fastify()

fastify.register(import('./plugin.js'))

fastify.listen({ port: 3000 }, console.log)
```

Und das dazugehörige Plugin:

```js
// plugin.js
async function plugin (fastify, opts) {
  fastify.get('/', async (req, reply) => {
    return { hello: 'world' }
  })
}

export default plugin
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
import { myPlugin } from './my-plugin.js'

fastify.register(myPlugin, { options })
```

Im Hintergrund erstellt Fastify einen neuen `Context` und wir können beliebige Aktionen auf der Fastify Instanz ausführen ohne andere Kontexte zu beeinflussen. 

> [!NOTE]
> Die Fastify `register` Funktion bietet uns das Konzept der Encapsulation automatisch an.

Ein Vorteil davon ist, dass wir unsere Software Architektur beliebig aufbauen können. Am Anfang macht ggf. eine Monolithische Architektur Sinn, später können wir dann aber auch auf eine Microservice Architektur umsteigen ohne das wir die gesamte Software neu schreiben müssen.

In unserem Plugin können wir jetzt also beliebige Dinge implementieren. Für einen API Endpunkt können wir bspw. eine Route registrieren:

```js
export async function myPlugin(fastify, options) {
  fastify.get('/hello', (request, reply) => {
    reply.send({ hello: 'world' })
  })
}
```

Mehr über das `Encapsulation` Konzept hinter Fastify kann in [^1] nachgelesen werden.

## Decorators

Plugins beinhalten aber nicht nur API Endpunkte (Routen) sondern können auch normale JavaScript Funktionen als Utility Funktionen bspw. anbieten. Fastify bietet die Möglichkeit eigene Decorators zu erstellen um die Funktionalität an jeder beliebigen Stelle einzusetzen.

```js
export function sum (a, b) {
  return a + b;
}

import { sum } from './my-plugin.js'
console.log(sum('yes ', 'this is a valid js sum function'))
```

Die oben dargstellte Funktion kann als Decorator registriert werden und dann in der gesamten Fastify Instanz verwendet werden:

```js
fastify.decorate('sum', (a, b) => a + b)
```

Ein Decorator kann dann als Plugin definiert und verwendet werden.

```js
export async function myPlugin(fastify, options) {
  fastify.decorate('sum', (a, b) => a + b)

  console.log(fastify.sum(1, 2)) // 3
}

fastify.register(myPlugin, { options })
```

> [!CAUTION]
> Remember: Plugins sind voneinander isoliert. Das bedeutet, dass ein Decorator nur in dem Plugin verwendet werden kann, in dem er registriert wurde. Wenn wir also ein zweites Plugin erstellen und versuchen den Decorator zu verwenden, wird ein Fehler geworfen.

Fastify bietet auch noch zwei weitere Decorator an: `decorateRequest` und `decorateReply`. Als Beispiel gibt es eine Funktion die aus einem JSON Objekt ein HTML Dokument erstellt. Der folgende Decorator kann dafür verwendet werden:

```js
fastify.decorateReply('html', function (payload) {
  this.type('text/html') // This is the 'Reply' object
  this.send(generateHtml(payload))
})

fastify.get('/html', (request, reply) => {
  reply.html({ hello: 'world' })
})
```

Die Besonderheit an dieser Lösung ist, dass der Kontext der `reply` Instanz erhalten bleibt. Das bedeutet, dass wir auf die `reply` Instanz zugreifen können und die `html` Methode verwenden können.

> [!CAUTION]
> JavaScript Arrow Functions (`=>`) bekommen kein eigenes `this` Objekt. Das bedeutet, dass wir in diesem Fall nicht auf die `reply` Instanz zugreifen können. Achtet also darauf, dass ihr normale Funktionen verwendet.

## Hooks

Hooks bieten in Fastify die Möglichkeit Plugins und Decorators auf ein bestimmtes Event anzuwenden. Wenn man auf einen Endpunkt immer eine Utility Funktion ausführen möchte (Diese ist als Plugin bzw. als Decorator definiert) müsste man in jedem Endpunkt den Decorator aufrufen.

```js
fastify.decorate('time', (request, key, value) => { request[key] = value })

fastify.get('/plugin1', (request, reply) => {
  fastify.time(request, 'timestamp', new Date())
  reply.send(request)
})

fastify.get('/plugin2', (request, reply) => {
  fastify.time(request, 'timestamp', new Date())
  reply.send(request)
})
```

Das obere Beispiel kann mit einem Hook abgebildet werden, um den `time` Decorator automatisch auf allen Endpunkten anzuwenden.

```js
fastify.decorate('time', (request, key, value) => { request[key] = value })

fastify.addHook('preHandler', (request, reply, done) => {
  fastify.time(request, 'timestamp', new Date())
  done()
})

fastify.get('/plugin1', (request, reply) => {
  reply.send(request)
})

fastify.get('/plugin2', (request, reply) => {
  reply.send(request)
})
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
fastify
  .register(databasePlugin)
  .after(err => {
    if (err) throw err
  })
```

# References

[^1]: [Fastify Encapsulation](https://fastify.dev/docs/latest/Reference/Encapsulation/)

[^2]: [Fastify Hooks](https://fastify.dev/docs/latest/Reference/Hooks/)
