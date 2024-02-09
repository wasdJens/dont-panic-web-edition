# 10 - Creating the Etur Platforms

In diesem Tutorial soll das ETUR System weiter ausgebaut werden um die Portal Funktionen. Als Basis dient dabei die Schnittstelle welche in [07](./07-Creating-An-API.md) implementiert wurde. Das ETUR System besteht am Ende aus 3 Kern Systemen:

- Kunden Portal
- Developer Portal
- Produkt Management Portal

Die Funktionen für die einzelnen Portale wurden dabei bereits auf Schnittstellen Seite umgesetzt allerdings fehlt noch eine Software für das bedienen der einzelnen Portale. Am Ende von diesem Tutorial sollen 2 von 3 der Kern Systeme als Webseite verfügbar und an die Schnittstelle angebunden sein. Die dritte Software Kompontene wird von einer anderen Gruppe später eingekauft.

> [!CAUTION]
> Es müssen nur 2 der 3 Portale hier umgesetzt werden! Das Portal das euch fehlt kauft ihr dann von einer anderen Gruppe ein!

## Hinweise

- Gestaltet eure einzelnen Portale als "Projekte" d.h. mit eigenem Ordner und alle Dateien für die Webseite selbst
  - Also HTML, JavaScript Dateien, CSS etc.
- Achtet darauf, dass ihr später eure Systeme an eine andere Gruppe "verkauft" d.h. es sollte für diese Gruppe einfach sein ihre Schnittstelle einzubinden
  - Insbesondere für das Developer Portal sind auch Server Anpassungen notwendig also abstrahiert diese am besten als eigenständiges Modul um es so leicht anderen Gruppen anzubieten.
- Falls ihr etwas aus der Aufgabe [07](./07-Creating-An-API.md) vergessen habt notiert euch welche Anforderung euch gefehlt hat und setzt diese hier um.

## Kunden Portal

Im Kunden Portal können sich Kunden mit einer Kundennummer anmelden. Die Anmeldung soll dabei so funktionieren, dass die erste Seite eine Eingabe für die Kundennummer hat und einen Button um sich anzumelden. Wenn der User eine Kundenummer eingegeben hat soll das Customer Number System angesprochen werden, ob die eingegebene Kundennummer existiert. Wenn ja soll der User auf die Hauptseite des Kunden Portals weitergeleitet werden. Wenn nicht soll eine Fehlermeldung angezeigt werden.

Nach der Anmeldung sieht der Kunde alle offenen Reports und der neuste Report soll als erstes angzeigt werden. Darüber hinaus sollen die Reports als Kacheln dargestellt werden und auf den ersten Blick nur die wichtigsten Informationen anzeigen. Ein Klick auf eine Kachel öffnet dann den Report und zeigt alle Informationen an. Weiter oben auf der Seite soll der Kunde die Möglichkeit haben die Anzahl der Kacheln zu filtern bspw. nach dem Status oder Labels.

Außerdem soll es ein Allgemeines Menü geben welches auf allen Seiten sichtbar ist, um zwischen verschiedenen Funktionen des System zu navigieren. Hier können Kunden u.a.: Einen neuen Report über die Oberfläche anlegen, alle geschlossenen Reports einsehen und sich wieder abmelden mit ihrer Kundennummer.

Beim anlegen von einem Report bekommt der Kunde die Möglichkeit zwischen den verschiedenen Reports zu wählen also ob er einen Bug, Feedback oder eine Frage hat.

Auf der Detailseite soll nur das Menu angezeigt werden und die Toolbar ist hier nicht sichtbar. Auch bekommt der Kunde nicht alle Informationen aus dem Report angezeigt sondern nur die nachfolgenden:

- Die Report ID,
- Die Kundennummer,
- Der aktuelle Status,
- Die Begründung warum der Report geschlossen wurde
- Alle Kommentare die entweder der Kunde selbst oder der Produkt Manager geschrieben hat.
  - Die Kommentare sollen dabei chronologisch sortiert sein.

Auch soll der Kunde die Möglichkeit bekommen einen Kommentar zu schreiben und er kann jederzeit den Report selbständig schließen. Hierfür muss der Kunde keine Begründung angeben.

## Produkt Management Portal

