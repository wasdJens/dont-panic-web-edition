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

## Design for Change Resiliency

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

## Use Good Names

Good names für alle Ressourcen, Properties und Operationen sowie Parameter sind essentiell für die Developer Experience [^2]. Namen sollten dabei immer auf ein gewähltes Scenario (bzw. Use Case) zurückzuführen sein anstatt Service Interne Namen zu verwenden. Ein guter Name beschreibt dabei den Zweck und nicht die Implementierung dahinter. Ein gutes Naming Schema erleichtert dabei auch Entwicklern sich in einer Code Base zurecht zu finden ohne ständig in einer Dokumentation nachzuschauen was etwas bedeutet.

**Problemstellung:**
Als Softwareentwickler sehen wir uns häufig mit dem Problem konfrontiert, dass schlecht benannte Schnittstellenkomponenten die Code-Qualität beeinträchtigen, zu Missverständnissen führen und die Wartbarkeit erschweren. Klare und verständliche Namen sind essentiell für eine effektive Kommunikation innerhalb des Codes und des Entwicklungsteams.

**Lösungsansatz:**
Entwicklung und Durchsetzung einer detaillierten Namensgebungskonvention, die auf den spezifischen Kontext und die Domain der Anwendung zugeschnitten ist. Diese Konvention sollte klare Richtlinien für die Benennung aller Code-Elemente bieten, einschließlich der Berücksichtigung von Internationalisierungsaspekten für globale Teams. Die Durchsetzung dieser Konventionen kann durch regelmäßige Schulungen, Code-Reviews und den Einsatz von Linting-Tools unterstützt werden.

**Anwendunsfallspezifische Beispiele:**
Domain-spezifische Terminologie: In einem medizinischen Softwareprojekt sollten Fachbegriffe wie DiastolicBloodPressure anstelle von allgemeinen Begriffen wie lowPressure verwendet werden, um Präzision und Klarheit zu gewährleisten.

**Ausnahmen:**
In Fällen, in denen die Anwendung sehr spezifische oder kryptische Fachterminologie verwendet, die außerhalb des Entwicklungsteams kaum verstanden wird, könnte es sinnvoll sein, einfachere oder allgemeinere Namen zu verwenden, um die Zugänglichkeit des Codes zu erhöhen.

### Recommendations:

- 👍 Für das selbe Konzept sollte immer der gleiche Name verwendet werden. Jedes Konzept sollte einen eigenen Namen haben.
- 👍 Für eine Sammlung an Objekten sollte der Plural verwendet werden. Bspw. Eine Liste von Büchern sollte als "books" angegeben werden.
- 👍 Für einzelne Objekte sollte der Singular verwendet werden. Bspw wenn wir eine Eigenschaft von einem User darstellen möchten verwenden wir `username` anstelle von `usernanmes` für einen einzelnen User.
- 👍 Verwendet einen `at` Suffix für Daten die mit `date-time` Werten arbeiten. Bspw `createdAt` anstelle von `created`
- 👍 Verwendet einen klaren Suffix für Daten die einer bestimmten Unit zugeordnet werden können. Bspw. `bytes`, `miles` etc.
- 👍 Verwendet den Suffix `id` für Identifiers von einer Ressource
- 👎 Vermeidet den `is` prefix für boolesche Werte. Bspw. `enabled` anstelle von `isEnabled`
- 👎 Vermeidet Redudante Wörter bei der Bennenung von Endpunkten. Bspw. `/phones/numbers` anstelle von `phone/phoneNumber`.

# References

[^1]: Customer beschreibt hierbei ein anderes System das eine Schnittstelle benutzt. Das können Menschen, Systeme oder ähnliches sein. Alles was die Funktionalität der Schnittstelle verwenden möchte.
[^2]: https://github.com/microsoft/api-guidelines/blob/vNext/azure/ConsiderationsForServiceDesign.md
[^3]: https://github.com/zalando/restful-api-guidelines
