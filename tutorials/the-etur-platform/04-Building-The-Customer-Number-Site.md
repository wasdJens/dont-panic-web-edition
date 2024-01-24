# 04 - Building the Customer Number Website

In diesem Tutorial möchten wir die erste Webseite für das Kunden Nummer System erstellen. Der Fokus liegt hierbei rein auf den Grundlagen von HTML und CSS. Wir werden noch keine JavaScript Funktionalität einbauen. Das Ziel ist eine Webseite die im Browser geöffnet werden kann. Die Webseite soll Eingaben entgegen nehmen für einen neuen Kunden, alle bestehenden Kunden anzeigen und das Überprüfen einer gegebenen Kunden Nummer erlauben.

## Boilerplate

- Legt euch eine neue Webseite im Ordner `website` an. Erstellt dafür alle notwendigen Dateien und bindet diese entsprechend ein.
  - Tipp: Es sollte eine HTML Datei, eine Stylesheet Datei sowie eine JavaScript Datei erstellt werden
- Gebt der Webseite einen Titel
  - Tipp: Der Titel taucht dann als Browser Tab Name auf
- Probiert eure Webseite aus und öffnet diese im Browser
- Überlegt euch eine Mögliche Navigation für die Webseite sowie eine Überschrift

## Alle Kunden anzeigen

- Überlegt euch Beispiel Kunden und bildet diese auf eurer Webseite ab
  - Tipp: Verwendet hierfür Flexboxen oder ein CSS Grid
- Es empfiehlt sich für jeden Kunden eine "Karte" anzulegen.
  - Eine Karte ist dabei ein Container der später alle Informationen zu einem Kunden beinhaltet
  - Diese Karte kann mittels CSS entsprechend gestyled werden

## Neuen Kunden anlegen

- Erstellt eine Eingabe Maske die es ermöglicht auf Knopfdruck einen neuen Kunden anzulegen
  - Tipp: Die Funktion vom Button muss hier noch nicht implementiert werden
  - Tipp: Ihr könnt das über eine Form oder über einzelne Input Felder lösen

## Kunden Nummer prüfen

- Erstellt eine zweite Eingabe Maske die es ermöglicht eine bestehende Kunden Nummer zu validieren
  - Tipp: Die Funktion rund um die Validierung muss hier noch nicht implementiert werden
  - Tipp: Ihr könnt das über eine Form oder über einzelne Input Felder lösen

Damit haben wir die Grundlage für unsere Webseite geschaffen. Im nächsten Schritt erarbeiten wir die zweite Software Komponente nämlich die API um die Webseite mit Daten zu versorgen und tauchen das erste mal in die Welt von JavaScript ein.