Das Produkt Management Portal ist die Zentrale Anlaufstelle für alle Reports. Hier können Produkt Manager alle Reports einsehen und bearbeiten. Dabei sollen die Reports als Liste dargestellt werden und der Produkt Manager kann nach verschiedenen Eigenschaften filtern und suchen. Die Liste der Reports soll dabei schnell dem Produkt Manager eine Übersicht liefern ohne alle Details anzuzeigen. Ein Listeneintrag soll dabei bspw. den Status, die Labels, die Kundennummer und wem der Report zugewiesen ist anzeigen. Mit einem Klick auf einen Listeneintrag öffnet sich dann die Detailseite.

Auf der Detailseite kann ein Produkt Manager alles am Report verändern und sieht auch alle Informationen von einem Report. Er kann zum einen neue Labels hinzufügen aber auch den Report einem Developer zuweisen. Es ist wichtig, dass der Produkt Manager die Priorität des Reports ändern kann und auch den Status setzen.

Der Produkt Manager kann zudem über die Kommentare mit dem Kunden kommunizieren und ihm so Status Updates zukommen lassen. Er sieht dabei aber auch Kommentare die Developer geschrieben haben um bspw. ein Status Update zu bekommen. Ein Produkt Manager kann auch einen Report schließen muss aber dabei eine Begründung angeben.

Zusätzlich neben der Arbeit mit einem einzelnen Report sieht der Produkt Manager auf einer Art Dashboard wie viele Reports den jeweiligen Kundennummern zugeordnet sind und wie viele Reports in welchem Status sind. Hier kann der Produkt Manager auch nach Reports filtern und suchen. Das Dashboard soll dabei so angeordnet sein, dass die Informationen klar sichtbar sind und der Produkt Manager schnell die Informationen bekommt die er benötigt.

## Developer Portal

Das Developer Portal besitzt eine neue Funktionalität die bis jetzt noch nicht von eurem Server unterstützt wird: Das erstellen von einem Issue in Github basierend auf einem Report. Developer arbeiten mit ihren gewohnten Tools (In unserem Fiktiven Beispiel ist das Github) und sollen deshalb die Möglichkeit bekommen einen Report direkt als Issue in Github zu erstellen.

> [!CAUTION]
> In der folgenden Aufgabe wird mit einem Github Token gearbeitet. Stellt sicher, dass ihr dieses Token nicht ausversehen in eurem Repository speichert oder an andere weitergebt. Am einfachsten ihr übergebt das Token beim starten vom Server als Umgebungsvariable. Siehe [How To: Working with Environment Files](../../how-to-guides/nodejs/working-with-env-files.md) für mehr Informationen.

Im Developer Portal tauchen zunächst alle Reports auf die im Zustand "In Bearbeitung" sind und mindestens einem Developer zugewiesen sind. Reports die noch in dem Zustand "Offen" sind und keine Zuweisung haben sollen nicht angezeigt werden. Die Reports sollen in einer Tabelle angezeigt werden und es gibt für jede Priorität eine eigene Spalte. Dabei soll ganz links die höchste Priorität sein und ganz rechts die niedrigste Priorität. Mit einem Klick auf einen Report öffnet sich die Detailseite.

Die Detailseite zeigt dem Developer alle Informationen über den Report an. Er kann aber nicht die Beschreibung, Labels, Priorität, Zuweisung und Kundennummer bearbeiten. Darüber hinaus kann er einen Report auch nicht schließen. Es werden ihm aber alle Kommentare angezeigt und er selbst kann auch einen Kommentar schreiben bspw. wenn es neue Erkenntnise gibt oder eine Frage aufgetaucht ist. Den Status kann ein Developer nur auf "Ready" setzen wenn er mit seiner Arbeit fertig ist. Über einen Button kann er dann einen Report der im Zustand "In Bearbeitung" oder "Offen" ist zu einem Github Issue umwandeln.

Das erstellen von einem Issue soll dabei vom ETUR Server übernommen werden (Service To Service Kommunikation) und es soll nur die Beschreibung übernommen werden aber keine sensiblen Daten wie bspw. Kundennummer oder Kommentare. Sobald für ein Report ein Issue existiert soll dieses auf dem Report als zusätzliche Information gespeichert werden. Und der Developer kann dann nur den Report auf "Ready" setzen wenn das Issue im Zustand "closed" ist.

### Weitere Informationen

- Github REST API Dokumentation https://docs.github.com/en/rest?apiVersion=2022-11-28
- Github Issues REST API Dokumentation https://docs.github.com/en/rest/issues?apiVersion=2022-11-28#create-an-issue-comment
