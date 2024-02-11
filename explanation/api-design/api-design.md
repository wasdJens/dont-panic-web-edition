# About: A Philosophy of API Design

> Was macht eine gute Schnittstelle aus? Auf was sollte geachtet werden wenn man eine neue Schnittstelle baut?

Für Schnittstellen gibt es kein Richtig oder Falsch. Die meisten Schnittstellen die man in der Praxis findet unterscheiden sich fundamental von anderen. Das liegt auch daran, dass es keinen einheitlichen Standard für Schnittstellen gibt. Fast jedes Unternehmen hat seine ganz eigenen Guidelines um eine Schnittstelle zu bauen.

Diese Erklärung soll einen Einblick in die Philosohpie hinter API Design bieten. Es basiert auf unterschiedlichen Unterlagen von Tech Firmen die ihre API Design Unterlagen öffentlich zugänglich machen. Es soll außerdem eine Reflexion über Erfahrungen aus der Praxis sein. Das Ziel sind Schnittstelle die ein Customer[^1] Problem lösen. Egal wie diese am Ende gestaltet sind.

Da nicht jede Guideline oder Empfehlung für jedes Software Problem passend ist wird im ersten Teil etwas allgemeiner auf die Philosophie hinter API Design eingegangen und zwei Ansätze vorgestellt: `API First` und `Backend for Frontend (BFF)`.

Im zweiten Teil wird dann ein API Kompass vorgestellt der als Orientierung gilt um für verschiedene Problemstellungen eine passende Lösung zu finden. Dabei muss aber nicht jede Kompass Richtung Einsatz finden in einer Schnittstelle. Der Kompass sollte für verschiedene Software Lösungen eingesetzt werden mit unterschiedlichen Problemstellungen.

# Designing an API (Philosophy)

Was sind Merkmale für eine gute Schnittstelle? Im ersten Moment, dass diese intuitive für den Client sind. Das Datenmodell wird auf eine einfache Art und Weise nach außen transportiert und wie sich die API verhält ist vorhersehbar. Als Client kann ich mit meiner Sprache die Schnittstelle ansprechen. Ich kann also selbst entscheiden welche Programmiersprache, Frameworks oder ähnliches ich verwende. Eine gute Schnittstelle bietet mir als Client also alle Freiheiten und schränkt mich nicht in meiner Lösung ein. Im Gegenteil eine gute API sollte es Clients leicht machen diese zu adaptieren [^3]. Das bedeutet auch wenn sich die Schnittstelle über die Zeit verändert kann ich als Client darauf reagieren oder aber auch nicht [^2].

Dabei gibt es verschiedene Ansätze nach denen eine Schnittstelle gestaltet werden kann. Zwei Ansätze die wir hier betrachten ist API First und Backend for Frontend (BFF).

## API First

In diesem Ansatz ist die Produktstrategie auf dem bereitstellen von Schnittstellen ausgerichtet. Es soll eine solide Grundlage geschaffen werden, auf dem andere Dienste und Anwendungen aufbauen können. Ein Beispiel hierfür ist der Ansatz den Zalando fährt, um externen Business Partnern die Möglichkeit zu bieten ihre Applikationen als Third Party Systeme zu integrieren.

Dieser Ansatz beschleunigt nicht nur die Entwicklungszyklen, indem er parallele Arbeitsströme ermöglicht, sondern verbessert auch die Produktqualität, indem die Funktionalität von Anfang an auf die Bedürfnisse der Nutzer und des Marktes abgestimmt wird. Aus geschäftlicher Sicht eröffnet er neue Wege für Wachstum und Innovation, indem er nahtlose Integrationen ermöglicht, ein lebendiges Ökosystem fördert und agile Reaktionen auf Marktmöglichkeiten ermöglicht.

Zudem können Organisationen durch die Berücksichtigung von Sicherheit, Leistung und Compliance bereits in der Phase des API-Designs Risiken mindern und skalierbare, zuverlässige und sichere Dienste gewährleisten. Trotz der Herausforderungen bei der Erstanwendung, einschließlich der Notwendigkeit eines kulturellen Wandels und einer Vorabinvestition in Design und Dokumentation, machen die langfristigen Vorteile einer reduzierten technischen Schuld, betrieblichen Effizienz und erhöhten Nutzerzufriedenheit die API-First-Philosophie zu einer überzeugenden Strategie für die digitale Transformation.

## Backend for Frontend (BFF)

In diesem Ansatz werden maßgeschneiderte Backend-Dienste speziell für die Anforderung jedes Frontends erstellt (Mobil oder Web Anwendungen). Diese Methode verbessert nicht nur das Benutzererlebnis durch schnellere Antwortzeiten und personalisierte Inhaltsbereitstellung, sondern steigert auch die Produktivität der Entwickler, indem sie einen fokussierten, effizienten Entwicklungsprozess ermöglicht, der auf die einzigartigen Bedürfnisse verschiedener Benutzerschnittstellen zugeschnitten ist.

Darüber hinaus fördert BFF die betriebliche Agilität mit der Möglichkeit, Dienste unabhängig zu implementieren und zu skalieren, was zu verbesserter Effizienz und Kosteneffektivität führt. Es ermutigt zu strengeren Sicherheitspraktiken, indem es die freigelegten Daten und Funktionalitäten auf das beschränkt, was für jedes Frontend unbedingt notwendig ist.

Trotz der Herausforderung, mehrere Backend-Dienste zu verwalten, macht die klare Trennung der Zuständigkeiten und die Möglichkeit, für jeden spezifischen Fall die beste Technologie zu nutzen, BFF zu einer immer beliebteren Wahl unter Teams, die hochwertige, skalierbare und sichere digitale Produkte anstreben. Indem es eine engere Zusammenarbeit zwischen Frontend- und Backend-Teams fördert und einen agileren, reaktionsfähigeren Entwicklungszyklus ermöglicht, ermöglicht BFF letztendlich Organisationen, ihren Kunden bessere digitale Erlebnisse zu liefern.

## Getting Started with API Design

User Experience is King gilt auch für das Erstellen von API Schnisstellen. Die Developer Experience sollte immer im Vordergrund stehen wenn man eine Schnittstelle baut, um eine Umgebung der Innovation und Benutzerfreundlichkeit zu fördern. Eine Schnittstelle die nicht gut designed ist wird über die Zeit in der sie im Einsatz ist immer wieder Probleme für Developer Teams verursachen.

