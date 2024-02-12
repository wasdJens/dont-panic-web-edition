# HTTP

Hypertext Transfer Protocol (HTTP) ist ein Protkoll für die Übertragung von Daten auf Anwendungsebene. HTTP wird primär für die Kommunikation zwischen Client und Server eingesetzt, es kann aber auch für andere Zwecke verwendet werden (Bspw. baut GIT auf HTTP auf). HTTP ist Teil vom ISO-Layer 5-7 und basiert dabei auf eine TCP Kommunikation. Ein Client eröffnet eine Verbindung mit einem Server, der Server verarbeitet die Anfrage und schickt eine Antwort zurück. Die Kommunikation ist Zustandslos, das bedeutet, dass der Server keine Informationen über den Client speichert und jede Anfrage eine neue Kommunikations Kette mit einem Server startet.

HTTP definiert Regeln und eine "Sprache" für den Austausch von Informationen. Ermöglicht also die Kommunikation in einem verteilten System (Das größte ist hier das WWW). Im nachfolgenden betrachten wir HTTP/1.1 sowie die unverschlüsselte Variation (http anstatt https). HTTPS verhält sich aber komplett gleich, jedoch mit der Erweiterung durch SSL zur verschlüsselten Kommunikation zwischen einem Client und einem Server.

## Übersicht

HTTP als Protokoll kann verschiedene Ressourcen laden (u.a. HTML Dokumente) und dient als Grundlage für den Datenaustausch im Internet. Als Client Server Modell muss immer ein Client aktiv werden und eine Anfrage an einen Server senden. Jeder Web Server "wartet" also quasi bis ein HTTP Client (z.B. ein Browser) eine Anfrage schickt und verarbeitet diese daraufhin.

Für das Darstellen von einer Webseite sind häufig mehrere HTTP Requests erfoderlich um alle benötigten Ressourcen zu laden (Bspw. Bilder, Videos, Werbung etc.) und jede Anfrage ist eine einzelne Nachricht (Kein Stream an Daten möglich!).

Ein HTTP Client ist dabei aber nicht beschränkt auf einen klassischen Web Browser. Ein Client kann auch ein anderer Server sein (bspw. ein Proxy) der mit einem anderen Server spricht.

## Definition

- HTTP ist nachrichtenbasiert.

  - Jede Anfrage zwischen Client und Server hat ein definiertes Schema aus Header und Body
  - Bestimmte Informationen müssen enthalten sein und vom Server / Client bereitgestellt werden

- HTTP ist ein zustandsloses Protokoll

  - Informationen aus vorherigen Anfragen gehen nach jeder Anfrage verloren. Jede Anfrage ist "neu" und unabhängig von anderen Abfragen.
  - Sollen Informationen zwischen Anfragen konsistent bleiben benötigt man einen Identifier, z.B. ein Session Identifier. Dies ist Aufgabe der Anwendungsebene

- HTTP kann erweitert und angepasst werden (Nicht nur für Hypertext)
  - Transfer von beliebigen Daten möglich z.B. Bilder
  - Beispiel: WebDAV für Dateiaustausch, GIT für Quellcode-Tausch

### HTTP Erweiterungen

- Caching Mechanismen

  - Ein Server kann Clients Informationen mitschicken wenn etwas gecached werden soll und wie lange. Ein Client kann gleichzeitig angeben den Cache zu ignorieren.

- Origin Constraint

  - Web Browser blockieren standardmäßig Abfragen an andere Web Adressen (same origin principle). Eine Webseite kann nur Daten von der gleichen Domain laden. Auf der Server Seite können diese Header aber anders gesetzt werden und ein Server kann bspw. Informationen aus verschiedenen Quellen kombinieren.

- Authentication

  - Einfache Authentificationen können über `WWW-Authenticate` und andere Header angegeben werden. Darüber hinaus können Cookies für Sessions verwendet werden.

- Sessions
  - Mittels HTTP Coookies können Links mit einem State vom Server verschickt werden. Zwar ist laut Definition HTTP Zustandslos, aber mit Cookies kann ein Server Informationen über einen Client speichern und so eine Session aufbauen. Nach diesem Konzept können E-Commerce Seiten bspw. einen Warenkorb behalten oder Benutzereinstellungen speichern (Dark / Hell mode?).

## HTTP Flow

