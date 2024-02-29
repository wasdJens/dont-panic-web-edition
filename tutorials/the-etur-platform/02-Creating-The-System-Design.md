# 02 - Creating the System Design

In diesem Tutorial möchten wir gemeinsam einen Systementwurf für ETUR erstellen. Dabei ist es wichtig, die Komplexität gering zu halten und sich nur auf das Notwendigste zu beschränken. Das Ziel ist dabei, aus wenigen Kundenanforderungen bereits ein grobes Bild vor Augen zu bekommen: Welche Dienste werden benötigt, welche Dienste müssen miteinander sprechen, welche Technologien kann ich einsetzen? 

## Kommunikation in einem (Verteilten) System

In einem verteilten System ist es wichtig, dass die einzelnen Komponenten miteinander kommunizieren können. Dabei gibt es verschiedene Möglichkeiten, wie die Kommunikation ablaufen kann. Anhand des zuvor vorgestellten Use Case: Was ist die einfachste Kommunikation, die ETUR ermöglichen muss?

Um auf diese Frage zu antworten, müssen wir uns zunächst die einzelnen Abläufe anschauen. In unserem Beispiel hat der User eine E-Mail an ETUR geschickt. ETUR hat diese E-Mail erhalten und anhand der E-Mail-Adresse den Kunden erkannt. Anschließend wurde der Report automatisch klassifiziert und an den zuständigen Projektverantwortlichen weitergeleitet.

Für diesen "einfachen" Fall hat ETUR verschiedene Stationen (oder Systeme) durchlaufen müssen, die wir einmal auflisten (unvollständig):

- E-Mail - ETUR ist in der Lage, eine E-Mail zu empfangen, d.h. es gibt einen E-Mail-Server in der Systemlandschaft.
- Zuordnung - ETUR ist in der Lage, einer E-Mail eine Kundennummer zuzuordnen. D.h. es gibt ein System, welches die Kundennummer kennt und diese zuordnen kann.
- Report - ETUR hat anhand der E-Mail und verschiedenen Klassifizierungen (Diese lassen wir hier weg) einen Report im System erstellt.

Aus dieser Auflistung möchten wir zwei Systeme hervorheben und genauer betrachten:

- Kundennummer zuordnen
- Report anlegen

Woher kennt das System die Kundennummern?
Wenn das System eine Kundennummer erkannt hat, wie kann es prüfen, ob diese Nummer existiert?
Wie kann man eine neue Kundennummer anlegen?
Wer darf eine neue Kundennummer anlegen?

Wenn das System alle notwendigen Informationen gesammelt hat, wie kann es einen Report anlegen? Und was sind alle notwendigen Informationen, damit ein Report sinnvoll ist?

Mit welcher Technologie können wir diese beiden Systeme abbilden?

> ✏️ Frage: Welche Technologien, die ihr aus dem Alltag kennt, würden sich hier anbieten?

> ✏️ Frage: Wie können Daten über ein Netzwerk ausgetauscht werden?

## Ein erster Blueprint

Um uns das ETUR-System besser vorzustellen, möchten wir mit einem Blueprint beginnen und alle Komponenten sowie Kommunikationswege einzeichnen. Keine Sorge, wenn der Blueprint im ersten Entwurf nicht perfekt ist, hier geht es viel mehr um ein Verständnis, welche Systeme miteinander sprechen müssen.

## Kundennummernsystem

Die erste Frage, die man sich stellen kann, ist: Was für Softwarekomponenten werden benötigt, um eine Kundennummer anzulegen und abzufragen?

Aus dieser Frage lassen sich folgende Abläufe herleiten: 

- Man benötigt eine Möglichkeit, um eine neue Kundennummer anzulegen.
  - Was wird alles benötigt, um eine Kundennummer anzulegen?
- Man benötigt eine Möglichkeit, eine gegebene Kundennummer zu prüfen (Ist diese valide oder nicht?).
  - Was passiert, wenn eine Kundennummer nicht valide ist?