Dies erfordert die Entwicklung von APIs mit einem intuitiven Design und einer einfachen Benutzbarkeit im Vordergrund, um sicherzustellen, dass sie von Entwicklern mit unterschiedlichen Erfahrungsstufen leicht verstanden und implementiert werden können. Folgende Empfehlungen können dabei helfen:

- Abstraktionen sollten so einfach wie möglich gehalten werden u.a. sollten naming conventions einfach verständlich sein. Hier bietet es sich an die Abstraktionen mit einer Person abzustimmen die kein Domain Expert ist. Auch sollten die gewählten Namen klar und konsistent über die gesamte Schnittstelle sein.
- Keywords wie bspw. `response`, `object` und `payload` sind häufig `throwaway` Begriffe und sollten vermieden werden.
- Generische Namen machen es schwer den Zusammenhang mit einer Abstraktion zu verstehen wenn diese an mehreren Stellen eingesetzt werden. Ein gut gewähler Name hebt eine bestimmte Abstraktion explizit hervor.
- Synonyme sollten einmal definiert werden und dann überall gleich verwendet werden. Es bietet sich an eine Art Glossar zu definieren speziell für Technische Begriffe oder Domain Spezifische Begriffe.

Umfassende Dokumentationen, klare und handlungsorientierte Fehlermeldungen sowie robuste Supportkanäle sind entscheidend, um einen reibungslosen Integrationsprozess zu erleichtern. Zusätzlich sind Leistungsoptimierung, fortschrittliche Sicherheitsmaßnahmen und eine durchdachte Versionsstrategie unverzichtbar, um den sich entwickelnden Bedürfnissen sowohl der Entwickler als auch der Endbenutzer gerecht zu werden. Folgende Empfehlungen können dabei helfen:

- Abstimmungen mit anderen Teams welche eine Schnittstelle konsumieren.
- Wiederholende Reviews besonders über den ersten Design Entwurf am Anfang um sicherzustellen, dass Domain Wissen richtig abgebildet wird. Auch können hier über die Zeit hinweg Learnings eingearbeitet werden die in der Praxis aufgetreten sind.
- Kundenfeedback einholen (Ein Kunde kann ein externer Partner sein oder ein internes Team, welches in dem Konzept BFF die Weboberfläche implementiert). Hier können auch Previews einer Schnittstelle angeboten werden.
- Was für Code wird geschrieben bevor ein HTTP Request ausgeführt wird und nachdem eine Antwort vom Server zurück kam. Hier können einfache Abstraktionen auf der Schnittstelle angeboten werden indem bspw. mehrere Anfragen zu einer zusammengefasst werden. Man sollte sich immer in den Consumer der API versetzen und einmal selbst einen möglichen Use Case durchspielen.
- Wenn ein Fehler auftritt sollte überlegt werden ob die Anwendung sich selbst vom Fehler erholen kann oder ob der Fehler an einen Consumer zurückgegeben wird und dort behandelt werden muss.

Dieser ganzheitliche Ansatz bei der API-Gestaltung unterstreicht die Bedeutung von Developer Experience und stellt sicher, dass APIs nicht nur technischen Spezifikationen entsprechen, sondern auch das gesamte Entwicklererlebnis verbessern und so die Zukunft der Technologieinnovation vorantreiben.

### Microsofts Hero Scenarios

Microsoft spricht in [^2] von Hero Scenarios wenn man Schnittstellen auf Service Ebene baut. Im Kontext von Azure werden Schnittstellen normalerweise von tausenden verschiedenen Developern genutzt (bspw. API First Ansatz). Die Tipps hinter dem Hero Scenario machen aber auch für "normale" Schnittstellen sinn.

> For this reason, it is much better to ship with fewer features and only add new features over time as required by customers.

Die Kernaussagen hinter dem Hero Scenarios sind sich nur auf die Dinge zu konzentrieren die wirklich benötigt werden. Mit einem "Hero Scenario" können Teams auch schneller auf den gemeinsamen Nenner kommen, wodurch die time to delivery verkürzt wird. Auch reduzieren sie sogenannten `API drift` wodurch Endpunkte inkonsistent oder unvollständig sind. Ein Hero Scenario sollte also nur die Endpunkte umgesetzen die wirklich gebraucht werden und nicht Ideen verfolgen die vielleicht in der Zukunft mal gebraucht werden könnten. Ein Hero Scenario wird dabei wie folgt aufgebaut:

- Abstraktionen, Naming Conventions und Beziehungen sollten Teil von einem Hero Scenario sein. Basierend hierauf soll dann die API definiert werden und die Notwendigen Operationen.
- Für jedes Hero Scenario sollten Code Beispiele geliefert werden die zeigen wie die Schnittstelle verwendet werden kann. Ein einfaches Beispiel sind Diagramme welche die HTTP Kommunikationen anhand von einem Use Case zeigen.

Das Hero Scenario soll dabei aufzeigen wie eine API in der Realität wirklich eingeestzt wird bevor diese überhaupt implementiert wird. Dabei können vorab Datenmodelle und Interaktions Prozesse dargestellt werden. In einem Review Step mit verschiedenen Stakeholdern kann dann bereits geprüft werden ob der Business Use Case richtig verstanden wurde und die Schnittstelle nur die Dinge implementiert die wirklich gebraucht werden.

Aus einem Hero Scenario können dann auch bspw. OpenAPI Definitionen abgeleitet werden und die Schnittstelle kann von beliebigen Teams umgesetzt werden (Also die eigentliche Implementierung).

# API Design Compass

Als Software Engineers stehen wir oft vor der Herausforderung, APIs zu entwerfen, die nicht nur den aktuellen Anforderungen gerecht werden, sondern auch zukunftssicher und erweiterbar sind. Der "API Design Kompass" ist unser Navigationswerkzeug in dieser komplexen Aufgabe, das uns ermutigt, über den Tellerrand hinaus zu blicken und maßgeschneiderte Lösungen zu entwickeln.

Der Kerngedanke des Kompasses ist, dass erfolgreiche API-Designs aus einem tiefen Verständnis für den Kontext entstehen, in dem sie eingesetzt werden. Er leitet uns an, individuelle Anforderungen zu analysieren, Benutzererfahrungen zu priorisieren und dabei flexible und adaptive Lösungen zu bevorzugen. Durch eine Mischung aus bewährten Methoden, kreativen Ansätzen und einer offenen Haltung gegenüber Veränderungen hilft uns der Kompass, APIs zu entwickeln, die sowohl funktional überzeugend als auch technisch nachhaltig sind.

