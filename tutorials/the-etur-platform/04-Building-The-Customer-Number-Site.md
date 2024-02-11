# 04 - Building the Customer Number Website

In diesem Tutorial möchten wir die erste Webseite für das Kunden Nummer System erstellen. Der Fokus liegt hierbei rein auf den Grundlagen von HTML und CSS. Wir werden noch keine JavaScript Funktionalität einbauen. Das Ziel ist eine Webseite die im Browser geöffnet werden kann. Die Webseite soll Eingaben entgegen nehmen für einen neuen Kunden, alle bestehenden Kunden anzeigen und das Überprüfen einer gegebenen Kunden Nummer erlauben.

## Boilerplate

- Erstellt einen neuen Ordner namens `websites`, um darin die benötigten Dateien zu organisieren. Dazu gehören eine HTML-Datei für die Struktur der Seite, eine Stylesheet-Datei für das Design und eine JavaScript-Datei für spätere Funktionalitäten.
  - Tipp: Die HTML-Datei dient als Grundgerüst der Seite, die Stylesheet-Datei steuert das Aussehen, und die JavaScript-Datei wird später für Interaktionen verwendet.

- Gebt der Webseite einen aussagekräftigen Titel, der im Browser-Tab erscheinen soll.
  - Tipp: Der Titel sollte klar und prägnant sein, um den Inhalt der Seite zu beschreiben.

- Öffnet die Webseite im Browser, um sicherzustellen, dass sie korrekt funktioniert und angezeigt wird.
  - Tipp: Ein einfacher Doppelklick auf die HTML-Datei sollte genügen, um die Seite im Standardbrowser zu öffnen.

## Layout

Das Kunden Nummer System soll drei Aufgaben übernehmen:

- Alle Kunden anzeigen
- Die Möglichkeit bieten einen neuen Kunden über eine Webseite anzulegen
- Eine Kunden Nummer überprüfen

Jeder dieser Funktionen soll einen eigenen Bereich auf der Webseite bekommen. Hierfür könnt ihr einen container in einem div Element erstellen. Als `display` Property um die Bereiche voneinander zu trennen gibt es ein übergeordnetes `div` mit einer flexbos bspw. Wie ihr die einzelnen Bereiche anordnet ist dabei euch überlassen.

Darüber hinaus sollte die Webseite noch gängige Basis Elemente beinhalten also bspw. einen Header und einen Footer. Im Header könnt ihr den Titel der Anwendung nochmal mitgeben.

## Alle Kunden anzeigen

Überlegt euch welche Informationen ein Kunde haben könnte für die ETUR Software Lösung. Ein einfaches Beispiel sind Name und eine Kundennummer. Baut basierend auf diesen Kunden verschiedene "Karten" mit HTML und CSS. Die Karten sollen dabei die Kundenummer und den Namen abbilden. 

Wie eine Kunden Karte genau aussieht ist euch überlassen. Ein paar gängige Anpassungen sind bspw. Hintergrundfarbe, Border mit Radius und Schatten. Für den ersten Schritt könnt ihr einfach eine Karte erstmal definieren und diese direkt anzeigen. Um den Inhalt innerhalb der Karte richtig zu positionieren verwendet am besten eine Flexbox.

Als nächstes möchten wir eine Liste von Karten anzeigen. Für Unterschiedliche Screen Größen soll das Layout sich automatisch anpassen d.h. auf normalen Desktop Größen sollen mehrere Kunden nebeneinander dargestellt werden und die Karten Allgemein größer wirken. Auf Handy Größen sollen die Karten untereinander dargestellt werden. Hierfür können wir entweder ein CSS Grid oder auch eine Flexbox verwenden. Unsere Karten sind dann einfach Elemente von diesem Container Element.

## Neuen Kunden anlegen

Kunden werden später von einem Key Account Manager angelegt. Dieser besucht die Kunden Nummer Webseite und soll deshalb ein Formular vorfinden um einen neuen Kunden anzulegen. Macht euch Gedanken welche Informationen unbedingt angegeben werden müssen um einen Kunden anzulegen (Bspw. Name und Kundenummer) und bietet einen Button an über den der neue Kunde dann angelegt werden kann.

> [!NOTE]
> Die eigentliche Anbindung und Logik muss hier noch nicht implementiert werden. Erstellt nur das benötigte HTML und CSS.

## Kunden Nummer prüfen

Key Account Manager können auch überprüfen ob eine Kunden Nummer die Sie im System finden noch exisitert oder ob der Kunde ggf. bereits entfernt wurde. Der Key Account Manager soll hierfür eine Kunden Nummer eingeben können und dann eine Rückmeldung bekommen ob die Kunden Nummer existiert oder nicht.

> [!NOTE]
> Die eigentliche Anbindung und Logik muss hier noch nicht implementiert werden. Erstellt nur das benötigte HTML und CSS.


## Fazit

Am Ende solltet ihr jetzt eine erste Webseite für das Kunden Nummern System haben mit den drei Hauptfunktionalitäten. Auch habt ihr euch mit den Grundlagen von HTML und CSS vertraut gemacht.

> [!TIP]
> Um später einmal den ursprünglichen Zustand mit der fertigen Lösung abzugleichen macht euch einmal einen Screenshot von eurer Lösung.

Als nächstes implementieren wir die eigentliche Logik für das Kunden Nummern System als Server Schnittstelle die über HTTP angesprochen werden kann.