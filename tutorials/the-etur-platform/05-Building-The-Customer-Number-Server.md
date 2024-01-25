# 05 - Building the Customer Number Server

Dieses Tutorial ist das Gegenstück zu unserer Customer Number Website. Hier geht es darum einen ersten Webserver zu implementieren mittels JavaScript und einem JavaScript Framework (Fastify). Das Ziel ist es einen Server lokal laufen zu haben der auf HTTP Anfragen reagiert und es uns erlaubt Customer Numbers zu verwalten und zu validieren.

## Setup Node Project

Unser Webserver soll mittels JavaScript implementieren. Damit JavaScript außerhalb vom Browser ausgeführt werden kann benötigen wir eine separate JavaScript Runtime (NodeJS). Innerhalb von diesem NodeJS Projekt verwenden wir dann ein open source Framework für das Erstellen von Webservern (Fastify).

- Legt ein neues NodeJS Projekt im Ordner `services` an und nennt dieses `customer-number-server`
  - Tipp: Nutzt dafür den Befehl `npm init` und folgt den Anweisungen
- Ändert das Node Projekt um `ESModules` Format zu verwenden anstelle von `CommonJS`
  - Tipp: Schaut einmal in die `package.json` und ändert das `type` feld auf `module`
  - Dieser Fehler tritt häufig mit folgender Fehlermeldung auf: 

```
SyntaxError: Cannot use import statement outside a module
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1153:20)
    at Module._compile (node:internal/modules/cjs/loader:1205:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47
```

- Erstellt eine `index.js` Datei
- Gebt ein `Hello World` aus mittels `console.log` und startet euren Server mittels `node`

Wenn alles geklappt habt solltet ihr nun in eurem Terminal ein `Hello World` sehen. Der nächste Schritt ist es ein erstes Datenmodell für einen Customer zu definieren sowie mit den Grundlagen von JavaScript vertraut machen.

## Business Logik

### Customer Model

Wir möchten ein Datenmodell für einen Customer erstellen. Dieses Datenmodell soll später zwischen Client (Webseite) und Server ausgetauscht werden. Wir verwenden hierfür ein JSON Format. JavaScript ist eine nicht typisierte Programmiersprache d.h. die eigentliche Struktur können wir nicht definieren aber ein erstes Objekt welches einen Customer repräsentiert können wir definieren.

- Erstellt eine neue `customers.js` Datei. Diese Datei dient als Speicherort für alle Customer und beinhaltet entsprechende Logik.
- Erstellt ein Beispiel JavaScript Objekt das einen Customer abbildet. Überlegt euch welche Properties dieses Objekt benötigt.
  - Tipp: Definiert dieses als `const`
- Erstellt ein JavaScript Array das alle Customer Objekte beinhaltet. Dieses kann am Anfang leer sein
  - Tipp: Definiert dieses als `const`
- Erstellt eine Funktion die alle Customer zurückgibt. Gebt in dieser Funktion das zuvor erstellte Array zurück.
- Exportiert die Customer Function mittels `export` Statement
- Importiert die Customer Function in der `index.js` und gebt alle Customer aus mittels `console.log`

Wenn alles geklappt hat solltet ihr nun in eurem Terminal euren zuvor definierten Customer sehen. 

> [!TIP]
> Prüft ob eure imports ein `.js` am Ende haben

### CR(U)D Customer Model

Als nächstes möchten wir typische Operationen für das Customer Model anbieten nämlich: Create, Read und Delete. Hierfür erweitern wir die `customers.js` um folgende neue Funktionalitäten: 

- Create Customer Function
  - Erstellt eine Funktion die einen neuen Customer erstellt. D.h. die Funktion nimmt Parameter entgegen und erstellt ein Customer Object
  - Tipp: Überlegt euch welche Parameter benötigt werden um einen Customer zu erstellen
  - Tipp: Die Funktion sollte den erstellten Customer zurückgeben

- Read Customer Function
  - Erstellt eine Funktion die einen Customer anhand einer ID zurückgibt
  - Tipp: Die Funktion sollte die ID als Parameter entgegen nehmen
  - Tipp: Die Funktion sollte den gefundenen Customer zurückgeben
  - Tipp: Benutzt eine der vorgestellten Built-In Array Funktionen um den Customer zu finden

- Delete Customer Function
  - Erstellt eine Funktion die einen Customer anhand einer ID löscht
  - Tipp: Die Funktion sollte die ID als Parameter entgegen nehmen
  - Tipp: Die Funktion sollte den gelöschten Customer zurückgeben
  - Tipp: Benutzt eine der vorgestellten Built-In Array Funktionen um den Customer zu finden und zu löschen

Wenn ihr diese drei Funktionen definiert habt exportiert diese und verändert euer `index.js` Programm um folgende Funktionalität: 

- Legt zwei neue Customers an,
- Löscht einen zufälligen Customer
  - Tipp: `Math.random()` in JavaScript
- Gebt euch den verbleibenden Customer aus

Als Pseudocode könnte das ganze so aussehen:

