# 07 - Creating an API

In diesem Tutorial beschäftigen wir uns mit dem Design von Schnittstellen. Es dient als Review der zuvor gebauten Systeme und soll einen Ausblick geben wie die nachfolgenden ETUR Systeme besser gestaltet werden können. Am ende sollen die hier vorgestellten Konzepte als Grundlage für die nächsten Implementierungen dienen und tiefer in die Materie eintauchen.

## ETUR Datenmodell

Das Kundennummer System war eine erste Einführung in die Web Entwicklung hier wurde eine ganz einfache Schnittstelle sowie Webseite erstellt. Ab jetzt geht es darum das eigentliche ETUR System zu bauen. Aber das Kundennummer System wird verwendet um einem Report eine Kundenummer zuzuweisen. Der Report ist das was wir als nächstes betrachten.

In ETUR dreht sich alles um Reports. Wenn ein Kunde eine Nachricht schickt soll im Hintergrund ein Report erstellt werden. Wenn ein Produkt Manager eine Kunden Nachricht bearbeitet wird der dahinter liegende Report aktualisiert. Ein Developer sieht am Ende die wichtigsten Informationen aus einem Report in seinem Developer Portal (Hier Github). Aus diesem Grund ist es wichtig, dass ein Report ein gut überlegetes Datenmodell hat, um alle Fälle abzudecken.

Datenmodelle in JavaScript sind einfach Objekte mit verschiedenen Properties. Wir möchten also, dass ein Report ein JavaScript Objekt ist welches wir dann über eine HTTP Schnittstelle an unsere Clients anbieten. Man könnte hier jetzt argumentieren und den Report nach einem sauberem Datenbankmodell definieren aber die Anbindung an eine echte Datenbank mit sauberem ER Modell ist nicht Teil von diesem Tutorial. Aber wie steht es um Klassen?

Wir können unser Datenmodell auch über eine einzelne JavaScript Klasse abbilden. Klassen sind eine Möglichkeit Templates für die Erstellung von Objekten anzubieten. Mit Klassen können wir dann über das `new` Keyword neue Reports erstellen. Wie ein Report aber am Ende definiert wird ist euch überlassen. Viel mehr Wichtig ist, welche Properties zu einem Report gehören und wie man einen Report manipulieren kann. Aus diesem Grund möchten wir mit einem neuem JavaScript Modul starten, welches das Datenmodell für einen Report definiert und Funktionen anbieten, um mit einem Report zu arbeiten. Dieses Modul ist dann unsere Grundlage für unsere Schnittstelle.

Um die nachfolgenden Tutorials etwas einfacher zu gestalten sind folgende Eigenschaften für einen Report fest vorgegeben:

- Kategorie -> Feedback, Bug, Question
- Kundennummer
- Beschreibung
- (Optionale) Labels
- Owner -> Produkt Verantwortlicher
- Zugeteilt an -> Developer der den Report bearbeitet
- Erstellt
- Zuletzt bearbeitet
- Geschlossen am
- Report Zustand -> Offen, In Bearbeitung, Ready, Abgeschlossen
- Priorität -> 1,2,3,4 (1 ist die höchste Priorität)
- (Optionale) Kommentare
  - Autor,
  - Nachricht,
  - Erstellt
  - Typ -> Kunde, Developer, Produkt Manager
- Abgeschlossene Begründung
- (Optionale) Verweise auf externe Dienste

Daraus ergibt sich folgendes Modell in JavaScript:

```js
const report = {
  id: '2412',
  category: "Feedback",
  customerId: "1234",
  description: "This is a description",
  labels: ["label1", "label2"],
  owner: "Product Manager",
  assignedTo: "Jens Reiner",
  createdAt: "2020-01-01:12:00:00",
  editedAt: "2020-01-01:12:00:00",
  closedAt: "2020-01-01:12:00:00",
  state: "Open",
  priority: 1
  comments: [
    {
      author: "Jens Reiner",
      message: "This is a comment",
      createdAt: "2020-01-01:12:00:00",
      type: 'developer',
    },
  ],
  closeReason: "This is a close reason",
  references: [
    {
      type: "github",
      url: "",
      issueNumber: 1
    }
  ]
};
```

> [!IMPORTANT]
> Bitte stellt sicher, dass eure Implementierungen die `key` values genauso definiert wie oben angegeben damit später die Tutorials darauf aufbauen können.

Setzt dieses Datenmodell nun in einem JavaScript Modul um. Bietet darüber hinaus direkt Funktionen an um mit dem Datenmodell zu arbeiten. Wie ihr einen Report abbildet ist dabei euch überlassen.

## Die erste Report Schnittstelle

Wie kann ein Kunde jetzt einen Report bei uns anlegen? Wir brauchen also eine Schnittstelle die das zuvor definierte Datenmodell für außenstehende Clients verfügbar macht. Aber wie definiert man eine Schnittstelle richtig?

In Tutorial [05](./05-Building-The-Customer-Number-Server.md) haben wir einen einfachen HTTP Web Server und ein paar Endpunkte gebaut. Ein Endpunkt ist dabei eine Route die ein HTTP Client aufrufen kann, um mit unsereren Server zu interagieren. Die Vorgestellten Endpunkte waren dabei sehr simpel und haben im Grunde nur die Create, Read, Delete Operationen angeboten. Für das ETUR System möchten wir aber eine umfangreichere Schnittstelle bauen u.a. sollen folgende Use Cases abgebildet werden:

