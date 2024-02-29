# 08 - Review of a System Design

In diesem Tutorial geht es um den Austausch zwischen zwei komplett unterschiedlichen Systemen, die man vorher noch nicht gesehen hat. Es soll ein Review für die ETUR-Schnittstelle von einer anderen Gruppe stattfinden. Das Ziel ist dabei, fremden Code besser zu verstehen und einen regen Austausch zu fördern, wie die gleiche Anforderung auf andere Art und Weise gelöst werden kann. Dabei soll ein Austausch mit der anderen Gruppe angeregt werden und ggf. Ideen für die eigene Implementierung übernommen werden. Am Ende soll dann dieses neue Wissen in die eigene Implementierung einfließen und ggf. vergessene Anforderungen nachträglich sichtbar machen.

Falls du dieses Tutorial gerade alleine absolvierst, kannst du diesen Schritt überspringen.

## Deep Dive in eine andere Schnitstelle

Lasst euch Zugang zum GitHub-Repo der anderen Gruppe geben und schaut euch die Umsetzung der ETUR-Schnittstelle genauer an. Versucht dabei ein Gespür für das Lesen von fremdem Code zu finden und versucht euch in dem anderen Projekt zurechtzufinden. Folgende Punkte könnten interessant sein:

- Wie ist das Projekt aufgebaut?
- Gibt es schon eine Art Dokumentation?
- Könnt ihr das Projekt lokal bei euch ausführen?
- Wie hat die andere Gruppe das Schnittstellendesign umgesetzt?
  - Könnt ihr etwas für eure eigene Implementierung übernehmen?
  - Gibt es Abweichungen in den Anforderungen?
  - Sind die Endpunkte sinnvoll umgesetzt?
  - Wie reagiert die Schnittstelle auf Fehler?
- Könnt ihr im Code Tipps und Tricks ableiten, die euch z.B. nicht eingefallen sind oder vor größere Probleme gestellt haben?
- Gibt es ein JavaScript-Pattern oder eine Funktionalität, die ihr bis dahin noch nicht kanntet?

Macht euch zu allen Dingen, die euch interessant finden oder auffallen, Notizen. Im Anschluss sollt ihr gemeinsam mit der anderen Gruppe über diese Notizen sprechen, um ggf. Tipps für eure eigene Implementierung zu bekommen. Wenn möglich, versucht euch zu den folgenden Fragen Notizen zu machen:

- Was sind 5 Dinge, die euch besonders gut gefallen haben?
- Was sind 5 Dinge, die ihr übernehmen wollt?
- Was sind 5 Dinge, die ihr anders gemacht hättet?
- Was sind 5 Dinge, die ihr nicht verstanden habt?
- Was ist euer persönliches Highlight? (1 Punkt)

(Ihr müsst nicht zu jeder Frage 5 Dinge finden)

## Austausch mit der anderen Gruppe

Nehmt eure Notizen und setzt euch mit der anderen Gruppe zusammen. Stellt für jede Gruppe einen Timer auf 15 Minuten um eure Punkte und euer Highlight durchzugehen. Startet dabei mit eurem persönlichen Highlight bzw. was euch besonders gut gefallen hat.

Am Ende sollt ihr ein Review für die andere Gruppe geben und ein Review für eure Schnittstelle zurück erhalten.

## Umsetzung

Ihr habt jetzt Zeit eure bisherige Implementierung ggf. zu überarbeiten und die neuen Erkenntnisse einfließen zu lassen. Falls ihr Anforderungen vergessen habt könnt ihr diese jetzt nachträglich einbauen. Solltet ihr gar keine Punkte gefunden haben könnt ihr euer System auch einfach weiter optimieren nach euren Wünschen. Falls ihr gar nichts zu tun habt könnt ihr auch die anderen Gruppen bei ihrer Implementierung unterstützen.

## Fazit

System Design Reviews und besonders Code Reviews sind unglaublich wichtig. Leider ist der Begriff in den letzten Jahren häufig negativ belegt worden, weil ein Review geben viel schwieriger ist als selbst eine Anforderung umzusetzen. Deshalb ist es wichtig, in einem Review nicht nur negative Punkte hervorzuheben, sondern viel mehr die Ideen und Umsetzungen von anderen zu loben und hervorzuheben. Wenn etwas gut gelöst wurde, kann man das auch kommentieren. Wenn etwas nicht ganz den eigenen Vorstellungen entspricht, versucht gemeinsam in einem Gespräch eine Lösung zu finden. Dabei ist es wichtig, nicht nur die eigenen Interessen durchzusetzen, sondern gemeinsam die Qualität der Software zu verbessern.

Als nächstes kommt die Integration von einem Central System in ETUR, und ihr sollt euch auf Fehlersuche begeben.
