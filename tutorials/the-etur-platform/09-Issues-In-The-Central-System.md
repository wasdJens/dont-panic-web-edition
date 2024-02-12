# 09 - Issues in the Central System

In diesem Tutorial möchten wir das Central Report System genauer betrachten und integrieren. Dabei wird schnell klar, dass das Central Report System noch einige Fehler beinhaltet und das Ziel ist es diese Fehler zu finden und ggf. zu beheben. Die Kunst Fehler zu analyisieren in einer Softwarelösung sind vermutlich das wichtigste Werkzeug im Kasten von einem Software Entwickler. Wir möchten deshalb in diesem Tutorial üben wie man sich zum einen in einer fremden Code Base zurecht findet und wie man Fehler schnell eingrenzen und beheben kann. Gleichzeitig werden hier nochmal die Grundlagen von JavaScript und Node.js aufgefrischt.

## Central System einbinden

Auf Github findet ihr den Source Code von der `central-system` Implementierung. Kopiert euch den Server in euer Projekt und befolgt die Anleitung.

Das `central-system` ist eine Audit Lösung und soll später alle Reports die angelegt werden archivieren. Wenn ETUR also einen neuen Report erstellt soll dieser Report an das `central-system` geschickt werden für die Langzeit Archivierung. Reports löschen oder bearbeiten funktioniert nicht mehr. Wenn ETUR einen Report löscht bleibt dieser im Audit System. Wenn ETUR einen Report bearbeitet soll ein neuer Eintrag im Audit System erstellt werden.

Das `central-system` gibt einen angelegten Report mit einer `id` zurück. Erweitert euer Report Datenmodell um ein `auditId` Feld und speichert die ID dort.

Für einen Auditor von ETUR muss es dann in Zukunft möglich sein jeden Report der jemals angelegt wurde abzufragen über das `central-system` anhand von der ID.

Probiert die Integration zwischen ETUR und dem `central-system` anschließend aus und beobachtet was für Werte in die `audit.log` Datei geschrieben werden. Versucht auch einmal einen bestehenden Report zu lesen über die Schnittstelle.

## Central System Analyse

Bei der Intgeration und Testing der Schnittstelle sollte euch auffallen, dass die `central-system` Schnittstelle nicht so funktioniert wie erwartet.

Ein häufiges Problem in dem Design von Schnittstellen, dass die Kommunikation von Asynchronen Anwendungen nicht für den Fehlerfall betrachtet wird.

> ✏️ Frage: Was macht eine Schnittstelle die einen Datensatz an eine andere schicken möchte aber keine Antwort erhält? 

> ✏️ Frage: Was für Lösungen fallen euch auf Anhieb dazu ein? Notiert diese als Brainstorming in eurem Github Repo

Wenn ihr mehr über das Thema nachlesen möchtet schaut euch einmal das Thema [Observability](../../explanation/observability/observability.md) an.

Jetzt geht es darum die Fehler im Central System zu finden und zu fixen. Macht euch dafür mit Debugging Tools vertraut und versucht die Fehler zu finden und zu reparieren. Als Hilfe könnte das [How To: Debugging in JS](../../how-to-guides/javascript/debugging-js.md) hilfreich sein.

Am Ende sollte das Central System und eure ETUR Lösung Reibungslos funktionieren und jeden Report als Audit Log erfolgreich anlegen. Zur Kontrolle könnt ihr die Datei `audit.log` öffnen und schauen ob eure Reports gespeichert werden.

## Fazit

Fehler in Softwarelösungen treten immer wieder auf. Wichtig ist, von Anfang an auch Fehler Use Cases zu definieren und diese sinnvoll zu beheben. Auch wird häufig die Reliabiltiy von anderen Services unterschätzt und so kann es passieren, dass ein Service der sonst zuversichtlich arbeitet plötzlich nicht mehr erreichbar ist.

Code Lesen, Debugging und co werden euch darüber hinaus immer wieder begegnen. Es ist deshalb wichtig, dass ihr euch im klaren seid welche Tools es gibt um Fehler nachzuvollziehen. Richtiges Logging kann hier auch eine Möglichkeit sein nachzuvollziehen. Wo eine Anwendung nicht das erwartet tut.

Als nächstes werden die fehlenden Portale von der ETUR Platform gebaut.