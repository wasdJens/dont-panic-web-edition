# 06 - Connecting The Customer Number System

In diesem Tutorial verbinden wir die zuvor erstellte Webseite und unseren Webserver um ein abgerundetes Produkt zu erhalten. Am Ende können User über die Webseite neue Kunden Nummern anlegen und verwalten. Die eigentlich Logik wird dabei auf dem Webserver ausgeführt. Hier wird u.a. behandelt wie man mit JavaScript HTTP Anfragen an einen Server ausführen kann.

## Einen Kunden anlegen

Die zuvor implementierte Oberfläche (Siehe [05 - Creating The Customer Number System](05-Creating-The-Customer-Number-System.md)) für das Anlegen von einem neuem Kunden soll nun mit dem implementierten Webserver verbunden werden. Wir möchten also von unserer Webseite einen HTTP Request an den Server schicken und die Daten dort anlegen.

Erweitert eure HTML Seite um eine JavaScript Datei. Implementiert in dieser einen HTTP Aufruf über die Fetch API. Die Daten für den HTTP Aufruf sollen dabei von eurer Oberfläche übernommen werden. Verbindet das ganze am Ende mit eurem "Create" Button um die Daten aus den Input Feldern an den Server zu schicken.

- Tipp: Mit `id` Attributen könnt ihr eure Input Felder eindeutig identifizieren
- Tipp: Mit `getElementById` könnt ihr auf eure HTML Elemente in JavaScript zugreifen
- Tipp: Mit `addEventListener` könnt ihr auf Events wie z.B. einen Klick reagieren

Startet euren Server im Hintergrund und führt die Aktion "Kunden Anlegen" auf eurer Webseite aus. Was passiert jetzt? 

- Tipp: Wenn ihr wissen wollt was alles passiert öffnet die Console von eurem Browser mit F12 und beobachtet die Ausgabe (Console sowie Network Tab)

Euer Server sollte die Anfrage ablehnen (CORS) und ihr solltet eine Fehlermeldung in der Console sehen. Um das Problem zu lösen müssen wir unseren Server anpassen.

Installiert dafür `@fastify/cors` in eurem Server Projekt und registriert `cors` als neues Plugin: 
```js
import cors from '@fastify/cors'

fastify.register(cors, {
  origin: '*'
});
```

Startet euren Server neu und probiert nochmal die Anfrage aus. Ihr solltet jetzt auf Server Seite einen neuen Kunden angelegt haben.

## Alle Kunden anzeigen

Als nächstes möchten wir die Kunden Liste von unserem Server abrufen und auf der Webseite anzeigen. Dafür müssen wir wieder einen HTTP Request an den Server schicken. Diesmal möchten wir aber Daten vom Server abrufen und nicht an den Server schicken. Erweitert euer bestehendes Skript um einen GET Request der alle Kunden Informationen vom Server holt und zeigt jeden Kunden als einzelne Karte an.

> ✏️ Frage: Wie könnt ihr neue Kunden als einzelne Karten anzeigen? Euer HTML beinhaltet vermutlich nicht genügend Karten für jeden Kunden da diese immer eine andere Länge beinhalten

- Tipp: Erweitert eure Kunden Anlegen Funktion den neuen Kunden auch automatisch anzuzeigen.

## Prüfen von einer Kunden Nummer

Die letzte Funktion unserer Webseite soll es sein eine Kunden Nummer zu prüfen. Erweitert hierfür eure bestehende Webseite um folgende Funktionalität wenn ein User auf den "Check / Verfiy" Button klickt: 

- Der Benutzer soll über ein Eingabe Feld eine Kunden Nummer eingeben können
- Die Kunden Nummer wird an den Server übermittelt über einen HTTP Request und der Verwendung der Fetch API.

Wenn die Kunden Nummer gültig ist soll dem Benutzer ein Feedback dargestellt werden.
Wenn die Kunden Nummer ungültig ist soll dem Benutzer ein Feedback dargestellt werden.

## Fazit

Ab diesen Punkt ist das Customer Number System abgeschlossen. Ihr solltet jetzt eine Webseite haben über die User neue Kunden anlegen können, alle Kunden sehen und Kunden Nummern prüfen können. Alle Benutzer Eingaben und Daten werden dabei von eurem Customer Number Server verwaltet und bereit gestellt. Darüber hinaus können jetzt auch andere Systeme Kunden Nummern prüfen (über einen HTTP Request).

Wir haben damit jetzt den Grundstein gelegt für alle weiteren Themen und ihr habt bereits ein vollwertiges System implementiert. Wenn ihr alle Aufgaben um das Customer Number System abgeschlossen habt stellt sicher, dass alle Dateien in eurem Git eingecheckt sind und pusht eure Änderungen in euer Repository. So können andere Gruppen auch eure Ergebnisse anschauen und ggf. von euren Ergebnissen lernen.

Das Customer Number System ist eigentlich nicht das Kern System von ETUR aber es ist ein gutes Beispiel um die Grundlagen einer Client Server Architektur zu verstehen. Im nächsten Tutorial beschäftigen wir uns intensiv mit Schnittstellen Design und möchten die eigentlichen Komponenten von ETUR implementieren.

> ✏️ Frage: Was sind Themen die euch jetzt noch beschäftigen? Was ist noch unklar? Schreibt diese Informationen auf und vergleicht Sie am Ende vom Workshop