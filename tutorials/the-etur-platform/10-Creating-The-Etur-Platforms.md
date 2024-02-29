# 10 - Creating the Etur Platforms

In diesem Tutorial soll das ETUR System weiter ausgebaut werden, um die Portal Funktionen. Als Basis dient dabei die Schnittstelle, welche in [07](./07-Creating-An-API.md) implementiert wurde. Das ETUR System besteht am Ende aus 3 Kernsystemen:

- Kundenportal
- Developerportal
- Produktmanagementportal

Die Funktionen für die einzelnen Portale wurden bereits auf der Schnittstellenseite umgesetzt, allerdings fehlt noch eine Software zum Bedienen der einzelnen Portale. Am Ende dieses Tutorials sollen 2 von 3 der Kernsysteme als Webseite verfügbar und an die Schnittstelle angebunden sein. Die dritte Softwarekomponente wird von einer anderen Gruppe später eingekauft.

> [!CAUTION]
> Es müssen nur 2 der 3 Portale hier umgesetzt werden! Das Portal das euch fehlt kauft ihr dann von einer anderen Gruppe ein!

## Hinweise

- Gestaltet eure einzelnen Portale als "Projekte", d.h. mit eigenem Ordner und allen Dateien für die Webseite selbst.
  - Also HTML-, JavaScript-Dateien, CSS etc.
- Achtet darauf, dass ihr später eure Systeme an eine andere Gruppe "verkauft", d.h. es sollte für diese Gruppe einfach sein, ihre Schnittstelle einzubinden.
  - Insbesondere für das Developer Portal sind auch Serveranpassungen notwendig, also abstrahiert diese am besten als eigenständiges Modul, um es so leicht anderen Gruppen anzubieten.
- Falls ihr etwas aus der Aufgabe [07](./07-Creating-An-API.md) vergessen habt, notiert euch, welche Anforderung euch gefehlt hat, und setzt diese hier um.

## Kunden Portal

Im Kundenportal können sich Kunden mit einer Kundennummer anmelden. Die Anmeldung soll dabei so funktionieren, dass die erste Seite eine Eingabe für die Kundennummer hat und einen Button, um sich anzumelden. Wenn der Benutzer eine Kundennummer eingegeben hat, soll das Kundenummernsystem überprüfen, ob die eingegebene Kundennummer existiert. Wenn ja, soll der Benutzer auf die Hauptseite des Kundenportals weitergeleitet werden. Wenn nicht, soll eine Fehlermeldung angezeigt werden.

Nach der Anmeldung sieht der Kunde alle offenen Reports, wobei der neueste Report als erstes angezeigt werden soll. Darüber hinaus sollen die Reports als Kacheln dargestellt werden und auf den ersten Blick nur die wichtigsten Informationen anzeigen. Ein Klick auf eine Kachel öffnet dann den Report und zeigt alle Informationen an. Weiter oben auf der Seite soll der Kunde die Möglichkeit haben, die Anzahl der Kacheln zu filtern, z.B. nach dem Status oder Labels.

Außerdem soll es ein allgemeines Menü geben, das auf allen Seiten sichtbar ist, um zwischen verschiedenen Funktionen des Systems zu navigieren. Hier können Kunden u.a. einen neuen Report über die Oberfläche anlegen, alle geschlossenen Reports einsehen und sich mit ihrer Kundennummer wieder abmelden.

Beim Anlegen eines Reports bekommt der Kunde die Möglichkeit, zwischen verschiedenen Reporttypen zu wählen, z.B. Bug, Feedback oder Frage.

Auf der Detailseite soll nur das Menü angezeigt werden und die Toolbar ist hier nicht sichtbar. Der Kunde bekommt auch nicht alle Informationen aus dem Report angezeigt, sondern nur die folgenden:

- Die Report-ID,
- Die Kundennummer,
- Der aktuelle Status,
- Die Begründung, warum der Report geschlossen wurde,
- Alle Kommentare, die entweder vom Kunden selbst oder vom Produktmanager geschrieben wurden.
  - Die Kommentare sollen dabei chronologisch sortiert sein.

Der Kunde soll auch die Möglichkeit haben, einen Kommentar zu schreiben, und er kann jederzeit den Report selbstständig schließen. Hierfür muss der Kunde keine Begründung angeben.

## Produkt Management Portal

Das Produktmanagement-Portal ist die zentrale Anlaufstelle für alle Reports. Hier können Produktmanager alle Reports einsehen und bearbeiten. Dabei sollen die Reports als Liste dargestellt werden und der Produktmanager kann nach verschiedenen Eigenschaften filtern und suchen. Die Liste der Reports soll dabei dem Produktmanager schnell einen Überblick liefern, ohne alle Details anzuzeigen. Ein Listeneintrag soll dabei beispielsweise den Status, die Labels, die Kundennummer und den zugewiesenen Bearbeiter anzeigen. Mit einem Klick auf einen Listeneintrag öffnet sich dann die Detailseite.

