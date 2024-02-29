# 06 - Connecting The Customer Number System

In diesem Tutorial verbinden wir die zuvor erstellte Webseite und unseren Webserver, um ein abgerundetes Produkt zu erhalten. Am Ende können Benutzer über die Webseite neue Kundennummern anlegen und verwalten. Die eigentliche Logik wird dabei auf dem Webserver ausgeführt. Hier wird unter anderem behandelt, wie man mit JavaScript HTTP-Anfragen an einen Server ausführen kann.

## Einen Kunden anlegen

Die zuvor implementierte Oberfläche (Siehe [05 - Creating The Customer Number System](05-Creating-The-Customer-Number-System.md)) für das Anlegen eines neuen Kunden soll nun mit dem implementierten Webserver verbunden werden. Wir möchten also von unserer Webseite einen HTTP-Request an den Server schicken und die Daten dort anlegen.

Erweitert eure HTML-Seite um eine JavaScript-Datei. Implementiert in dieser einen HTTP-Aufruf über die Fetch API. Die Daten für den HTTP-Aufruf sollen dabei von eurer Oberfläche übernommen werden. Verbindet das Ganze am Ende mit eurem "Create"-Button, um die Daten aus den Input-Feldern an den Server zu schicken.

- Tipp: Mit `id`-Attributen könnt ihr eure Input-Felder eindeutig identifizieren.
- Tipp: Mit `getElementById` könnt ihr auf eure HTML-Elemente in JavaScript zugreifen.
- Tipp: Mit `addEventListener` könnt ihr auf Events wie z.B. einen Klick reagieren.

Startet euren Server im Hintergrund und führt die Aktion "Kunden Anlegen" auf eurer Webseite aus. Was passiert jetzt? 

- Tipp: Wenn ihr wissen wollt, was alles passiert, öffnet die Konsole von eurem Browser mit F12 und beobachtet die Ausgabe (Konsole sowie Network-Tab).

Euer Server sollte die Anfrage ablehnen (CORS), und ihr solltet eine Fehlermeldung in der Konsole sehen. Um das Problem zu lösen, müssen wir unseren Server anpassen.

Installiert dafür `@fastify/cors` in eurem Server-Projekt und registriert `cors` als neues Plugin:

```js
import cors from '@fastify/cors'

fastify.register(cors, {
  origin: '*'
});
```

Startet euren Server neu und probiert nochmal die Anfrage aus. Ihr solltet jetzt auf Server Seite einen neuen Kunden angelegt haben.

## Alle Kunden anzeigen

Als nächstes möchten wir die Kundenliste von unserem Server abrufen und auf der Webseite anzeigen. Dafür müssen wir wieder einen HTTP-Request an den Server schicken. Diesmal möchten wir jedoch Daten vom Server abrufen und nicht an den Server senden. Erweitert euer bestehendes Skript um einen GET-Request, der alle Kundeninformationen vom Server abruft und jeden Kunden als einzelne Karte anzeigt.

> ✏️ Frage: Wie könnt ihr neue Kunden als einzelne Karten anzeigen? Euer HTML beinhaltet vermutlich nicht genügend Karten für jeden Kunden, da diese immer eine unterschiedliche Länge haben.

- Tipp: Erweitert eure Funktion zum Anlegen von Kunden, um neue Kunden automatisch anzuzeigen.

## Prüfen von einer Kunden Nummer

Die letzte Funktion unserer Webseite soll es sein, eine Kundennummer zu prüfen. Erweitert hierfür eure bestehende Webseite um folgende Funktionalität, wenn ein Benutzer auf den "Check / Verify" Button klickt: 

- Der Benutzer soll über ein Eingabefeld eine Kundennummer eingeben können.
- Die Kundennummer wird an den Server übermittelt über einen HTTP-Request und unter Verwendung der Fetch API.

Wenn die Kundennummer gültig ist, soll dem Benutzer ein Feedback dargestellt werden.
Wenn die Kundennummer ungültig ist, soll dem Benutzer ebenfalls ein Feedback dargestellt werden.

## Fazit

Ab diesem Punkt ist das Customer Number System abgeschlossen. Ihr solltet jetzt eine Webseite haben, über die Benutzer neue Kunden anlegen können, alle Kunden sehen und Kundennummern prüfen können. Alle Benutzereingaben und Daten werden dabei von eurem Customer Number Server verwaltet und bereitgestellt. Darüber hinaus können jetzt auch andere Systeme Kundennummern prüfen (über einen HTTP-Request).

Wir haben damit den Grundstein für alle weiteren Themen gelegt, und ihr habt bereits ein vollwertiges System implementiert. Wenn ihr alle Aufgaben rund um das Customer Number System abgeschlossen habt, stellt sicher, dass alle Dateien in eurem Git eingecheckt sind und pusht eure Änderungen in euer Repository. So können andere Gruppen eure Ergebnisse anschauen und gegebenenfalls von ihnen lernen.

Das Customer Number System ist eigentlich nicht das Kernsystem von ETUR, aber es ist ein gutes Beispiel, um die Grundlagen einer Client-Server-Architektur zu verstehen. Im nächsten Tutorial beschäftigen wir uns intensiv mit dem Design von Schnittstellen und möchten die eigentlichen Komponenten von ETUR implementieren.

> ✏️ Frage: Welche Themen beschäftigen euch jetzt noch? Was ist noch unklar? Schreibt diese Informationen auf und vergleicht sie am Ende des Workshops.
