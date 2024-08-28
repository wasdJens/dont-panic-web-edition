# How To: Setup an Angular Project

Diese Anleitung erklärt wie man ein neues Angular Projekt aufsetzen kann. Angular Projekte werden in den meisten Fällen mit der Angular CLI erstellt und enthalten das komplette Setup für eine Angular Anwendung.

**Vorraussetzung**

- Ein Text Editor ist installiert (bspw. [Visual Studio Code](https://code.visualstudio.com/))
- Grundlagen von NodeJS & NPM (bspw: [Package Installation](../nodejs//package-installation.md))

**Inhalt**

- Aufsetzen von einem neuen Angular Projekt
- Die Angular CLI kennen lernen

Diese Anleitung basiert auf Angular Version 18

## Angular CLI Installation

Die Angular CLI kann global als NPM Paket installiert werden. Node kann auch Packete global installieren, diese Packages sind dann in der Command Line als Programme verfügbar.

```bash
npm install -g @angular/cli
```

Mit Hilfe der Angular CLI können wir uns dann jederzeit ein neues Angular Projekt erstellen. Die CLI installiert alle Abhängigkeiten für uns und erstellt die Projekt Struktur.

In gegebenen Angular Projekten kann eine andere CLI Version zum Einsatz kommen. Angular erkennt dies automatisch und gibt eine entsprechende Warning in der Console aus wenn die Projekt Version eine andere ist als die Global installierte (Bspw. ein Projekt nutzt noch eine ältere Angular Version)

Eine erfolgreiche Installation kann mit dem folgenden Befehl geprüft werden:

```bash
ng version
```

Unter Windows müssen ggf. extra Berechtigungen aktiviert werden siehe [CLI Docs](https://angular.dev/tools/cli/setup-local#powershell-execution-policy)

## Angular Projekt erstellen

Ein Angular Projekt besteht aus einer Vielzahl von externen Packages u.a. bspw. Typescript. Damit wir uns als Entwickler nicht um das Setup kümmern müssen, können wir die Angular CLI verwenden um ein neues Projekt zu erstellen.

```bash
ng new <project-name>
```

Nachfolgend werden wir mit einigen Auswahl Möglichkeiten konfrontiert. Der CLI können zusätzliche Befehle und Einstellungen mitgegeben werden für unsere Beispiele verwenden wir folgende Konfiguration: (Navigieren könnt ihr mit euren Pfeiltasten und bestätigen mit Enter)

- Stylesheet Format: CSS
- SSR: No 

Anschließend wird ein neuer Projekt Ordner erstellt und die Angular CLI installiert alle Dependencies aus der definierten `package.json` Datei. 

Anschließend kann in das Projekt navigiert werden und in Visuel Studio Code geöffnet werden:

```bash
cd <project-name>
code .
```

Wir werden mit einer Reihe von Ordnern und Dateien konfrontiert die typisch sind für ein Angular Projekt aus diesem Grund möchten wir auch einmal genauer auf die Struktur von einem Angular Projekt eingehen: 

## Projekt Struktur
Für den Anfang sind folgende Ordner / Dateien die wichtigsten:

- `src`
- `package.json`
- `angular.json`

Nachfolgend einmal alle Ordner und Dateien die ein Angular Projekt enthält (Referenz: https://angular.dev/reference/configs/file-structure#application-project-files):

- `.vscode` - Enthält Konfigurationen für VSCode um Angular Anwendungen auszuführen bspw. kann über "Run and Debug" die Anwendung gestartet werden
- `node_modules` - Enthält alle Module die unser Angular Projekt benötigt. Für uns erstmal nicht interessant.
- `public` - Ist ein spezieller Ordner um Statische Assets zu speichern bspw. liegt hier das Facivon unserer Angular Anwendung und wird automatisch vom Angular Development Server bereitgestellt. Wenn man eine Angular Anwendung später "baut" wird dieser Ordner automatisch in den build Ordner kopiert.
- `src` - Der "Main" Ordner für unsere gesamte Angular Applikation. Hier befinden sich die Quellcode Dateien die später die Angular Anwendung bilden. Auf dessen Inhalt gehen wir später genauer ein.
- `.editorconfig` - Eine opinionated Konfigurationsdatei für den Editor. Hier können bspw. Code Styling Regeln definiert werden. Am Anfang können wir die Defaults hier so beibehalten.
- `.gitignore` - Angular legt automatisch ein GIT Repostiroy für uns an und ignoriert typische Angular und Node Dateien.
- `angular.json` - Ist die Konfigurationsdatei für unsere Angular CLI. Hier können wir bspw. Build Einstellungen oder Projekt Strukturen anpassen. Die CLI kann hier auch autonom Änderungen vornehmen bspw. wenn wir ein neues Projekt hinzufügen oder Schematics verwenden.
- `package.json / package-lock.json` - NPM Konfigurationsdateien für unser Projekt. Hier sind alle Abhängigkeiten und Skripte definiert. Es lohnt sich ein Blick in die `package.json` zu werfen um ein Bild davon zu bekommen welche Abhängigkeiten eine Angular Anwendung alles hat.
- `README.md` - Die Readme Datei für unser Projekt. Hier können wir Informationen über unser Projekt hinterlegen. Standardmäßig ergänzt Angular hier Informationen wie man das Projekt ausführen kann
- `tsconfig.*.json` - Typescript Konfigurationsdateien hier werden Typescript Optionen eingerichtet. Für uns am Anfang können wir alle TSConfigs so belassen wie sie sind. (Wichtig: Angular verwendet seit den neusten Versionen die Strict Templates Option).

### `src` Ordner

Im `src` Ordner befindet sich die eigentliche Angular Applikation. Auf der obersten Ebene haben wir die Root HTML Datei `index.html` die später unsere Angular Anwendung als Script einbdet und den "Root" Knoten für unsere Anwendung definiert (Hier: `<app-root>`).

Die meisten Single Page Applications sind nach diesem Pattern aufgebaut und benötigen immer einen "Referenz Knoten" in dem später die gesamte Anwendung gerendert wird. In dieser `index.html` Datei können wir auch Meta Tags oder andere Statische Inhalte hinterlegen.

Eine weitere "Root" Datei ist die `styles.css` hier können wir globale Styles für die gesamte Anwendung definieren. Aber jede Angular Component hat ihre eigene Styles Definition und ist gekapselt d.h. Globale Klassen für die gesamte Anwendung definieren wir hier eher weniger. In den meisten Fällen befinden sich hier CSS Variablen oder Overrides von Default HTML Elementen.

Abschließend gibt es noch die `main.ts` diese dient als Einstiegspunkt für Angular und bootstrapped die eigentliche Anwendung. Als Parameter wird die Root Component (Hier AppComponent) und unsere App Config übergeben. 

> [!NOTE]
> In älteren Angular Anwendungen wurden noch Angular Module in der `main.ts` Datei definiert. Das Setup ist aber gleich es werden nur unterschiedliche Bootstrap Methoden aufgerufen.

Im normalen Alltag hat man wenig mit der `index.html`, `main.ts` und `styles.css` Datei zu tun diese sind primär die Setup Dateien die Angular benötigt. Speziell in der `main.ts` kann man bspw. JavaScript ausführen, dass nicht direkt mit Angular zusammenhängt aber für ein Setup benötigt wird (bspw. Third Party Libraries fürs Logging etc.)

### `app` Ordner