Auf der Detailseite kann ein Produktmanager alle Informationen des Reports verändern. Er kann neue Labels hinzufügen und den Report einem Bearbeiter zuweisen. Es ist wichtig, dass der Produktmanager die Priorität des Reports ändern kann und auch den Status setzen kann.

Der Produktmanager kann zudem über die Kommentare mit dem Kunden kommunizieren und ihm so Statusupdates zukommen lassen. Er sieht dabei auch Kommentare, die von Bearbeitern geschrieben wurden, um beispielsweise ein Statusupdate zu erhalten. Ein Produktmanager kann auch einen Report schließen, muss dabei jedoch eine Begründung angeben.

Zusätzlich zur Arbeit mit einem einzelnen Report sieht der Produktmanager auf einem Dashboard, wie viele Reports den jeweiligen Kundennummern zugeordnet sind und wie viele Reports sich in welchem Status befinden. Hier kann der Produktmanager auch nach Reports filtern und suchen. Das Dashboard soll dabei so angeordnet sein, dass die Informationen klar sichtbar sind und der Produktmanager schnell die benötigten Informationen erhält.

## Developer Portal

Das Developer Portal besitzt eine neue Funktionalität, die bis jetzt noch nicht von eurem Server unterstützt wird: Das Erstellen von einem Issue in Github basierend auf einem Report. Developer arbeiten mit ihren gewohnten Tools (In unserem fiktiven Beispiel ist das Github) und sollen deshalb die Möglichkeit bekommen, einen Report direkt als Issue in Github zu erstellen.

> [!CAUTION]
> In der folgenden Aufgabe wird mit einem Github Token gearbeitet. Stellt sicher, dass ihr dieses Token nicht versehentlich in eurem Repository speichert oder an andere weitergebt. Am einfachsten übergebt ihr das Token beim Starten des Servers als Umgebungsvariable. Siehe [How To: Working with Environment Files](../../how-to-guides/nodejs/working-with-env-files.md) für mehr Informationen.

Im Developer Portal tauchen zunächst alle Reports auf, die im Zustand "In Bearbeitung" sind und mindestens einem Developer zugewiesen sind. Reports, die noch im Zustand "Offen" sind und keine Zuweisung haben, sollen nicht angezeigt werden. Die Reports sollen in einer Tabelle angezeigt werden und es gibt für jede Priorität eine eigene Spalte. Dabei soll ganz links die höchste Priorität sein und ganz rechts die niedrigste Priorität. Mit einem Klick auf einen Report öffnet sich die Detailseite.

Die Detailseite zeigt dem Developer alle Informationen über den Report an. Er kann jedoch nicht die Beschreibung, Labels, Priorität, Zuweisung und Kundennummer bearbeiten. Darüber hinaus kann er einen Report auch nicht schließen. Es werden ihm jedoch alle Kommentare angezeigt und er selbst kann auch einen Kommentar schreiben, z. B. wenn es neue Erkenntnisse gibt oder eine Frage aufgetaucht ist. Den Status kann ein Developer nur auf "Ready" setzen, wenn er mit seiner Arbeit fertig ist. Über einen Button kann er dann einen Report, der im Zustand "In Bearbeitung" oder "Offen" ist, zu einem Github Issue umwandeln.

Das Erstellen von einem Issue soll dabei vom ETUR Server übernommen werden (Service-to-Service-Kommunikation) und es soll nur die Beschreibung übernommen werden, aber keine sensiblen Daten wie z. B. Kundennummer oder Kommentare. Sobald für ein Report ein Issue existiert, soll dieses auf dem Report als zusätzliche Information gespeichert werden. Und der Developer kann dann nur den Report auf "Ready" setzen, wenn das Issue im Zustand "closed" ist.

### Weitere Informationen

- Github REST API Dokumentation https://docs.github.com/en/rest?apiVersion=2022-11-28
- Github Issues REST API Dokumentation https://docs.github.com/en/rest/issues?apiVersion=2022-11-28#create-an-issue-comment

## Fazit

Die Implementierung der verschiedenen Portale ist relativ aufwendig und bedarf einiges an Wissen. Es ist nicht schlimm, wenn nicht alle Anforderungen 100% reibungslos funktionieren. Wichtig ist, dass ihr mit solchen textuellen Beschreibungen immer in der Softwareentwicklung konfrontiert werdet und lernt, diese in ihre einzelnen Bestandteile zu zerlegen.

Es fällt vielleicht auch auf, dass man mit relativ wenig Text umfangreiche Softwarelösungen bauen kann. Als nächstes soll die fehlende Softwarekomponente von einer anderen Gruppe eingekauft und integriert werden.