- Man benötigt eine Möglichkeit, eine bekannte Kundennummer wieder zu entfernen.
  - Was passiert mit anderen Komponenten, die auf eine Kundennummer eine Referenz haben?
- Andere Systeme sprechen mit dem Kundennummernsystem, um beispielsweise Anfragen automatisch zuzuordnen.

Wir lassen bewusst das Updaten einer Kundennummer hier weg. Wenn ein Kunde Änderungen wie beispielsweise den Firmennamen ändern möchte, muss eine neue Kundennummer angelegt werden. 

Die erste Softwarekomponente von ETUR ist also eine Verwaltung der Kundennummern. Jetzt stellt sich die Frage, was alles zur Softwarekomponente "Kundennummer" gehört. Das erste ist eine Oberfläche für das Anlegen und Verwalten von Kundennummern. Die Oberfläche muss darüber hinaus alle Eingaben an das eigentliche System übermitteln. Andere Dienste müssen auch auf Kundeninformationen zugreifen, die gegebenenfalls automatisch passieren (Vergleich mit einer KI, die automatisch Reports zuordnen kann).

> ✏️ Frage: Aus welchen Teilen besteht also unser Kundennummernsystem? 

Eine Möglichkeit wäre folgende Aufteilung: 

- Webseite für das Verwalten von Kundennummern
- Schnittstelle für das Abfragen von Kundeninformationen

![Customer System Blueprint](../../_attachments/02-System-Blueprint-1.png)

## Report System

Das Kundennummernsystem ist eigentlich nur ein kleiner Bestandteil von ETUR, zeigt aber bereits, wie viele Fragestellungen sich aus einer einfachen Anforderung ergeben können. Der nächste Blueprint, den wir erarbeiten möchten, ist das Report-System. Die Fragestellungen aus dem Kundennummernsystem lassen sich hier adaptieren: 

> ✏️ Frage: Welche Abläufe ergeben sich für das Report-System?

Auf der höchsten Abstraktionsebene eines Systemdesigns erkennt man schnell, dass sich grundlegende Abläufe eigentlich immer wiederholen bzw. ableiten lassen. Ein Überbegriff, der gerne für diese Art von Operationen verwendet wird, ist CRUD (Create, Read, Update, Delete). Das bedeutet, egal welches System man gerade plant, man kann immer mit diesen Operationen starten und sich anhand dieser weitere Fragestellungen definieren. Eine einfache, aber meistens unterschätzte Frage ist: Was passiert eigentlich beim Löschen (Delete)?

Diese Frage klingt im ersten Moment banal, aber wenn wir alleine das ETUR-System betrachten, müssen wir uns die Frage stellen: Wenn das Report-System eine Kundennummer auflösen möchte und diese bereits im Kundennummernsystem gelöscht wurde, wie verhält sich das Report-System? Was passiert mit bereits existierenden Reports? Was passiert auf Datenbankebene (die Ebene, wo alle unsere Daten persistent gespeichert werden)?

Auch für das Reporting können wir wieder eine Webseite für die Verwaltung von Reports definieren und eine Schnittstelle, auf der andere Systeme zugreifen können.

![Report System Blueprint](../../_attachments/02-System-Blueprint-2.png)

## Darüber hinaus

Zu jedem Systemdesign gehören natürlich noch viele weitere Bausteine, die wir hier nicht explizit aufgezählt haben, aber ein Produkt vollständig abrunden. In den nachfolgenden Tutorials werden wir hier gezielt auf ein paar Punkte eingehen. Für einen ersten Überblick eine (unvollständige) Liste mit weiteren Bausteinen: 

- Identity- und Access-Systeme
- Logging-Systeme
- Monitoring-Systeme
- Deployment-Techniken
- Testing-Techniken
- Infrastruktur
- ...

Als erstes möchten wir jetzt die Webseite für das Kundennummernsystem entwerfen.