- Kunden Portal
- Developer Portal
- Produkt Manager Portal

Dabei bildet jeder Use Case ein umfangreiches System dar und wird von unterschiedlichen Stakeholdern bedient. Ein Kunde interagiert auf eine andere Art und Weise mit unserem System als ein Developer bspw. Auch kann es Kunden geben die ihr eigenes Portal haben und nur unsere Schnittstelle einbinden möchten. Gleichzeitig gibt es nicht nur ein Developer Portal sondern ggf. mehrere die von unterschiedlichen Teams verwendet werden.

Wir merken schnell: Unsere Schnittstelle muss eine Vielzahl an Systemen mit ihren Szenarien abdecken. Deshalb ist es wichtig sich Gedanken zu machen wie unsere Schnittstelle aussieht und mit welchen Systemen diese interagieren muss.

## Design der ETUR Schnittstelle

(Hier dann an ein Review anknüpfen von anderen Teams)

Die nächste Aufgabe ist die Umsetzung einer ersten ETUR Schnittstelle. Hierbei ist es wichtig nicht nur den Code zu implementieren sondern sich vorab Gedanken machen wie die Schnittstelle aussehen kann. Lest hierfür einmal die [Philosophie hinter API Design](../../explanation/api-design/api-design.md) und überlegt euch dann wie eure Schnittstelle aussehen könnte und welche Punkte ihr alle umsetzen möchtet. Achtet hierbei nicht nur auf die Code Implementierung sondern auch auf ggf. notwendige Dokumentationen.

Eure Schnittstelle sollte dabei folgende Anforderungen betrachten: (Unvollständig)

- Als Kunde kann ich einen neuen Report anlegen
  - Die Kundennummer muss dabei vom Kunden System geprüft werden. Für die ersten Versuche könnt ihr jedem Kunden eine Kundennummer von Hand zuweisen
- Als Kunde kann ich alle meine Reports anhand von einer Kundennummer einsehen und den Status prüfen
- Als Kunde sehe ich Kommentare von Developer, Produkt Managern und die Begründung warum ein Report geschlossen wurde
- Alle Reports sollen an einen Zentralen Dienst übermittelt und archiviert werden
  - Der Zentrale Dienst wird gestellt und soll in [09](./09-Issues-In-The-Central-System.md) eingearbeitet werden
- Als Developer kann ich meine zugewiesenen Reports in einem Developer Portal einsehen
- Als Developer kann ich Reports als "fertig" markieren und diese begründen
- Als Produkt Manager kann ich alle Reports einsehen und bearbeiten sowie diese an Developer zuweisen
- Als Produkt Manager kann ich eine Prirorität für einen Report vergeben
- Als Produkt Manager kan ich nach Reports filtern und suchen
- Als Produkt Manager kann ich mit meinem Kunden über die Kommentar Funktion interagieren
- Als Produkt Manager kann ich nach allen Reports zu einer Kundennummer filtern
- Filterung nach verschiedenen Eigenschaften von einem Report bspw. nach Status, Kategorie, Labels etc.

Darüber hinaus sollte eure Schnittstelle alle Basis Operationen für einen Report anbieten d.h. jedes Feld kann über entsprechende Endpunkte verändert werden. Macht euch Gedanken zu folgenden Punkten:

- Wie verhält sich die Schnittstelle?
- Was ist der Business Case? Und wie sieht dieser aus?
- Wie sprechen die einzelnen Systeme miteinander?
- Was passiert im Fehler Fall?
- Können Fehler eingesehen werden?
- Was sind Dinge die euch noch interessieren und ihr oben drauf bauen möchtet?

> [!TIP]
> Schreibt euch alles zu dieser Aufgabe auf. Macht euch ggf. Skizzen vom Datenmodell, wie ein Client mit einer Schnittstelle arbeitet, welche Daten an welcher Stelle verschickt werden etc. Ihr könnt das alles in eurem Github Repo dann im Anschluss sammeln.

Am Ende von dieser Aufgabe sollte folgendes Vorhanden sein:

- Ein Konzept über die Schnittstelle und welche Gedanken eingeflossen sind
- Eine einfache Guideline wie eure Schnittstelle aufgebaut ist und wie diese verwendet werden kann
- Probleme die bei der Umsetzung aufgetreten sind und wie diese gelöst wurden
- Einen NodeJS Server mit dem Fastify Framework und allen benötigten Endpunkten die über HTTP angesprochen werden können

Ladet alle eure Ergebnisse in eurem Github Repo hoch.

## Fazit

In diesem Tutorial soll herausgearbeitet werden wie viele Aspekte in das Design von einer Schnittstelle eigentlich einfließen. Am Ende soll ein erster Entwurf von unserer ETUR Schnittstelle entstanden sein für die wir in den nachfolgenden Tutorials dann Oberflächen bauen können.

Bevor wir aber damit starten wird im nächsten Tutorial das Design von einer anderen Schnittstelle evaluiert und ein erstes Code Review durchgeführt.
