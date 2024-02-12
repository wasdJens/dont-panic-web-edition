# REST

Woher weiß ein Client was für Operationen ein Server unterstützt? Wie können Clients Informationen finden? Angenommen als Benutzer möchten Sie eine Maschine verändern oder aus einer Liste ein einzelnes Element abfragen. Wir können zwar mittels HTTP eine Schnittstelle ansprechen aber woher wissen wir was die Schnittstelle alles kann. 

## Definition

REST (Represential State Transfer) ist eine Software Architektur für das Beschreiben von Schnittstellen in einer Client Server Architektur. Der Kerngedanke von Rest ist dabei: Wir verwenden Ansätze aus dem WWW für Schnittstellen Design.

REST ist ein Architektur Pattern und hat keinen offiziellen Standard. REST Schnittstellen definieren alle notwendigen Methoden für das Bearbeiten von Ressourcen (CRUD - Create, Read, Update, Delete). 

Web Schnittstellen die REST anwenden verwenden die Semantischen HTTP Methoden für das Bearbeiten von Ressourcen
- `GET` - Liefert die Repräsentation der angefragten Ressource
- `POST` - Verarbeiten von einer Repräsentation von einer Ressource definiert in der Anfrage
- `PUT` - Anlegen oder updaten einer bestehenden Ressource
- `PATCH` - Bedingtes Update von einer Ressource
- `DELETE` - Löschen einer Ressource

Sicherheitstechniken (z.B. Authentifizerung) sind nicht explizit vorgeschrieben. Reifegrad und Ausprägung der vorgestellten Prinzipien ist in der Praxis extrem unterschiedlich. (Siehe Maturity Level)

### Konzepte

Geringe Kopplung zwischen Client und Server, um so viele Clients wie möglich zu erreichen. Hohe Abstraktion zwischen Server Implementierungs Details (z.B. Datenbank Zugriff) und auf was der Client zugreifen kann. 

REST definiert dabei **Ressourcen** auf die der Client zugreifen kann. Eine Ressource beinhaltet alles mögliche an Informationen (Bilder, Datenbank Abfragen, Services, etc.).

Ein Client kann eine Ressource nur über eine URI anfragen und der Server antwortet mit einer **Repräsentation** von dieser Ressource. Die einheitliche Repräsentation von einer Ressource erlaubt, dass unterschiedliche Clients mit der selben Ressource arbeiten können. Die Repräsentation einer Ressource wird in einem Hypertext Format übertragen. 

> [!NOTE]
> Vergleichen Sie die Repräsentation einer Ressource mit heutigen REST APIs. Fällt Ihnen etwas auf?

## RESTful Services

Die REST Architektur definiert 6 Prinzipien die beachtet werden müssen. Sind diese erfüllt wird eine Software auch als RESTful bezeichnet. Werden diese eingehalten erhält eine Software folgende nicht funktionale Eigenschaften:

- Performance
- Scalability
- Simplicity
- Modifiability
- Visibility
- Portability
- Reliability

## Prinzipien

### Client Server Model

- Dienst wird auf Server bereitgestellt, erst bei Anfrage des Clients wird dieser aktiviert
- Seperation of concerns: User Interface ist entlöst von der Daten Implementierung
- Antwort kann in jedem beliebigen Format erfolgen, welches über HTTP übertragen werden kann 
- Begünstigt Skalierung
- Begünstigt Portability (User Interface kann beliebig ausgetauscht werden)

### Zustandslosigkeit

- Jede Nachricht enthält alle notwendigen Informationen und ist in sich geschlossen
- Nachrichten können unabhängig von anderen verarbeitet werden
- Erlaubt massive Skalierung der Dienste
- “Versteckt” Komplexität wie beispielsweise offene Datenbankverbindungen

### Caching

- Ressourcen müssen nicht unbedingt ständig erneut angefragt werden
- Minimiert aufwendige Netzwerk Kommunikation zwischen Client und Server
- Jede Ressource kann als cachable definiert werden oder nicht
- Content Delivery Networks (CDN) können als Cache fungieren zwischen Client und Servern

### Multi Layered

- Komplexität und Architektur wird hinter einer einzelnen Ressource “versteckt”
- Definierte Methoden (CRUD mit HTTP-Methoden) erlauben Transparenz
- Clients wissen nicht ob Sie mit dem “echten” Server sprechen oder einem Proxy / Load Balancer
- Server können mit weiteren Servern sprechen, um eine Antwort für den Client zu generieren 
- Sicherheitsmechanismen können zwischen Application Logic eingezogen werden

### Uniforme, standardisierte Schnittstelle

- Jede Ressource hat eine feste, eindeutige Adresse (URI) welche unveränderbar ist
- Server Daten Repräsentationen spiegeln nicht die Antwort für den Client wieder
  - Server kann Datenbank Daten als HTML, JSON oder z.B. XML übermitteln
  - Clients können Daten in verschiedenen Formaten anfordern 
- Ressourcen Manipulation mittels Repräsentation der Daten
  - Client hat genügend Informationen für das verändern einer Ressource (Delete, Edit etc.)
- Selbst-beschreibende Nachrichten. 
  - Jede Nachricht beinhaltet genügend Informationen für das verarbeiten einer Nachricht
  - Media-type Feld damit Client die Antwort richtig parsen kann
- Hypermedia as the Engine of Application State (HATEOAS)
  - Ein Client mit einer initialen URI für eine REST Applikation kann alle verfügbaren Ressourcen entdecken
  - Navigation zwischen Ressourcen der Schnittstelle erfolgt nur über in der Ressource verfügbare Links
    - Wie ein Browser “navigiert” der Client durch die Dienste
    - “Self-Discovery” ist möglich d.h. mit einzelnen Einstiegspunkt können alle Ressourcen gefunden werden
  - Ermöglicht lose Bindung innerhalb der Schnittstelle. Dadurch Skalierung und weniger Abhängigkeiten

## Maturity Model

Für das Einordnen von einer Schnittstelle ob diese RESTful ist oder nicht gibt es von Leonard Richardson ein Maturity Model für WEB APIs:

- Level 0: Define one URI, and all operations are POST requests to this URI.
- Level 1: Create separate URIs for individual resources.
- Level 2: Use HTTP methods to define operations on resources.
- Level 3: Use hypermedia (HATEOAS)

Nach dieser Definition ist eine Schnittstelle erst ab Level 3 RESTful. Es empfiehlt sich folgenden Artikel einmal durchzulesen: [How did Rest come to mean the opposite of rest](https://htmx.org/essays/how-did-rest-come-to-mean-the-opposite-of-rest/)
