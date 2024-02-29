# 09 - Issues in the Central System

In diesem Tutorial möchten wir das Central Report System genauer betrachten und integrieren. Dabei wird schnell klar, dass das Central Report System noch einige Fehler beinhaltet und das Ziel ist es, diese Fehler zu finden und ggf. zu beheben. Die Kunst, Fehler in einer Softwarelösung zu analysieren, ist vermutlich das wichtigste Werkzeug im Kasten eines Softwareentwicklers. Wir möchten deshalb in diesem Tutorial üben, wie man sich zum einen in einer fremden Codebase zurechtfindet und wie man Fehler schnell eingrenzen und beheben kann. Gleichzeitig werden hier nochmal die Grundlagen von JavaScript und Node.js aufgefrischt.

## Central System einbinden

Auf GitHub findet ihr den Source Code der `central-system` Implementierung. Kopiert euch den Server in euer Projekt und befolgt die Anleitung.

Das `central-system` ist eine Audit-Lösung und soll später alle Reports, die angelegt werden, archivieren. Wenn ETUR also einen neuen Report erstellt, soll dieser Report an das `central-system` geschickt werden, um ihn langfristig zu archivieren. Das Löschen oder Bearbeiten von Reports funktioniert nicht mehr. Wenn ETUR einen Report löscht, bleibt dieser im Audit-System. Wenn ETUR einen Report bearbeitet, soll ein neuer Eintrag im Audit-System erstellt werden.

Das `central-system` gibt einen angelegten Report mit einer `id` zurück. Erweitert euer Report-Datenmodell um ein `auditId`-Feld und speichert die ID dort.

Für einen Auditor von ETUR muss es dann in Zukunft möglich sein, jeden Report, der jemals angelegt wurde, über das `central-system` anhand der ID abzufragen.

Probiert die Integration zwischen ETUR und dem `central-system` anschließend aus und beobachtet, welche Werte in die `audit.log`-Datei geschrieben werden. Versucht auch einmal, einen bestehenden Report über die Schnittstelle zu lesen.

## Central System Analyse

Bei der Integration und dem Testen der Schnittstelle sollte euch auffallen, dass die `central-system` Schnittstelle nicht wie erwartet funktioniert.

Ein häufiges Problem im Design von Schnittstellen ist, dass die Kommunikation von asynchronen Anwendungen nicht für den Fehlerfall berücksichtigt wird.

> ✏️ Frage: Was passiert, wenn eine Schnittstelle einen Datensatz an eine andere schicken möchte, aber keine Antwort erhält?

> ✏️ Frage: Welche Lösungen fallen euch dazu spontan ein? Notiert diese als Brainstorming in eurem GitHub-Repo.

Wenn ihr mehr über das Thema nachlesen möchtet, schaut euch das Thema [Observability](../../explanation/observability/observability.md) an.

Jetzt geht es darum, die Fehler im Central System zu finden und zu beheben. Macht euch mit Debugging-Tools vertraut und versucht, die Fehler zu finden und zu reparieren. Als Hilfe könnte das [How To: Debugging in JS](../../how-to-guides/javascript/debugging-js.md) hilfreich sein.

Am Ende sollte das Central System und eure ETUR-Lösung reibungslos funktionieren und jeden Report erfolgreich als Audit Log anlegen. Zur Kontrolle könnt ihr die Datei `audit.log` öffnen und prüfen, ob eure Reports gespeichert werden.

## Fazit

Fehler in Softwarelösungen treten immer wieder auf. Wichtig ist, von Anfang an auch Fehler-Use-Cases zu definieren und diese sinnvoll zu beheben. Auch wird häufig die Reliabilität von anderen Services unterschätzt, und so kann es passieren, dass ein Service, der sonst zuverlässig arbeitet, plötzlich nicht mehr erreichbar ist.

Code lesen, Debugging und Co. werden euch darüber hinaus immer wieder begegnen. Es ist deshalb wichtig, dass ihr euch im Klaren seid, welche Tools es gibt, um Fehler nachzuvollziehen. Richtiges Logging kann hier auch eine Möglichkeit sein, um nachzuvollziehen, wo eine Anwendung nicht das erwartet tut.

Als nächstes werden die fehlenden Portale der ETUR-Plattform gebaut.