Im "API Design Kompass" finden wir keine starren Regeln, sondern vielmehr einen Rahmen für Denkprozesse, der uns dabei unterstützt, kluge Entscheidungen zu treffen. Er bietet Orientierungshilfen in Form von Best Practices, ermutigt aber gleichzeitig dazu, diese kritisch zu hinterfragen und auf den spezifischen Anwendungsfall anzupassen. So wird der Kompass zu einem unverzichtbaren Begleiter für jeden Software Engineer, der bestrebt ist, hochwertige und zukunftsorientierte APIs zu entwerfen.

## Recommendations:

### Use HTTP

- ✅ Alle Schnittstellen sollten die HTTP Spezifikation einhalten
- ✅ Alle HTTP Methoden sollten Idempotent sein
- ✅ Verwendet PUT oder PATCH für das Anlegen von neuen Ressourcen
  - Eine Post Operation kann verwendet werden sollte aber auch Idempotent sein und die URL zur neuen Ressource sollte immer zurückgegeben werden mit dem HTTP Status Code 201
- ✅ Folgende HTTP Return Codes sollten eingehalten werden (Aus [^5])

| Method | Description                                      | Response Status Code                       |
| ------ | ------------------------------------------------ | ------------------------------------------ |
| PATCH  | Create/Modify the resource with JSON Merge Patch | `200-OK`, `201-Created`                    |
| PUT    | Create/Replace the _whole_ resource              | `200-OK`, `201-Created`                    |
| POST   | Create new resource (ID set by service)          | `201-Created` with URL of created resource |
| POST   | Action                                           | `200-OK`                                   |
| GET    | Read (i.e. list) a resource collection           | `200-OK`                                   |
| GET    | Read the resource                                | `200-OK`                                   |
| DELETE | Remove the resource                              | `204-No Content`\; avoid `404-Not Found`   |

- ✅ Verwendet den Status Code 202 für Long Running Operations für PUT, POST oder DELETE Operationen
- ✅ Gebt den Zustand einer Ressource zurück nach einer PUT, PATCH, POST oder GET Operation mit einem HTTP 200 oder 201 Status Code
- ✅ Gebt einen HTTP 204 zurück ohne einen Body für eine DELETE Operation auch wenn eine URL keiner Ressource zugeordnet werden kann anstelle von einem 404 Fehler
- ✅ Gebt bei einer POST Anfrage immer einen 200 Status Code zurück. Gebt immer einen Body zurück auch wenn dieser ggf. leer ist. Dadurch können in Zukunft einfacher neue Felder hinzugefügt werden
- ✅ Auf Ressourcen wo der User keinen Zugang hat sollte ein 403 Status Code zurückgegeben **außer** die Existenz von einer Ressource muss aufgrund von Security oder Compliance Gründen versteckt werden. In diesem Fall sollte ein 404 Status Code zurückgegeben werden.
- ✅ Unterstützt wenn möglich Caching Mechanismen für Anfragen die einen `if-match`, `if-none-match`, `if-modified-since` und `if-unmodified-since` Header enhalten. In diesen Fällen sollte ein `ETag` header und `last-modified` Header zurückgegeben werden.
- ✅ Query Parameter sollten camcel case befolgen
- ✅ Alle Query Parameter und Request Header müssen validiert werden. Wenn eine Validierung fehlschlägt soll ein 400 Status Code zurückgegeben werden. Die Fehlerbeschreibung sollte dabei dem Customer [^1] erklären welche Validierung fehlgeschlagen ist um den Fehler selbst zu beheben
- 🚫 Ein HTTP Header der nicht bekannt vorkommt sollte nicht eine Anfrage scheitern lassen. Häufig werden bestimmte Header von Middlewares übergeben die nicht Teil der eigenen Spezifikation sind.

### Use RESTful Design

Schnittstellen sollten REST bis Maturity Level 2 einhalten [^6]. Ressourcen auf der Schnittstelle sollten immer als eine Kollektion von Elementen implementiert werden. Auf Ressourcen können CRUD (Create, Read, Update, Delete) Operationen ausgeführt werden. Ressourcen sollten immer als Zustand abgebildet werden und nicht ihr eigentliches Verhalten.

- ✅ Klare und Konsistente Namen für alle Ressourcen, Properties und Operationen sowie Parameter
- ✅ Ressourcen Pfade sollten immer Sinn ergeben
- ✅ Operationen sollten vereinfacht werden ohne eine Vielzahl an Query Parametern oder bestimmte JSON Felder im Body zu übergeben
- ✅ String Werte sollten immer einen einheitlichen Contract befolgen
- ✅ Klase Response Codes und Bodies die bei jeder Anfrage zurückgegeben werden. Dadurch können Customer selbständig Fehler debuggen ohne ggf. auf eine Dokumentation zurückgreifen zu müssen
- ✅ Für PUT request/response, PATCH Response, GET Response und POST request/response sollte immer das selbe JSON Schema geleten für eine gegebene Ressource.
- ✅ Ein PATCH request schema sollte alle Felder enhtalten ohne ein Feld als required zu markieren
- ✅ Ressourcen Felder sollten durchdacht sein. Folgende Themen könnten dabei helfen [^6]:
  - CREATE Operationen -> Service honors fields when creating a ressource. Minimieren der create-only fields damit Ressourcen nicht gelöscht und neu angelegt werden müssen
  - UPDATE Operationen -> Service honors when creating or updating a ressource
  - READ Operationen -> Service returns this field in a response. Wenn ein read-only Feld übergeben wurde sollte der Request fehlschlagen
  - Ein Feld kann `required` oder `optional` sein. Ein required Feld ist niemals nullable und ein Client kann immer von einer Existenz ausgehen. Ein neues required Feld ist ein potentieller breaking change im Contract mit verschiedenen Customers.
- ✅ Für das Laden von Ressourcen sollte eine GET Anfrage verwendet werden.
- ✅ Für das Anlegen oder Aktualisieren von einer Ressource sollte ein PATCH mit JSON Merge im Body implementiert werden
- ✅ Für das Löschen von einer Ressource sollte ein DELETE verwendet werden
- ✅ Für Create, Read und Update Operationen können folgende Regeln nützlich sein [^6]:

