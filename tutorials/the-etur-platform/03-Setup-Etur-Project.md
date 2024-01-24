# 03 - Setup ETUR Project

In diesem Tutorial legen wir den Grundstein für das ETUR Projekt und möchten ein Git Repository auf Github aufsetzen welches alle Unterlagen zum ETUR Projekt beinhaltet. Das Ziel ist ein Github Repository sowie das Einrichten von Visual Studio Code für das ETUR Projekt.

## Github Setup

Falls ihr schonmal mit Github gearbeitet habt könnt ihr euch einfach ein Repo für diesen Workshop erstellen und entsprechend eure Teammitglieder einladen.

### Github Account Anlegen

> [!NOTE]
> Falls du bereits einen Github Account hast kannst du diesen Schritt überspringen.

- Besucht [Github - Sign Up](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home) und folgt den Schritten

### Github Repository Anlegen

- Auf eurer Landing Page (Github.com) ist oben links ein Button "New" zu sehen. Alternativ [New](https://github.com/new)

- Gebt dem Repository einen Namen, eine kurze Beschreibung und setzt das Repo auf "Public"

### Git Installieren

- Für Windows: https://git-scm.com/download/win
- Für MacOS: https://formulae.brew.sh/formula/git mittels Homebrew installieren

### Cloned das Repository auf euren Rechner

> [!CAUTION]
> Legt das Git Repo nicht in einen Cloud Ordner (bspw. OneDrive, Dropbox, etc.) da es sonst zu Problemen kommen kann.

- Öffnet das neu erstellte Repository und klickt auf den grünen Button "Code"

Ihr könnt euch hier jetzt entscheiden wie ihr das Repo "clonen" möchtet. Empfehlung für den Anfang benutzt HTTPS (Später richtet euch SSH ein)

```bash
git clone <link-von-github>
```

### Öffnet euer Repository in Visual Studio Code

- Öffnet Visual Studio Code und öffnet den zuvor geklonten Ordner
  - Ihr solltet links unten "main" oder ähnliches sehen
- Erstellt eine `README.md` Datei und füllt diese mit einer kurzen Beschreibung sowie einem Titel. Speichert diese Datei
- Im linken Reiter von Visual Studio Code sollte jetzt eine (1) erscheinen. Klickt auf diesen Bereich und klickt hovered über die `README.md` Datei und klickt auf das `+`
  - Die Datei sollte nun unter "Staged Changes" stehen
- Gebt oben in das Feld "Message" nun eine Commit Message ein und klickt auf Commit
  - Wenn alles geklappt hat sollte die Datei "Verschwinden"
- Pushed nun alle Changes auf euer Github Repository
  - Klickt dazu auf den "Sync" Button unten links

### Ladet eure Teammitglieder ein

- Öffnet euer Repository auf Github
- Klickt auf Settinggs
- Klickt auf Collaborators
- Klickt auf "Add People"
- Sucht nach euren Teammitgliedern und ladet diese ein

> [!TIP]
> Die Teammitglieder können nun auch einfach das Repo lokal klonen und Dateien modifizieren


## Ordner Struktur

Das zuvor angelegte Repo wird euch im gesamten Workshop begleiten und hier sollt ihr alle erarbeiteten Lösungen / Dateien ablegen. Es dient euch auch als Sammelpunkt um selbst Notizen zu machen (bspw. unter einem `notes` Ordner in Form von Markdown Dateien).

> [!IMPORTANT]
> Für die späteren Aufgaben ist es zwingend Notwendig das ihr ein öffentliches Github Repository habt!

- Auf der obersten Ebene sollte eine `README.md` Datei liegen. Diese Datei dient als Einstiegspunkt für euer Projekt und sollte eine kurze Beschreibung sowie eine Übersicht über alle Dateien enthalten.
- Erstellt einen Ordner `docs` legt hier alle notwendige Dokumentation für euer ETUR Projekt ab. 
  - Bspw. wie starte ich das Projekt? Wie kann ich das Projekt installieren? etc.
  - Technische Hinweise oder Entscheidungen die ihr festhalten möchtet.
- Erstellt einen Ordner `src` hier sollen später alle Quellcode Dateien liegen
- Erstellt einen Unterordner in `src` mit dem Namen `website`. Hier könnt ihr alle Dateien ablegen die für die Webseite notwendig sind.
- Erstellt einen Unterordner in `src` mit dem Namen `services`. Services sind alle Komponenten die nicht direkt mit der Webseite zu tun haben. Bspw. Datenbank, APIs, Eigene Scripte etc.
- Legt in alle Ordner die ihr erstellt eine `README.md` Datei und beschreibt grob den Inhalt vom Ordner
- Erstellt auf der obersten Ebene eine `.gitignore` Datei und fügt folgenden Inhalt ein: [Node Git ignore](https://github.com/github/gitignore/blob/main/Node.gitignore)

> [!TIP]
> Lasst eine Person aus eurem Team die Ordner Struktur inital aufsetzen

Eure Ordner Struktur sollte am Ende so aussehen:

```
|_ docs
  |_ README.md
|_ src
  |_ website
    |_ README.md
  |_ services
    |_ README.md
|_ README.md
```

Wenn ihr die Grundlegende Struktur angelegt habt committet alle Änderungen und pushed diese auf euer Github Repostiory. 

> [!TIP]
> Alle anderen Teammitglieder können dann einfach ein git pull machen um alle Änderungen zu erhalten