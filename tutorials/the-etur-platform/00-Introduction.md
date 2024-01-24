# 00 - Introduction to ETUR

In diesem Tutorial geht es darum eine mögliche Kundenanforderung zu analysieren. Das Ziel ist es ein Gespür dafür zu entwickeln was die Applikation alles können muss und einen ersten Entwurf zu erstellen.

## Hintergrund

Die PlanB. GmbH möchte eine neue Reporting Platform ins Leben rufen. Easy to use reporting oder kurz "ETUR" ist das neue Produkt welches Developer, Product Managers und Kunden dabei helfen soll, einfacher Reports zu erstellen und zu klassifizieren.

Bereitstellung von Dokumentationen und Handbüchern, das Verfolgen von Bugs und allgemeines Kunden Feedback sind alles Aufgaben die ETUR in Zukunft übernehmen soll. Zwar gibt es bereits Lösungen für all diese Probleme am Markt aber häufig sind diese für einen speziellen Bereich optimiert. Bspw gibt es für das Tracken von Bugs Softwarelösungen wie z.B. https://www.bugzilla.org oder https://www.mantisbt.org. 

Ein Problem was die PlanB allerdings festgestellt hat, ist die Kombination der verschiedenen Stakeholder und die Art der Reports die auftreten können.

> ✏️ Frage: Was ist ein Stakeholder und welche möglichen Stakeholder gibt es in ETUR?

> ✏️ Frage: Was für mögliche Probleme kann es bei klassischen Lösungen geben?

## Der erste Meilenstein

In einem ersten Meilenstein möchte die PlanB. folgende Ziele erreichen:

- Kunden können über ihre gewohnten Tools Feedback einreichen.
- Kunden werden über Status Änderungen informiert. 
	- Product Manager können hierfür Einstellungen vornehmen was für Änderungen an den Kunden weitergeleitet werden
- Kunden können den Status von ihrem Report einsehen
- Produkt Manager bekommen eine Übersicht über alle Reports im System
- Produkt Manager können nach Report Art im System filtern
- Produkt Manager können Reports einzelnen Development Teams zuordnen
- Developer können weiterhin in ihrer gewohnten Umgebung arbeiten (Github Issues)

> ✏️ Frage: Was versteht man unter Kunden Feedback alles? 

> ✏️ Frage: Überlegt euch was sind alles Informationen die ein Report unbedingt benötigt?
