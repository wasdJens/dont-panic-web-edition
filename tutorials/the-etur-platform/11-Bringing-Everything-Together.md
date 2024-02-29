# 11 - Bringing Everything Together

In diesem Tutorial geht es darum, das fehlende Portal aus [10](./10-Creating-The-Etur-Platforms.md) in eure ETUR Software Lösung zu integrieren. Dabei sollt ihr auf eine andere Gruppe zugehen und das fehlende Portal von dieser Gruppe erwerben. Ihr könnt natürlich auch eure Lösungen anbieten, falls einer Gruppe ein Teil fehlt, den ihr zuvor implementiert habt.

Das Ziel ist der Austausch und die Integration eines fremden Systems. Oftmals hat man wenig bis keinen Einfluss auf eine Softwarekomponente. Aus diesem Grund solltet ihr euch gut mit der anderen Gruppe abstimmen, ob die Lösung zu eurem System passt, und euch in dieser Aufgabe mit der Integration beschäftigen.

## Tauschbörse

Bereitet entweder eine oder beide Lösungen von euch so vor, dass ihr sie im Anschluss anderen Gruppen präsentieren könnt. Für potenzielle Käufer sollte es natürlich einfach sein, eure Lösung einzusetzen. Legt Wert auf eine gute Dokumentation (z. B. wie man die Anwendung startet, wo die API-Calls implementiert sind usw.) und Hinweise, wie eine andere Gruppe eure Lösung einsetzen kann und welche Vorteile sie bietet.

> [!TIP]
> In Teams findet ihr den Channel "Tauschbörse", wo ihr einen Beitrag erstellen könnt, um eure Lösung vorzustellen. Es bietet sich an, einen Link zu eurem GitHub-Repository zu teilen. Über diesen Channel könnt ihr auch die Lösungen der anderen Gruppen anschauen, falls sie gerade in einem Gespräch sind.

## Eine Lösung einkaufen

Sucht euch eine Gruppe aus, welche das fehlende Portal implementiert hat und kauft dieses ein. Achtet darauf das die andere Lösung zu eurem System passt. Sprecht ggf. mit der anderen Gruppe wie Sie bestimmte Dinge umgesetzt hat, um ein bessere Verständnis für die Integration zu bekommen.

## Integration vom neuem Portal

Falls notwendig, passt eure Software so an, dass das neue Portal integriert werden kann. Beispielsweise müsst ihr API-Anfragen aus dem neuen Portal auf eure URLs abändern oder etwas am Datenmodell modifizieren. Probiert auch aus, ob alle Aufgaben wie erwartet funktionieren. In diesem Teil soll die ETUR Software Lösung abgeschlossen werden.

Am Ende sollten folgende Softwarekomponenten abgeschlossen sein:

- Customer Number System: Hier können Kundennummern angelegt werden und das System prüft die Gültigkeit einer gegebenen Kundenummer.
- ETUR Schnittstelle: Alle Reports werden auf dieser Schnittstelle verwaltet. Die einzelnen anderen Komponenten können hier Reports anlegen und abrufen.
- Kundenportal: Kunden können sich anmelden und Reports einsehen und bearbeiten.
- Produktmanagementportal: Produktmanager können Reports einsehen und bearbeiten.
- Developerportal: Entwickler können Reports einsehen und bearbeiten.

Achtet darauf, dass eure Systeme alle reibungslos miteinander arbeiten und probiert beispielsweise die ursprüngliche Use Case Definition [01](./01-Use-Case-Sample.md) einmal mit eurer Lösung aus.

## Fazit

Mit fremden Softwarekomponenten zu arbeiten ist eine Herausforderung. Deshalb ist es auch wichtig, mehr Code zu lesen als selbst zu schreiben, um sich in fremden Lösungen schnell zurechtzufinden. Aber aus fremden Lösungen kann man auch sehr viel lernen, und es gibt einen tieferen Einblick, wie man mit unterschiedlichen Ansätzen zu einer Lösung kommen kann.

Ihr solltet jetzt eine erste Version der ETUR-Plattform fertig implementiert haben. Als nächstes bereiten wir die Lösung noch ein wenig vor, um einen ersten "Release" von ETUR zu machen. Darüber hinaus gibt es noch weitere Tutorials in der Zukunft, die auf ETUR aufbauen und die Software weiter ausbauen.
