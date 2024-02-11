# 11 - Bringing Everything Together

In diesem Tutorial geht es darum das Fehlende Portal aus [10](./10-Creating-The-Etur-Platforms.md) in eure ETUR Software Lösung zu integrieren. Dabei sollt ihr auf eine andere Gruppe zugehen und das fehlende Portal von dieser Gruppe einkaufen. Ihr selbst könnt natürlich auch eure Lösungen anbieten falls einer Gruppe ein Teil fehlt, welchen ihr vorher implementiert habt.

Das Ziel ist der Austausch und Integration von einem fremden System. Man wird häufig das Problem haben, dass man auf eine Software Komponente keinen bis wenig Einfluss nehmen kann. Aus diesem Grund solltet ihr euch gut mit der anderen Gruppe abstimmen ob die Lösung zu eurem System passt und euch in dieser Aufgabe mit der Integration beschäftigen.

## Tauschbörse

Bereitet entweder eine oder beide Lösungen von euch so vor, dass ihr sie im Anschluss anderen Gruppen präsentieren könnt. Für potentielle Käufer sollte es natürlich einfach sein eure Lösung einzusetzen d.h. legt Wert auf eine gute Dokumentation (bspw. wie startet man die Anwendung, wo sind die API Calls implementiert etc.) und Hinweise wie ggf. eine andere Gruppe eure Lösung einsetzen kann und was die Vorteile von eurer Lösung ist.

> [!TIP]
> In Teams findet ihr den Channel "Tauschbörse" und könnt hier einen Post machen der eure Lösung vorstellt. Es bietet sich hier an bspw. ein Link zu eurem Github Repository zu posten. Über diesen Channel könnt ihr auch einfach die Lösungen der anderen anschauen falls diese gerade in einem Gespräch verwickelt sind.

## Eine Lösung einkaufen

Sucht euch eine Gruppe aus, welche das fehlende Portal implementiert hat und kauft dieses ein. Achtet darauf das die andere Lösung zu eurem System passt. Sprecht ggf. mit der anderen Gruppe wie Sie bestimmte Dinge umgesetzt hat, um ein bessere Verständnis für die Integration zu bekommen.

## Integration vom neuem Portal

Falls notwendig passt eure Software so an, dass das neue Portal integriert werden kann. Bspw. müsst ihr API Anfragen aus dem neuem Portal auf eure URLs abändern oder etwas am Datenmodell modifizieren. Probiert auch aus ob alle Aufgaben wie erwartet funktionieren. In diesem Teil soll die ETUR Software Lösung abgeschlosen werden.

Am Ende sollten folgenden Software Komponenten abgeschlossen sein:

- Customer Number System: Hier können Kunden Nummern angelegt werden und das System prüft auf Gültigkeit einer gegebenen Kundenummer
- ETUR Schnittstelle: Alle Reports werden auf dieser Schnittstelle verwaltet. Die einzelnen anderen Komponenten können hier Reports anlegen und abrufen.
- Kunden Portal: Kunden können sich anmelden und Reports einsehen und bearbeiten
- Produkt Management Portal: Produkt Manager können Reports einsehen und bearbeiten
- Developer Portal: Developer können Reports einsehen und bearbeiten

Achtet darauf, dass eure Systeme alle Reibungslos miteinander arbeiten und probiert bspw. die Ursprüngliche Use Case Definition [01](./01-Use-Case-Sample.md) einmal mit eurer Lösung aus.

## Fazit

Mit fremden Software Komponenten zu arbeiten ist eine Herausforderung. Deshalb ist es auch wichtig mehr Code zu lesen als selbst zu schreiben, um sich in fremden Lösungen schnell zurecht zu finden. Aber aus fremden Lösungen kann man auch sehr viel lernen und es gibt einen tieferen Einblick wie man mit unterschiedlichen Ansätzen zu einer Lösung kommen kann.

Ihr solltet jetzt eine erste Version von der ETUR Platform fertig implementiert haben. Als nächstes bereiten wir die Lösung noch ein wenig vor um einen ersten "Release" von ETUR zu machen. Darüber hinaus gibt es noch weitere Tutorials in der Zukunft die auf ETUR aufbauen und die Software weiter ausbauen.