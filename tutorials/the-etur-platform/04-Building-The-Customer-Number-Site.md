# 04 - Building the Customer Number Website

In diesem Tutorial möchten wir die erste Webseite für das Kundennummernsystem erstellen. Der Fokus liegt hierbei rein auf den Grundlagen von HTML und CSS. Wir werden noch keine JavaScript-Funktionalität einbauen. Das Ziel ist eine Webseite, die im Browser geöffnet werden kann. Die Webseite soll Eingaben entgegennehmen für einen neuen Kunden, alle bestehenden Kunden anzeigen und das Überprüfen einer gegebenen Kundennummer erlauben.

## Boilerplate

- Erstellt einen neuen Ordner namens `websites`, um darin die benötigten Dateien zu organisieren. Dazu gehören eine HTML-Datei für die Struktur der Seite, eine Stylesheet-Datei für das Design und eine JavaScript-Datei für spätere Funktionalitäten.
  - Tipp: Die HTML-Datei dient als Grundgerüst der Seite, die Stylesheet-Datei steuert das Aussehen, und die JavaScript-Datei wird später für Interaktionen verwendet.

- Gebt der Webseite einen aussagekräftigen Titel, der im Browser-Tab erscheinen soll.
  - Tipp: Der Titel sollte klar und prägnant sein, um den Inhalt der Seite zu beschreiben.

- Öffnet die Webseite im Browser, um sicherzustellen, dass sie korrekt funktioniert und angezeigt wird.
  - Tipp: Ein einfacher Doppelklick auf die HTML-Datei sollte genügen, um die Seite im Standardbrowser zu öffnen.

## Layout

Das Kundennummernsystem soll drei Aufgaben übernehmen:

- Alle Kunden anzeigen
- Die Möglichkeit bieten, einen neuen Kunden über eine Webseite anzulegen
- Eine Kundennummer überprüfen

Jeder dieser Funktionen soll einen eigenen Bereich auf der Webseite bekommen. Hierfür könnt ihr einen Container in einem `div`-Element erstellen. Als `display`-Property, um die Bereiche voneinander zu trennen, gibt es ein übergeordnetes `div` mit einer Flexbox. Wie ihr die einzelnen Bereiche anordnet, ist dabei euch überlassen.

Darüber hinaus sollte die Webseite noch gängige Basiselemente beinhalten, also beispielsweise einen Header und einen Footer. Im Header könnt ihr den Titel der Anwendung nochmal angeben.

## Alle Kunden anzeigen

Überlegt euch, welche Informationen ein Kunde für die ETUR Software Lösung haben könnte. Ein einfaches Beispiel sind Name und eine Kundennummer. Baut basierend auf diesen Informationen verschiedene "Karten" mit HTML und CSS. Die Karten sollen dabei die Kundenummer und den Namen abbilden. 

Wie eine Kundenkarte genau aussieht, ist euch überlassen. Ein paar gängige Anpassungen sind beispielsweise Hintergrundfarbe, Border mit Radius und Schatten. Für den ersten Schritt könnt ihr einfach eine Karte definieren und diese direkt anzeigen. Um den Inhalt innerhalb der Karte richtig zu positionieren, verwendet am besten eine Flexbox.

Als nächstes möchten wir eine Liste von Karten anzeigen. Für unterschiedliche Bildschirmgrößen soll das Layout sich automatisch anpassen, d.h. auf normalen Desktopgrößen sollen mehrere Kunden nebeneinander dargestellt werden und die Karten sollen generell größer wirken. Auf Handygrößen sollen die Karten untereinander dargestellt werden. Hierfür können wir entweder ein CSS Grid oder auch eine Flexbox verwenden. Unsere Karten sind dann einfach Elemente dieses Container-Elements.

## Neuen Kunden anlegen

Kunden werden später von einem Key Account Manager angelegt. Dieser besucht die Kunden Nummer Webseite und soll deshalb ein Formular vorfinden um einen neuen Kunden anzulegen. Macht euch Gedanken welche Informationen unbedingt angegeben werden müssen um einen Kunden anzulegen (Bspw. Name und Kundenummer) und bietet einen Button an über den der neue Kunde dann angelegt werden kann.

> [!NOTE]
> Die eigentliche Anbindung und Logik muss hier noch nicht implementiert werden. Erstellt nur das benötigte HTML und CSS.

## Kunden Nummer prüfen

Key Account Manager können auch überprüfen, ob eine Kundennummer, die sie im System finden, noch existiert oder ob der Kunde möglicherweise bereits entfernt wurde. Der Key Account Manager soll hierfür eine Kundennummer eingeben können und dann eine Rückmeldung erhalten, ob die Kundennummer existiert oder nicht.

> [!NOTE]
> Die eigentliche Anbindung und Logik muss hier noch nicht implementiert werden. Erstellt nur das benötigte HTML und CSS.


## Fazit

Am Ende solltet ihr jetzt eine erste Webseite für das Kundennummernsystem haben mit den drei Hauptfunktionalitäten. Auch habt ihr euch mit den Grundlagen von HTML und CSS vertraut gemacht.

> [!TIP]
> Um später einmal den ursprünglichen Zustand mit der fertigen Lösung abzugleichen macht euch einmal einen Screenshot von eurer Lösung.

Als nächstes implementieren wir die eigentliche Logik für das Kundennummernsystem als Server-Schnittstelle, die über HTTP angesprochen werden kann.