```
eingabe = LegeCustomerAn(<Parameter>)
eingabe = LegeCustomerAn(<Parameter>)

Ermittel Zufälligen Customer
löscheCustomer(<Zufällige ID>)
AlleCustomerAusgeben
```

Wenn alles geklappt hat sollte die Anwendung im Terminal einen Customer ausgeben.

> [!TIP]
> JavaScript Funktionen geben immer standardmäßig ein `undefined` zurück wenn diese kein `return` statement beinhalten.

### Validierung von einer Customer Number

Unser Customer Number Server benötigt noch die Funkionalität gegebene Kunden Nummern zu validieren. Hierfür gibt es zwei Ansätze:

- Wir können einfach prüfen ob eine gegebene ID im System existiert
- Wir können eine eigene Logik bereit stellen was eine gültige Customer Number ist
  - Bspw. gibt es viele Hersteller die bestimmte Patterns für ihre Kunden Nummern verwenden

Wir möchten eine Kombination aus beiden wählen d.h. erst prüfen wir ob eine Kunden Nummer im System existiert und dann ob Sie ein bestimmtes Pattern beinhaltet. Hierfür erweitern wir die `customers.js` um folgende Funktionalität:

- Erstellt eine neue Funktion die eine Kunden Nummer entgegen nimmt und diese validiert.
- Innerhalb von dieser Funktion soll geprüft werden ob die übergebene Kunden Nummer bereits existiert
  - Tipp: Verwendet eine Array Methode und prüft das Array mit allen bekannten Kunden Nummern

Kunden Nummern in ETUR sollen immer einen gewählten Prefix haben: `ETUR-CN-` um diese später eindeutig im System als Kunden Nummern zu erkennen. Dieser Prefix soll jetzt geprüft werden für alle Kunden Nummern welche die Funktion entgegen nimmt. Ein Beispiel: 

Als weiterer Dienst in ETUR bekomme ich Kunden Nummern und möchte diese Validieren. Ich schicke also alle Kunden Nummern an den Customer Number Server bspw: `ETUR-CN-34623` ist eine Valide Kunden Nummer, `ET-CN-2334a` ist keine Valide Kunden Nummer.

Wir erweitern deshalb unsere Funktion um einen Regex der prüft ob die Kunden Nummer mit dem Prefix beginnt und nur Zahlen beinhaltet. Hierfür verwenden wir folgenden Regex: `/ETUR-CN-\w+/`.

```js
const pattern = /ETUR-CN-\w+/;
const isValid = pattern.test(customerNumber)
```

Fügt diese Funktionalität in eure bestehende validate function ein. Der check ob der übergebene Parameter eine valide Kunden Nummer ist sollte passieren bevor wir im System danach suchen. Wenn eine Kunden Nummer valide ist suchen wir ob sie uns bekannt ist und geben dann entweder `true` oder `false` zurück.

Um die Funktionalität zu testen erweitert eure `index.js` um ein paar Beispiel Kunden nummern und ruft die validate funktion auf und lasst euch das Ergebnis ausgeben.

## Customer Number Service - Halbzeit

Was sollte ab diesem Punkt erreicht sein? Wir haben ein erstes JavaScript Modul entwickelt: `customers`, denn in JavaScript sind bereits Dateien ein Modul. Wir haben eine weiteres Modul `index.js` welches unser Customer Modul importiert und bestimmte Funktionen aufruft. Zu der Funktionalität gehört u.a.:

- Erstellen von Customer Objekten
- Löschen von Customer Objekten
- Validieren von Customer Nummern
- Ausgeben von allen Customer Objekten
- Ausgeben von einem Customer Objekt anhand einer ID

Allerdings läuft diese Anwendung aktuell nur einmalig (Die `index.js` wird einmal ausgeführt und ab dann ist das Programm beendet) und wir können noch nicht von außen mit dem Server interagieren. Deshalb möchten wir als nächstes unseren Service mit einem Webserver erweitern.

## Integration von Fastify

In diesem Schritt soll unsere `index.js` Datei erweitert werden und einen Webserver mittels Fastify implementieren und die ersten Routen für unseren Customer Number Service bereitstellen.

- Installiert euch das Fastify Package 
  - Tipp: `npm install fastify`

- Setzt einen ersten Fastify Server auf. Ihr könnt eine leere Route für den Anfang verwenden wichtig ist, dass der Server gestartet werden kann
  - Tipp: `node index.js` zum starten von eurem Server

### Das erste Plugin

In JavaScript ist alles ein Objekt in Fastify wird alles als Plugin abgebildet (Ein Plugin ist dabei nichts anderes als eine JavaScript Datei). Wir möchten jetzt ein Plugin für unsere Customer Endpunkte erstellen und dieses in unserem Server registrieren. Dazu erweitern wir zuerst unser `customers.js` um eine Routing Funktion: 

```js
export async function routes (fastify, options) {
  fastify.get('/', async (request, reply) => {
    // do something ´
  });
}
```

Als nächstes registieren wir unsere Routen als neues Plugin in der `index.js`:

```js
import { routes } from './customers.js'
// Other code...
fastify.register(routes);
```

Startet euren Server neu und führt folgende HTTP Anfrage aus: `http://localhost:3000/`. Wenn alles geklappt hat solltet ihr eine leere Antwort erhalten.

### Routen definieren

Nachdem wir nun ein erstes Plugin registriert haben möchten wir unsere Routen definieren. Unser Webserver sollte folgende Routen bereitstellen:

- `GET /customers` - Gibt alle Kunden zurück
- `GET /customers/:id` - Gibt einen Kunden anhand einer ID zurück
- `POST /customers` - Erstellt einen neuen Kunden
- `DELETE /customers/:id` - Löscht einen Kunden anhand einer ID

Passt eure `customers.js` Implementierung entsprechend an und verwendet die zuvor implementierten Funktionen in euren Handler Funktionen.

### Testen der Routen

Wenn ihr alle Routen definiert habt könnt ihr diese einmal mit Hoppscotch ausprobieren. Führt dafür bspw folgende Anfragen aus: 

```
POST
http://localhost:3000/<eure-url>
{
  <new-customer-data>
}
```

- Tipp um einen HTTP Body anzuhängen könnt ihr auf `Body` klicken und dann `Content Type: application/json` auswählen.

Der oben gennante HTTP Request sollte wenn alles geklappt hat einen neuen Customer in eurem System angelegt haben. Ihr könnt darauf hin über eine `GET` Anfrage alle Kunden ausgeben lassen und sehen ob der neue Customer angelegt wurde.

Probiert eure anderen Endpunkte auch aus und überprüft ob die vorherige Funktion der Anwendung jetzt auch über eine HTTP Schnittstelle funktioniert.

> ✏️ Frage: Fällt euch etwas auf wenn ihr neue Customer anlegen wollt? Was für Daten könnt ihr alles übermitteln?

### Schema Definitionen

Ein Problem was unsere Implementierung aktuell aufzeigt: Es kann jeder beliebige JSON Payload an unsere Endpunkte übermittelt werden. Wir möchten allerdings nur bestimmte Daten erlauben und diese auch validieren. Deshalb definieren wir jetzt bestimmte Schemas auf unseren jeweiligen Routen um nur Anfragen entgegen zu nehmen die mit unserem Schema übereinstimmen.

> [!CAUTION]
> Never trust user input - Prinzipiell kann jeder HTTP Anfragen an euren Server senden und deshalb sollte niemals user input blind vertraut werden. Validiert immer alle Anfragen.

Fastify unterstützt JSON Schema out-of-the-box für die Validierung von Anfragen. Im nächsten Schritt soll das Anlegen von Customern nur noch Möglich sein, wenn das selbst gewählte Datenschema übereinstimmt d.h. die Anfrage vom Client passt zu dem Schema was wir definiert haben.

Das zu validierende Schema ist dabei einfach nur ein JavaScript Objekt welches die Struktur der Daten definiert: 

```js
const customerSchema = {
  schema: {
    body: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        description: { type: 'string', minLength: 1 },
        id: { type: 'string' },
      },
      required: ['name', 'description', 'id']
    }
  }
}
```

Dieses Schema können wir jetzt als zweiten Parameter an unsere Route übergeben: 

```js
fastify.post('/customers', customerSchema, async (request, reply) => {
  // Do something
});
```

Wenn wir jetzt eine Anfrage an den Server schicken die nicht dem Schema entspricht wird diese mit einem `400 Bad Request` beantwortet. Wenn die Anfrage allerdings dem Schema entspricht wird die Anfrage an unsere Handler Funktion weitergeleitet.

Eine weitere Option von unserem Schema ist es unsere JSON Daten zu serialisieren. Das hat den Vorteil, dass wir nur bestimmte Daten an den Client zurückgeben (Auch wenn wir im Code einen Fehler ggf. hätten) wodurch keine Sensitiven Daten nach außen gelangen. Ein Beispiel für das Abfragen von allen Customers definieren folgendes Response Schema: 


```js
const opts = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            description: { type: 'string' },
            id: { type: 'string' },
          }
        }
      }
    }
  }
}
```

Erweitert eure restlichen Routen um die entsprechenden Schemas und testet diese mit Hoppscotch. Wenn alles geklappt hat sollten nur noch Anfragen möglich sein die dem Schema entsprechen.

## Fazit

Ab diesem Punkt solltet ihr einen funktionierenden Webserver haben welcher die Kunden Nummern von Etur verwalten kann. Über HTTP können neue Kunden angelegt werden, bestehende Kunden gelöscht werden und alle Kunden ausgegeben werden. Außerdem können Kunden Nummern validiert werden.

Was unser Server noch nicht kann ist das Speichern von Daten d.h. wenn wir unseren Server neustarten sind alle Daten weg. Das anbinden von einer Datenbank findet ihr in einem separaten Tutorial.

Als nächsten Schritt möchten wir unsere Webseite mit dem Server verbinden und Benutzer Eingaben an den Server senden.