**Client**
Client / Server | Ablauf | Beschreibung
| :---: | --- | --- |
| **Client** | Eine TCP Verbindung mit einem Server wird hergestellt. | Die selbe TCP Verbindung kann seit HTTP/1.1 wiederverwendet werden. Parallel Verbindungen sind auch möglich |
| **Client** | Eine HTTP Nachricht wird vom Client an den Server übermittelt | Die Nachricht bestht aus: Anfragemethode (Request Header), Pfad, HTTP Version, Host Adresse und beliebige weitere Felder |
| **Server** | Verarbeitet die Anfrage | Logik im Server wird ausgeführt |
| **Server** |Schickt eine HTTP Antwort zurück | Die Antwort ist wieder eine HTTP Nachricht mit einem Header und ggf. einem Body. Im Header befinden sich Informationen über das Protokoll, einem Statuscode, die Größe und das Format der Antwort sowie beliebige weitere Felder. Im Body können dann beliebige Daten geschickt werden bspw. ein HTML Dokument oder eine JSON Datei |
| **Client** | Beendet die Verbindung oder schickt den nächsten Request | Abhängig von der Client Logik |

## HTTP Nachrichten

HTTP verschickt Nachrichten. In der Version HTTP/1.1 sind diese Nachrichten als reiner Text definiert und können von Menschen einfach gelesen werden (Mit HTTP/2 wurde dies geändert und die Nachrichten sind binär). Eine Nachricht kann dabei in einen `request` und eine `response` aufgeteilt werden:

### Request

- HTTP Methode - (Normaerweise ein spezielles Verb) wie GET, POST, PUT, DELETE oder ein Nomen wie HEAD, OPTIONS. Die Methode definiert die Operation die ein Client ausführen will.
- Pfad zur Ressource - Der Pfad zur Ressource die angefragt wird. Dieser Pfad ist relativ zur Host Adresse.
- HTTP Version - Die Version des HTTP Protokolls die verwendet wird.
- Optionale Header - Der Client kann diese selbständig definieren und an den Server schicken.
- Ein Body - Für einige Methoden muss der Client neben den Headern Daten mitschicken bspw. bei einem POST stehen im Body die Daten die übermittelt werden sollen.

```
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-language: fr
```

### Response

- HTTP Version - Die Version des HTTP Protokolls die verwendet wird.
- Status Code - Ein numerischer Code der den Status der Anfrage beschreibt.
- Status Message - Eine kurze Beschreibung des Status Codes.
- Optionale Header - Der Server kann diese selbständig definieren und an den Client schicken. Meistens z.B. wie Content Length und andere Informationen
- Ein Body - Beinhaltet die Angefragte Ressource

```
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html
```

### HTTP Methoden

| Methode | Beschreibung |
| :---: | --- |
| GET | Fragt eine Ressource unter einer URI ab. Dabei sollten die Daten auf Server Seite nicht verändert werden d.h. eine Methode muss eine sichere Operation ausführen |
| POST | Übermittelt Daten zur Verarbeitung. Daten sind im BODY der Anfrage |
| HEAD | Frägt nur den header, jedoch nicht den Body ab |
| PUT | Ersetzt eine Ressource unter einer URI. Der Body enthält die neue Ressource |
| PATCH | Ändert eine Ressource unter einer URI. Der Body enthält die Änderungen. Das Format kann vom Server vorgegeben werden sowie spezielle Operationen |
| DELETE | Löscht eine Ressource unter einer URI |

### HTTP Status Codes

Ein HTTP REsponse Status Code signalisiert dem Client, ob eine HTTP Anfrage Erfolgreich war oder weitere Operationen notwendig sind. Bspw. kann ein Browser selbständig navigieren wenn der Server einen Redirect Status Code schickt. Dabei können Status Codes in folgende Kategorien eingeteilt werden:

- `100 -  199` Informational Responses
- `200 - 299` Erfolgreiche Responses
- `300 - 399` Redirection Messages
- `400 - 499` Client Error Responses
- `500 - 599` Server Error Responses

Die folgenden Status Codes kann man sich merken:

- 200 OK
- 201 Created
- 301 Moved Permanently
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error
- 503 Service Unavailable

## Client Server Kommunikation

Für das Arbeiten mit HTTP gibt es in JavaScript die `fetch API` welche es ermöglicht HTTP Anfragen an einen Server zu schicken. Eine ältere API die aber weiterhin möglich ist, ist die `XMLHttpRequest` API.

Für Event Orientierte Architekturen gibt es auch noch die `server-sent events` API. Hier eröffnet der Client eine one-way Verbindung zum Server und der Server kann mittels HTTP Nachrichten an den Client schicken. Der Client kann dabei die Event Handler festlegen und der Browser wandelt automatisch die HTTP Antworten in die passenden Event Objekte um. Alle nicht bekannten Events gehen in einen globalen `onmessage` pool.