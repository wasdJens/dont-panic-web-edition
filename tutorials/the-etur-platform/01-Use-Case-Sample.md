# 01 - Use Case Sample

In diesem Tutorial geht es um einen konkreten Use Case von ETUR und soll einen Einblick liefern, wie ETUR später benutzt wird. Es soll einen tieferen Einblick in die Anforderungen geben, um eine Mögliche Architektur von ETUR sowie Schnittstellen abzuleiten.

## Use Case: Bug Report

```txt
Ein Kunde der PlanB. hat einen möglichen Fehler in seiner Software festgestellt. Er hat bereits eine Kunden Nummer und schreibt eine Email an uns. 

> Hallo liebe PlanB, 
> 
> wenn ich die Anwendung seit gestern öffne bekomme ich immer folgende Seite angezeigt: Error 500 - Internal Server Error. Das Problem war gestern vormittag noch nicht. Leider kann ich so nicht das neue System testen könnten Sie sich das einmal anschauen und mir Rückmeldung geben bis wann das Problem behoben ist?

Diese Email wird an das Main ETUR System geschickt. Mithilfe von KI wird die Email automatisch als Bug eingeordnet und der Projekt Verantwortliche Jens Reiner wird zugeordnert. Darüber hinaus erkennt das System anhand vom Betreff die Kundennummer und ordnet dem Report ein Label hinzu: "c:123456789"

Am nächsten morgen öffnet Jens sein Portal und sieht sofort, dass ein neuer Bug im System eingegangen ist. Jens öffnet diesen Report und schaut sich diesen genauer an. Als erstes setzt Jens den Zustand auf "In Bearbeitung". Unter der Report Beschreibung sieht Jens auch direkt, dass der PlanB. Copilot "Loggimus Prime" anhand der Kundennummer direkt die Fehler Logs aus dem System abfragen konnte und angehängt hat. 

Anhand vom Fehler Log und der Kunden Beschreibung wird Jens schnell klar wo das Problem liegt und ordnet den Bug "Aaron Czichon" zu. Außerdem setzt Jens noch das Label "prio:1" wodurch Aaron direkt informiert wird mit einem Link zum Report. Am Ende lässt Jens noch Feedback an den Kunden da: 

> Hallo Herr Schmailzl, 
>
> danke für ihren Report. Wir haben uns das Problem direkt angesehen und es der Prio 1 zugeordnet. Ein Kollege wird sich sofort darum kümmern. In der Zwischenzeit haben wir Ihnen eine ältere Version von vor dem Problem auf Ihr System gespielt damit Sie ungestört weiterarbeiten können.
> 
> Nach unserer Vereinbarung werden wir uns spätestens nochmal innerhalb von 8 Stunden bei Ihnen mit einem neuen Status Update melden. Sollte das Problem bis dahin nicht behoben sein.
>
> Viele Grüße, Jens Reiner

```

> ✏️ Frage: Wie kann eine solche Applikation aussehen? Welche Komponenten werden benötigt? Wie kann eine grobe Architektur aufgebaut sein?

> ✏️ Frage: Wie können die einzelnen Systeme miteinander kommunizieren? Woher weiß der Copilot "Loggimus Prime" wie die Logs aussehen? Wie kann "Loggimus Prime" die Logs direkt an den Report hängen?

> ✏️ Frage: Mit welchen Technologien könnten wir das oben genannte System abbilden? 

> ✏️ Frage: Wie würdet ihr starten?