| When using this method                                      | if this condition happens                                     | use&nbsp;this&nbsp;response&nbsp;code |
| ----------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------- |
| PATCH/PUT                                                   | Any JSON field name/value not known/valid to the api-version  | `400-Bad Request`                     |
| PATCH/PUT                                                   | Any Read field passed (client can't set Read fields)          | `400-Bad Request`                     |
| **If&nbsp;the&nbsp;resource&nbsp;does&nbsp;not&nbsp;exist** |
| PATCH/PUT                                                   | Any mandatory Create/Update field missing                     | `400-Bad Request`                     |
| PATCH/PUT                                                   | Create resource using Create/Update fields                    | `201-Created`                         |
| **If&nbsp;the&nbsp;resource&nbsp;already&nbsp;exists**      |
| PATCH                                                       | Any Create field doesn't match current value (allows retries) | `409-Conflict`                        |
| PATCH                                                       | Update resource using Update fields                           | `200-OK`                              |
| PUT                                                         | Any mandatory Create/Update field missing                     | `400-Bad Request`                     |
| PUT                                                         | Overwrite resource entirely using Create/Update fields        | `200-OK`                              |

## Design Patterns:

### Design for Change Resiliency

Beim Design von einer Schnittstelle gibt es eine Anzahl an Entscheidungen die getroffen werden können, um später einfacher Änderungen an der Schnittstelle vorzunehmen. Ein wichtiger Bestandteil ist dabei, Breaking Changes so gering wie möglich zu halten in der Zukufnt.

**Problemstellung:**
Als Softwareentwickler stehen wir vor der Herausforderung, unsere Online-Banking-App kontinuierlich zu aktualisieren, um neue Funktionen zu implementieren, Compliance-Anforderungen zu erfüllen und die UX zu optimieren. Gleichzeitig müssen wir sicherstellen, dass diese Updates die bestehenden Nutzer nicht negativ beeinflussen.

**Lösungsansatz:**
Implementierung eines modularen und komponentenbasierten Designs, das die Wiederverwendbarkeit fördert und Anpassungen erleichtert. Einsatz von Feature Flags, um eine kontrollierte Einführung neuer Features zu ermöglichen und A/B-Tests durchzuführen. Integration kontinuierlicher Integration (CI) und kontinuierlicher Deployment (CD) Pipelines, um ein reibungsloses Rollout von Updates zu gewährleisten und die Qualitätssicherung zu automatisieren. Nutzung von User Analytics, um datengesteuerte Entscheidungen über UI/UX-Verbesserungen zu treffen.

**Anwendungsfallspezifische Beispiele:**
Schrittweise Einführung einer neuen Funktion: Durch Feature Flags kann eine neue Überweisungsfunktion zunächst nur für eine kleine Benutzergruppe aktiviert werden, um Feedback zu sammeln und Anpassungen vorzunehmen, bevor sie für alle freigegeben wird.

Automatische Anpassung der UI an Benutzervorlieben: Mithilfe von Machine Learning kann die App lernen, welche Features und Layouts der einzelne Nutzer bevorzugt, und die Benutzeroberfläche entsprechend anpassen, um die Nutzerbindung zu erhöhen.

**Ausnahmen:**
In Fällen, in denen die technologische Grundlage der Anwendung nicht mehr zeitgemäß ist oder signifikante Sicherheitslücken aufweist, wäre ein inkrementeller Ansatz zur Verbesserung der Change Resilience nicht ausreichend. Hier wäre ein komplettes Redesign oder eine Neuentwicklung der Anwendung unter Berücksichtigung moderner Technologien und Sicherheitsstandards erforderlich.

### Use Good Names

Good names für alle Ressourcen, Properties und Operationen sowie Parameter sind essentiell für die Developer Experience [^2]. Namen sollten dabei immer auf ein gewähltes Scenario (bzw. Use Case) zurückzuführen sein anstatt Service Interne Namen zu verwenden. Ein guter Name beschreibt dabei den Zweck und nicht die Implementierung dahinter. Ein gutes Naming Schema erleichtert dabei auch Entwicklern sich in einer Code Base zurecht zu finden ohne ständig in einer Dokumentation nachzuschauen was etwas bedeutet.

**Problemstellung:**
Als Softwareentwickler sehen wir uns häufig mit dem Problem konfrontiert, dass schlecht benannte Schnittstellenkomponenten die Code-Qualität beeinträchtigen, zu Missverständnissen führen und die Wartbarkeit erschweren. Klare und verständliche Namen sind essentiell für eine effektive Kommunikation innerhalb des Codes und des Entwicklungsteams.

**Lösungsansatz:**
Entwicklung und Durchsetzung einer detaillierten Namensgebungskonvention, die auf den spezifischen Kontext und die Domain der Anwendung zugeschnitten ist. Diese Konvention sollte klare Richtlinien für die Benennung aller Code-Elemente bieten, einschließlich der Berücksichtigung von Internationalisierungsaspekten für globale Teams. Die Durchsetzung dieser Konventionen kann durch regelmäßige Schulungen, Code-Reviews und den Einsatz von Linting-Tools unterstützt werden.

**Anwendunsfallspezifische Beispiele:**
Domain-spezifische Terminologie: In einem medizinischen Softwareprojekt sollten Fachbegriffe wie DiastolicBloodPressure anstelle von allgemeinen Begriffen wie lowPressure verwendet werden, um Präzision und Klarheit zu gewährleisten.

**Ausnahmen:**
In Fällen, in denen die Anwendung sehr spezifische oder kryptische Fachterminologie verwendet, die außerhalb des Entwicklungsteams kaum verstanden wird, könnte es sinnvoll sein, einfachere oder allgemeinere Namen zu verwenden, um die Zugänglichkeit des Codes zu erhöhen.

#### Recommendations:

- 👍 Für das selbe Konzept sollte immer der gleiche Name verwendet werden. Jedes Konzept sollte einen eigenen Namen haben.
- 👍 Für eine Sammlung an Objekten sollte der Plural verwendet werden. Bspw. Eine Liste von Büchern sollte als "books" angegeben werden.
- 👍 Für einzelne Objekte sollte der Singular verwendet werden. Bspw wenn wir eine Eigenschaft von einem User darstellen möchten verwenden wir `username` anstelle von `usernanmes` für einen einzelnen User.
- 👍 Verwendet einen `at` Suffix für Daten die mit `date-time` Werten arbeiten. Bspw `createdAt` anstelle von `created`
- 👍 Verwendet einen klaren Suffix für Daten die einer bestimmten Unit zugeordnet werden können. Bspw. `bytes`, `miles` etc.
- 👍 Verwendet den Suffix `id` für Identifiers von einer Ressource
- 👎 Vermeidet den `is` prefix für boolesche Werte. Bspw. `enabled` anstelle von `isEnabled`
- 👎 Vermeidet Redudante Wörter bei der Bennenung von Endpunkten. Bspw. `/phones/numbers` anstelle von `phone/phoneNumber`.

### API Review Phase

Während dem Design und der Entwicklung von einer Schnittstelle sollten eine Vielzahl an Reviews durchgeführt werden. Hier können frühzeitig fehlerhafte Annahmen korrigiert werden und die Schnittstelle kann iterativ gestaltet werden.

**Problemstellung:**
Als Softwareentwickler stehen wir vor der Herausforderung, APIs zu entwickeln, die nicht nur funktional sind, sondern auch leicht von Entwicklern außerhalb unseres Teams oder unserer Organisation genutzt werden können. Ohne externes Feedback können wir möglicherweise nicht alle Anwendungsfälle oder Schwierigkeiten vorhersehen, die Nutzer mit unserer API haben könnten.

**Lösungsansatz:**
Einführung einer systematischen "API Review Phase" als Teil des Entwicklungsprozesses. Diese Phase umfasst:

- Die Durchführung von Feedback-Sessions und Co-Development-Workshops mit externen Entwicklern.
- Die Veröffentlichung von Preview-Releases, um frühzeitig Nutzungsdaten und Feedback zu sammeln.
- Die Analyse von Nutzungsdaten und Feedback, um die API basierend auf realen Anwendungsfällen zu optimieren.
- Die regelmäßige Überprüfung und Anpassung der API

**Anwendunsfallspezifische Beispiele:**
Entwicklung einer RESTful API für ein soziales Netzwerk: Durchführung von Feedback-Sessions mit externen Entwicklern, die die API für verschiedene Client-Anwendungen nutzen, um die Authentifizierungsflows und Datenzugriffsmethoden zu optimieren.

Freigabe einer SDK für ein IoT-Gerät: Organisation von Co-Development-Workshops mit IoT-Entwicklern, um die Integration der SDK in bestehende Ökosysteme zu vereinfachen und die Dokumentation basierend auf deren Erfahrungen zu verbessern.

**Ausnahmen:**
Bei internen Tools oder APIs, die für ein sehr spezifisches, eng definiertes Problem entwickelt wurden und bei denen das Entwicklerteam direkten Zugang zu den Endnutzern hat, könnte eine formelle API Review Phase überflüssig sein. In solchen Fällen kann ein agiler, informeller Feedback-Prozess effektiver sein.

#### Recommendations:

- 👍 Überlegt Use Cases wie eine API verwendet wird und schreibt diese auf. Testet die Annahmen gegen die Schnittstelle während der Design und Implementierungs Phase.
- 👍 Identifiziert die wichtigsten Scenarios oder Design Entscheidungen von einer API heraus und testet diese vorab mit einem Customer [^1]. Hier können Reviews, Code Beispiele und co helfen besseres Feedback von einem Customer zu bekommen.
- 👍 Pair Programming / Live Session. Zusammen mit einem Customer [^1] sollte die API eingebunden werden. Das Ziel ist dabei herauszufinden wie ein Kunde die API wirklich einsetzt, um ggf. Optimierungen oder Verbesserungen abzuleiten
- 👍 Share your experience. Teilt eure Erfahrungen über die Design Phase von einer Schnittstelle mit anderen.

### Dealing with Deprecations

Über die Zeit wird sich jede Schnittstelle verändern und wandeln. Auch wenn immer wieder über Feedback Loops neue Erkenntnisse gewonnen werden wie die Schnittstelle verwendet wird bzw. welche Funktionalitäten ggf. gefehlt haben in einer alten Annahme. Es ist wichtig, besonders wenn die Schnittstelle im API First Ansatz verwendet wird, frühzeitig Deprecations bekannt zu geben.

**Problemstellung:**
Als Softwareentwickler oder API-Designer müssen wir sicherstellen, dass unsere Schnittstellen aktuell bleiben und die besten Praktiken und Sicherheitsstandards widerspiegeln. Gleichzeitig ist es unsere Verantwortung, den Übergang für die Nutzer unserer APIs so reibungslos wie möglich zu gestalten, wenn Funktionen als veraltet markiert und schließlich entfernt werden müssen.

**Lösungsansatz:**
Entwicklung eines umfassenden Deprekationsmanagements, das beinhaltet:

1. Transparente Kommunikation: Frühzeitige Ankündigung von Deprekationen über verschiedene Kanäle (Dokumentation, Entwicklerforen, direkte Benachrichtigungen) mit klaren Zeitplänen und Begründungen.
2. Migrationsunterstützung: Bereitstellung von Migrationsleitfäden, Beispielcode und gegebenenfalls Tools, die den Übergang erleichtern.
3. Feedback-Schleifen: Einrichtung von Kanälen für das Feedback von Nutzern zu Deprekationen und Berücksichtigung dieses Feedbacks bei der Planung.
4. Versionierung und Übergangsfristen: Klar definierte Versionierungsstrategie, die es Nutzern ermöglicht, bei Bedarf auf älteren Versionen zu bleiben, während sie auf die neuen Versionen migrieren.

**Anwendunsfallspezifische Beispiele:**
API für einen Cloud-Speicherdienst: Bei der Umstellung von Authentifizierungstokens auf OAuth könnte ein detaillierter Migrationsleitfaden bereitgestellt werden, der die Unterschiede erklärt, Beispielanfragen bietet und Tools zur Generierung neuer OAuth-Tokens bereitstellt.

Webframework: Vor der Entfernung einer veralteten Template-Engine könnten Webinare und Workshops angeboten werden, um Entwickler durch den Migrationsprozess zu führen und alternative Lösungen vorzustellen.

**Ausnahmen:**
Ausnahmen: In Notfallsituationen, bei denen sofortiges Handeln erforderlich ist, um schwerwiegende Sicherheitsrisiken zu mindern, können normale Deprekationsverfahren nicht praktikabel sein. In solchen Fällen sollte der Schwerpunkt auf der schnellen Mitteilung und Bereitstellung von Hotfixes oder Patches liegen, auch wenn dies bedeutet, dass die üblichen Deprekationsrichtlinien vorübergehend außer Kraft gesetzt werden müssen.

#### Recommendations:

- 👍 Use the HTTP Sunset Header Field [^4]. Über diesen HTTP Header kann an Consumer kommuniziert werden ab welchem Zeitpunkt ein bestimmter Endpunkt nicht mehr zur Verfügung steht.

### Avoid Surprises

Häufig kommt es vor, dass sich eine Schnittstelle nicht so verhält wie man es erwarten würde. Besonders wenn man bestimmte Use Cases selbst durchspielt erwartet man ein gewissen Ergebnis. Wenn die API dieses Ergebnis nicht wiederspiegelt ist es häufig schwierig für customers die Schnittstelle zielführend zu verwenden.

**Problemstellung:**
Als Softwareentwickler, der bestrebt ist, APIs nach Best Practices zu gestalten, möchten wir sicherstellen, dass unsere Schnittstellen keine unerwarteten Überraschungen für die Entwickler bereithalten, die sie nutzen. Um dieses Ziel zu erreichen, haben wir folgende Strategien implementiert:

**Lösungsansatz:**

1. Durchgängige Dokumentation und Kommunikation: Wir dokumentieren alle Aspekte unserer API gründlich, einschließlich des Verhaltens von Sammlungen, der Unterstützung von Pagination, Filtering und Sorting, sowie der Idempotenz von Operationen. Wir kommunizieren auch proaktiv alle Änderungen oder geplante Deprekationen.

2. Konsistente Implementierung von Sammlungen: Wir folgen einem standardisierten Ansatz für die Implementierung von Sammlungen in unserer API, indem wir gängige Muster für Pagination, Filtering und Sorting nutzen. Dies schließt die Unterstützung von server-seitiger Paginierung von Anfang an ein, um zukünftige Erweiterungen zu erleichtern, ohne Breaking Changes zu verursachen.

3. Sorgfältige Überlegung bei der Sortierung: Die Sortierung von Sammlungsergebnissen implementieren wir nur, wenn es von den Nutzerszenarien eindeutig gefordert wird und wir uns sicher sind, dass wir diese dauerhaft unterstützen können. Wir bewerten die Leistungsauswirkungen und stellen sicher, dass unsere Infrastruktur diese effizient handhaben kann.

4. Gewährleistung der Idempotenz: Für alle unsere Operationen implementieren wir Mechanismen, die deren Idempotenz sicherstellen. Dies umfasst die Verwendung von eindeutigen Transaktions-IDs oder Tokens für Operationen, die potenziell mehrfach ausgeführt werden könnten, um sicherzustellen, dass wiederholte Anfragen dieselben Effekte haben wie eine einzelne Ausführung.

**Anwendunsfallspezifische Beispiele:**
Ein konkretes Beispiel für unsere Herangehensweise ist unsere API für das Management von Cloud-Ressourcen. Wir haben eine idempotente Erstellungsoperation implementiert, die es ermöglicht, eine Anfrage zur Ressourcenerstellung mehrmals zu senden, ohne dass dadurch mehrere Instanzen derselben Ressource erstellt werden. Dies ist besonders nützlich in Szenarien, in denen Netzwerkinstabilitäten zu unsicheren Operationsergebnissen führen könnten.

**Ausnahmen:**
Wir erkennen an, dass es Situationen geben kann, in denen die strikte Einhaltung dieser Prinzipien nicht möglich oder sinnvoll ist. In solchen Fällen streben wir danach, die Gründe für solche Ausnahmen klar zu dokumentieren und alternative Lösungen oder Workarounds bereitzustellen, um die Auswirkungen auf die Nutzer zu minimieren.

#### Recommendations:

- 👍 Collections sollten immer Server Side Pagination unterstützen auch wenn das Feature nicht explizit auf Client Seite gefordert ist.
- 👍 Sortierung sollte in Abstimmung mit einem Customer erarbeitet werden und mögliche Drawbacks aufgeführt werden.

### Long Running Processes:

Eine Schnittstelle wird bestimmte Operationen anbieten die eine längere Zeit in Anspruch nehmen und komplett ausgeführt zu werden. Hierbei ist es wichtig, dass der Customer[^1] über den Status der Operation informiert wird und ggf. auch eine Möglichkeit hat den Status abzufragen. Eine Ausführliche Beschreibung über das Problem findet ihr [hier](https://github.com/microsoft/api-guidelines/blob/vNext/azure/ConsiderationsForServiceDesign.md#long-running-operations)

**Problemstellung:**
In Web- und Cloud-Anwendungen können bestimmte Operationen erhebliche Zeit in Anspruch nehmen, wie das Verarbeiten großer Datenmengen, das Durchführen komplexer Berechnungen oder das Interagieren mit anderen Services, die verzögerte Antworten liefern. Das direkte Warten auf das Abschluss einer solchen Operation in einem synchronen HTTP-Request-Response-Zyklus führt zu Timeouts, einer schlechten Benutzererfahrung und ineffizienter Ressourcennutzung.

**Lösungsansatz:**

1. Klare Kommunikation: Wir dokumentieren alle Endpunkte, die potenziell lang laufende Operationen initiieren können, gründlich und kommunizieren explizit das erwartete Verhalten sowie die Mechanismen zur Statusabfrage.
2. Effizientes Status-Management: Für jede lang laufende Operation stellen wir einen dedizierten Statusabfrage-Endpoint bereit. Dieser Endpoint gibt den aktuellen Status der Operation zurück und bietet, wenn möglich, Schätzungen zum Abschluss oder weitere Anweisungen.
3. Nutzung von HTTP 202 und Retry After: Bei der Initiierung einer lang laufenden Operation antworten unsere Services mit einem HTTP 202 Accepted Status Code und, falls anwendbar, einem Retry After Header, der dem Client hilft, effizient zu pollen oder den nächsten Schritt zu planen.
4. Polling und Callbacks: Neben regelmäßigem Polling unterstützen wir, wo sinnvoll, auch Callback-Mechanismen, bei denen der Client eine URL oder einen Webhook registrieren kann, um automatisch über den Abschluss der Operation informiert zu werden.

**Anwendunsfallspezifische Beispiele:**
In unserem Dokumentenverarbeitungsdienst ermöglichen wir das Hochladen und asynchrone Verarbeiten von großen Dateien. Nach dem Hochladen antwortet der Service mit 202 Accepted und einem Link zum Statusabfrage-Endpoint. Der Client kann den Retry After Header nutzen, um effektiv zu bestimmen, wann er eine Statusabfrage durchführen sollte. Für längere Prozesse bieten wir die Möglichkeit, einen Callback-Endpoint zu registrieren, der benachrichtigt wird, sobald die Verarbeitung abgeschlossen ist.

**Ausnahmen:**
In Fällen, in denen die Verarbeitungszeit zuverlässig kurz ist und die sofortige Antwort des Servers einen Mehrwert für den Client darstellt, können wir von der Regel abweichen. Diese Entscheidung wird auf einer Fall-zu-Fall-Basis getroffen und basiert auf Performance-Tests und Benutzerfeedback. Auch hier ist eine klare Dokumentation entscheidend, um Missverständnisse zu vermeiden.

### Error Handling

Error Handling ist der wichtigste Bestandteil von einer Schnittstelle. Leider auch häufig ein Bereich der vernachlässigt wird. Wenn eine Schnittstelle einen Fehler zurückliefert ist es essentiell zu verstehen wie ein Customer diesen Fehler behandeln kann. Error Handling ist dabei ein Teil von einer guten Developer Experience.

**Problemstellung:**
Das korrekte Handhaben von Fehlern in Schnittstellen (APIs) ist essentiell, um die Robustheit, Zuverlässigkeit und Benutzerfreundlichkeit von Softwareanwendungen zu gewährleisten. Eine fehlende oder inkonsistente Fehlerbehandlung kann zu unerwarteten Abstürzen, Datenkorruption oder Sicherheitslücken führen. Die Problemstellung ergibt sich daher aus der Notwendigkeit, klare, verständliche und einheitliche Rückmeldungen über Fehlerzustände zu liefern, damit Entwickler und Endbenutzer angemessen reagieren können.

**Lösungsansatz:**
Ein möglicher Lösungsansatz für das effektive Error Handling in Schnittstellen Design umfasst die Implementierung eines standardisierten Fehlerantwort-Systems, welches folgende Elemente beinhaltet:

- Fehlercodes und -meldungen: Definieren Sie einheitliche Fehlercodes und stellen Sie neben dem Code eine klare, verständliche Fehlermeldung bereit. Diese Meldungen sollten sowohl den Fehlerzustand als auch mögliche Lösungsansätze aufzeigen.
- Dokumentation: Erstellen Sie eine umfangreiche Fehlerdokumentation, die alle Fehlercodes, ihre Bedeutung und mögliche Behebungsmaßnahmen umfasst.
- Fehlerkategorisierung: Kategorisieren Sie Fehler nach ihrer Herkunft und Typ, um eine gezielte Fehlerbehandlung zu ermöglichen.
- Client-seitige Fehlerbehandlung: Geben Sie klare Richtlinien für die Fehlerbehandlung auf der Client-Seite, einschließlich der Empfehlungen für Retries und Benutzerfeedback.
- Sicherheitsaspekte: Berücksichtigen Sie Sicherheitsaspekte bei der Fehlermeldungsgestaltung, um die Preisgabe sensibler Informationen zu vermeiden.
- Performance-Betrachtungen: Berücksichtigen Sie die Performance-Auswirkungen der Fehlerbehandlung und optimieren Sie diese entsprechend, ohne die Benutzererfahrung zu beeinträchtigen.

**Anwendunsfallspezifische Beispiele:**

- Web-APIs: Bei einem HTTP 404-Fehler (nicht gefunden) liefert die API eine klare Fehlermeldung, die darauf hinweist, welche Ressource nicht gefunden wurde.
- Datenbank-Schnittstellen: Bei einem Verbindungsfehler zur Datenbank gibt die Schnittstelle einen spezifischen Fehlercode zurück, der auf das Problem hinweist, z.B. Zeitüberschreitung der Anfrage.
- Microservices-Architekturen: Ein zentraler Fehlerbehandlungsservice, der Fehler von verschiedenen Services sammelt, standardisiert und weiterleitet.

**Ausnahmen:**

- Sicherheitsbedenken: Zu detaillierte Fehlermeldungen können sensiblen Informationen preisgeben und sollten in sicherheitskritischen Kontexten vermieden werden.
- Performance-Einbußen: In hochperformanten Systemen, wo jede Millisekunde zählt, kann eine aufwändige Fehlerverarbeitung die Systemleistung negativ beeinflussen.

#### Recommendations:

- 👍 Fehlermeldungen sollten immer so detaliert wie möglich sein. Bspw ist ein `Invalid Argument ` Fehlder der Automatisch von der Schnittstelle generiert wird wenig hilfreich vs. eine genaue Beschreibung von dem Fehler: `Query parameter top must be less than or equal to 1000`.
- 👍 Never Dumb System Logs back to the customer. Stack traces, Fehler Logs und co sollten niemals Blind zurück an einen Customer gegeben werden. Hier könnten Secrets oder andere Implementierungs Details enthalten sein, welche später als Angriffsvektor genutzt werden können.

#### Error Handling Patterns

Eine Menge an Fehler kann bereits vermieden werden wenn folgende Patterns eingehalten werden:

**Idempotenze Schnittstellen**
(Also APIs die für eine mehrfache identische Anfrage immer das gleiche Ergebnis produzieren als würde man eine einzelne Anfrage stellen) können eine Vielzahl an Netzwerk Problemen lösen. Ein einfaches Beispiel für eine Idempotenze Schnittstelle:

> Als Kunde schicke ich eine Anfrage an einen Service um einen Datensatz zu erstellen. Vom Server bekomme ich keine Antwort ob die Anfrage erfolgreich war oder nicht. Als Kunde muss ich jetzt überlegen ob ich die Anfrage nochmal verschicken kann oder die Gefahr besteht, dass der Datensatz doppelt angelegt wird.

In einer Idempotenzen Schnittstelle kann der Kunde ohne Probleme die selbe Anfrage mehrfach verschicken und der Server wird immer das gleiche Ergebnis zurückliefern. Das bedeutet, dass der Kunde sich keine Gedanken machen muss ob die Anfrage erfolgreich war oder nicht. Typische Idempotene Operationen sind bspw. HTTP GET, PUT und DELETE Anfragen.

**Conditional Requests**
Für das Vermeiden von Race Conditions wenn mehrere andere Services gleichzeitig eine Anfrage ausführen können conditional requests durch bspw. concurrency control Mechanismen verwenden werden. HTTP bietet hierfür die Header `if-match` und `if-none-match`.

**Definition von API Operationen**
Eine Operation die einen Datensatz löschen soll kann auch unterschiedliche Art interpretiert werden: `Stelle sicher, dass die Ressource nicht mehr existiert` vs `Lösche exakt diese Ressourcen Instanz`. Im ersten Fall können wir einen HTTP 204 zurückliefern, ohne dass die Client Applikation einen HTTP Fehler behandeln muss. Im zweiten Fall liefern wir einen 404 zurück wodurch eine Client Applikation gezwungen ist den Fehler zu behandeln.

**Error Handling**
Ein weiterer wichtiger Bestandteil in der Strategie der Fehlerbehandlung ist zu Unterscheiden ob es sich um einen `Usage Error` oder ein `Runtime` Error handelt.

Ein `Usage Error` liegt vor wenn ein Customer die API falsch verwendet. In diesem Fall muss der Customer seinen Code selbständig fixen.

Im Falle von einem `Runtime` Errors hingegen, kann ein customer diese normalerweise nicht verhindern. Ein typisches Beispiel sind HTTP Status Codes wie 429 und 409. Im Fall von einem 409 bedarf es mehr Hintergrundwissen über eine mögliche Implementierung während 429 von einigen Client Libraries selbständig gelöst werden.

### Conditional Requests

Die meisten Schnittstellen können Ressourcen verändern. Dabei ist es wichtig zu unterscheiden wie eine Ressource verändert wird. Eine bestimmte Operation sollte nicht eine vorherige Operation überschreiben. Gleichzeitig kann der Client eine bestimmte Ressource anfragen die in ihrem Umfang eine gewisse Größe aufweißt und möglicherweise nicht vollständig über ein Netzwerk transportiert werden kann.

Mit einem conditional requests kann ein Client eine `precondition` angeben bevor die Anfrage auf der Server Seite ausgeführt wird. Ein typisches Beispiel sind sogennannte `ETag` Header die eine Version oder Instanz von einer Ressource referenzieren.

**Problemstellung:**
In der Welt des Schnittstellendesigns, insbesondere bei Web-APIs, ist Effizienz von entscheidender Bedeutung. Einer der Hauptgründe für die Implementierung von Conditional Requests ist die Reduzierung unnötiger Datenübertragungen. Ohne diese, könnte jeder Request, unabhängig von der Relevanz oder Aktualität der Daten, zur Übertragung großer Datenmengen führen. Dies belastet nicht nur die Netzwerkressourcen unnötig, sondern kann auch zu langsameren Antwortzeiten und einer schlechteren Benutzererfahrung führen. Darüber hinaus kann es bei häufigen Updates oder Abfragen von Daten zu Inkonsistenzen kommen, wenn Clients mit veralteten Daten arbeiten.

**Lösungsansatz:**

- Verwendung von ETags und Last-Modified Headern: Jede Ressource sollte mit einem ETag oder einem Last-Modified Header versehen werden. Diese dienen als eindeutige Identifikatoren für die Version einer Ressource und ermöglichen es dem Client, gezielt nach Änderungen zu fragen.

- Serverseitige Logik: Implementiere serverseitig die Logik, um die If-Modified-Since und If-None-Match Requests der Clients zu verarbeiten. Der Server muss in der Lage sein, zu entscheiden, ob eine Ressource seit dem im Request angegebenen Zeitpunkt verändert wurde oder nicht.

- Client-Anfragen optimieren: Clients sollten so programmiert werden, dass sie die entsprechenden HTTP-Header (ETags, Last-Modified) speichern und bei nachfolgenden Anfragen nutzen, um Conditional Requests zu stellen.

- Performance-Überwachung: Überwache regelmäßig die Performance- und Effizienzgewinne durch die Nutzung von Conditional Requests. Achte auf die Reduzierung von Datenübertragungen und eine verbesserte Antwortzeit.

- Klare Dokumentation: Stelle sicher, dass die Nutzung von Conditional Requests sowohl in der API-Dokumentation als auch in Entwicklerleitfäden klar beschrieben ist.

- Fallback-Strategien: Definiere Strategien für den Fall, dass Conditional Requests nicht wie erwartet funktionieren, z.B. bei Fehlkonfigurationen oder wenn Clients keine ETags unterstützen.

- Sicherheit berücksichtigen: Beachte, dass Conditional Requests potenziell dazu genutzt werden könnten, Informationen über die Existenz oder Nichtexistenz von Ressourcen zu gewinnen. Implementiere geeignete Sicherheitsmaßnahmen, um Missbrauch zu verhindern.

**Anwendunsfallspezifische Beispiele:**

Webseiten-Caching: Ein Browser könnte Conditional Requests nutzen, um zu prüfen, ob eine gespeicherte Kopie einer Webseite noch aktuell ist. Ist die Seite nicht verändert worden, kann die gespeicherte Kopie angezeigt werden, ohne sie erneut vom Server laden zu müssen.

API-Datenabfragen: Eine mobile Anwendung fragt regelmäßig Aktualisierungen von einem Server ab. Durch die Nutzung von Conditional Requests kann die App vermeiden, bereits bekannte Daten erneut zu übertragen, was Datenvolumen spart und die Effizienz verbessert.

Software-Updates: Bei der Überprüfung auf Software-Updates kann ein Conditional Request dazu dienen, nur dann Daten zu übertragen, wenn tatsächlich ein neues Update verfügbar ist.

**Ausnahmen:**

- Echtzeitdaten: Bei Anwendungen, die in Echtzeit aktualisierte Daten benötigen (z.B. Aktienkurse), kann die Verwendung von Conditional Requests zu Verzögerungen führen, die die Aktualität der Daten beeinträchtigen.

- Kleine Datensätze: Wenn die zu übertragenden Datenmengen generell sehr klein sind, könnten die Overheads, die durch die Verwendung von Conditional Requests entstehen (z.B. durch den zusätzlichen Verwaltungsaufwand), den Nutzen überwiegen.

- Hohe Änderungsfrequenz: Bei Daten, die sich sehr häufig ändern, könnte die Wahrscheinlichkeit, dass Daten unverändert bleiben und somit ein 304-Status zurückgegeben wird, so gering sein, dass der Einsatz von Conditional Requests ineffizient wird.

# References

[^1]: Customer beschreibt hierbei ein anderes System das eine Schnittstelle benutzt. Das können Menschen, Systeme oder ähnliches sein. Alles was die Funktionalität der Schnittstelle verwenden möchte. Auch ein Teammitglied aus dem selben Development Team könnte ein Customer sein.
[^2]: https://github.com/microsoft/api-guidelines/blob/vNext/azure/ConsiderationsForServiceDesign.md
[^3]: https://github.com/zalando/restful-api-guidelines
[^4]: https://datatracker.ietf.org/doc/html/rfc8594
[^5]: https://github.com/microsoft/api-guidelines/blob/vNext/azure/Guidelines.md#http-return-codes
[^5]: [Rest Definition](../../reference/rest/rest.md)
[^6]: https://github.com/microsoft/api-guidelines/blob/vNext/azure/Guidelines.md#representational-state-transfer-rest
