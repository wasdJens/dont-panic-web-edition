# How To: Setup an Angular Project

Diese Anleitung erklärt wie man ein neues Angular Projekt aufsetzen kann. Angular Projekte werden in den meisten Fällen mit der Angular CLI erstellt und enthalten das komplette Setup für eine Angular Anwendung.

**Vorraussetzung**

- Ein Text Editor ist installiert (bspw. [Visual Studio Code](https://code.visualstudio.com/))
- Grundlagen von NodeJS & NPM (bspw: [Package Installation](../nodejs//package-installation.md))

**Inhalt**

- Aufsetzen von einem neuen Angular Projekt
- Die Angular CLI kennen lernen
- Eine erste eigene Component schreiben

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

Components, Services, Directives und unsere eigentliche Business Logik befindet sich im `app` Ordner. Es bietet sich an, im App Ordner eine Struktur für unsere Anwendung zu definieren. Als Beispiel kann man alle Angular Dateien (Components, Service etc.) die ein Feature (Use Case) repräsentieren in einem Ordner zusammen fassen (Feature getriebene Struktur).

- `app.config.ts` - Definiert die Konfiguration von einer Angular Anwendung (Früher app.module.ts) u.a. können hier Provider (bspw. Router) definiert werden.
- `app.component.ts` - Die Root Component von unserer Angular Anwendung. Diese Component wird von Angular zur Laufzeit in `<app-root>` in der `index.html` gerendert. Typischerweise befindet sich hier das Grundlegende Layout unserer Anwendung (Als Components) und u.a. das Router Outlet. Hier macht es auch Sinn Lifecycle Methoden zu definieren die bspw. global beim Start der Anwendung ausgeführt werden sollen (Laden von Settings etc.)
- `app.component.html` - Das HTML Template für die Root Component
- `app.component.css` - Die Styles für die Root Component
- `app.routes.ts` - Angular Anwendungen kommen standardmäßig mit einem Router (Ab Standalone Projekten) in dieser Datei können die einzelnen Routen der Anwendung definiert werden. Die App Root wird dabei immer unter `/` gerendert.

## Die erste Angular Component

Alles was der User später auf der Oberfläche sieht ist eine Component in Angular. Wie in [Component Driven User Interfaces](../../explanation/component-driven-development/component-driven-user-interfaces.md) beschrieben bilden wir jeden Baustein von einer Web Applikation als Component ab.

Alle Angular Components bestehen aus folgenden drei Teilen:

- Eine Template Datei (Meistens im HTML Format) die das Aussehen der Component definiert
- Eine Script Datei (Als Typescript Datei) die die Logik der Component definiert
- Eine Styles Datei (Meistens im CSS Format, alternativ scss) die die Styles der Component definiert

Angular bietet auch die Möglichkeit an, Templates und Styles inline bzw. in einer Datei zu definieren es empfiehlt sich aber für jede Component alle drei Teile in einer eigenen Datei zu definieren und eine Component in einen einzelnen Ordner zu speichern.

Die einfachste und beste Möglichkeit Component zu erstellen ist die Angular CLI. Mit dem Befehl `ng generate component <component-name>` (kurz `ng g c <component-name>`) können wir eine neue Component erstellen. Die CLI erstellt dann automatisch alle drei Dateien für uns und fügt die Component in das `app` Verzeichnis ein. In diesem Beispiel erstellen wir eine Button Component:

```bash
ng g c button
```

Im `app` Ordner befindet sich nun ein neuer Ordner `button` der unsere Button Component beinhaltet. Als nächstes entfernen wir den kompletten Inhalt aus der `app.component.html` und importieren unsere Button Component in der `app.component.ts`:

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent], // Import Button Component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '<your-project-name>';
}
```

Und können daraufhin in der `app.component.html` unseren Button wie ein HTML Tag verwenden:

```html
<app-button></app-button>
```

> [!NOTE]
> Woher kommt der `app` prefix? Jede Angular Component hat einen Selector Prefix. In der `button.component.ts` gibt es die Property `selector`. Wenn wir den default prefix von `app` ändern möchten können wir in der `angular.json` für unser Projekt den `prefix` Wert ändern.
> Prefix anpassen lohnt sich besonders wenn man mehrere Apps oder Libraries in einem Projekt entwickelt. Es empfiehlt sich auch den Produktnamen als Prefix zu verwenden.

### Starten der Angular Anwendung

Anschließend können wir unsere Anwendung einmal starten und unsere neue Button Component sehen. Angular Anwendungen können über die CLI gestartet werden mit dem Befehl `ng serve`. Alternativ kann man über `npm run start` die Anwendung starten (Tipp: Alle NPM Befehle wie Start etc. können in der `package.json` unter `scripts` ergänzt werden).

In unserem Beispiel macht es aber Sinn die Anwendung direkt mit Debugging Tools zu starten und nutzen deshalb den `Run and Debug` Modus von VSCode. Anschließend sollte sich ein neuer Chrome Browser öffnen 
unter dem Port 4200 (Default Port von Angular Anwendungen).

Im Browser selbst wird nun `button works!` dargestellt. Wenn wir in der `button.component.html` schauen sehen wir diesen Text als Default Element welches die Angular CLI für uns erstellt hat.

Wir können den Text einmal modifizieren und die Datei speichern. Unser Browser aktualisiert sich dann automatisch.

## Eine Button Base Component programmieren

Im nächsten Schritt möchten wir unseren Button Component als eine Base Component für unser Projekt programmieren. Mit Base Components beschreibe **ich** immer Components die als Basis für unsere gesamte Anwendung dienen und häufig wiederverwendet werden (Mehr zu diesem Thema hier: [Component Driven User Interfaces](../../explanation/component-driven-development/component-driven-user-interfaces.md)).

**Warum verwenden wir nicht einfach den HTML Button Tag?**

Einen normalen Button in einer Angular Component zu wrappen ist natürlich overhead und häufig auch duplicate code, wir müssen Teile vom Button Tag in unsere Component übernehmen. In der Praxis hat sich das wrappen von Basis HTML Tags aber bewährt wir gewinnen u.a. folgende Vorteile (Unvollständig siehe [Wrap Components](../../explanation/component-driven-development/wrap-basic-and-third-party-components.md) für mehr zu diesem Thema):

- Single Point of Truth für jeden Button in unserer Applikation. Eine generelle Änderung (Bspw. Hover Effekt) muss nur an einer Stelle geändert werden.
- Tests für Button Funkionalität kann als unit test in einer Component stattfinden
- Der Button kann bestimmte Funktionalitäten haben die für unsere Applikation spezifisch sind (u.a. Tooltip Funktionalität, Verhalten bei verschiedenen Screen Größen, Icon Buttons etc.)

In unserem Beispiel beschränken wir uns auch nur auf wirkliche Grundlagen von einem Button, um Angular Components besser kennen zu lernen. Unser Button soll dabei folgende Funktionen unterstützen:

- Der Button hat ein gewissen Style der für unsere Anwendung spricht
- Ich kann dem Button von außen ein Label übergeben, welches im Button angezeigt wird
- Wenn ich auf den Button klicke möchte ich darauf reagieren

Diese Anforderungen sind bewusst sehr abstrakt beschrieben ohne konkrete Technische Details. Mit Absicht. Denn dahinter verbirgt sich eine typische Anforderungen und beinhaltet die Grundlagen einer Angular Component. Wir schreiben die Anforderung nochmal etwas technisch detailierter: 

- Der Button verwendet CSS für die Darstellung u.a. Hover Effekte und co.
- Der Button hat eine Property `label` die das Label des Buttons definiert
- Der Button hat ein Event `click` welches aufgerufen wird wenn der Button geklickt wird

Wir lernen hier zwei fundamentale Konzepte von Components kennen: Properties und Events. Properties sind Werte die wir von außen an die Component übergeben (vgl. mit einem Parameter an eine Funktion) und über ein Event können wir von außen auf Dinge reagieren die in der Component passieren. Mit diesen zwei Eigenschaften können wir also eine Beziehung zwischen unterschiedlichen Components herstellen.

- Eine andere Angular Component kann unseren Button für die Darstellung verwenden und selbständig Label und was beim Click passieren soll definieren
- Der Button selbst weiß nicht wie sein Label aussieht oder was beim Click passiert

In Angular gibt es dafür `@Input` und `Output` Decorators die wir auf unserer Component definieren. Hierfür öffnen wir unsere `button.component.ts` Datei und definieren folgendes:

```ts
@Input({ required: true })
label!: string;

@Output() buttonClick = new EventEmitter<void>();
```

Die `@Input` Property von unserer Component erweitert unsere Angular Component, dass diese von außen einen Input namens `label` übergeben bekommt als `string`. Wir können auch als Optionen an den Input mitgeben, dass dieser Input required ist. Wenn wir bspw. die Component jetzt speichern wird Angular einen Fehler werfen (NG8008).

Die `@Output` Property definiert einen Event Emitter der ein Event `buttonClick` auslöst. In der Parent Component (Also die Component welche den Button aufruft) können wir dann auf dieses Event reagieren.

Als nächstes verändern wir unser Template damit wirklich ein Button dargestellt wird, das Label angezeigt wird und auf das Click Event reagiert wird:

```html
<button (click)="handleClick()">
  {{ label }}
</button>
```

Hier passieren jetzt zwei Dinge:

1. Wir können auch auf HTML Events reagieren in Angular mit `(<event-name>)` und können dann eine eigene Funktion aufrufen. In unserem Fall definieren wir in der `app.component.ts` die Funktion `handleClick`:

```ts
public handleClick(): void {
  this.buttonClick.emit();
}
```

2. Unsere Label Property möchten wir als Text im Button anzeigen dafür rufen wir die Variable einfach mit `{{}}` im Template auf.

Damit unser Button jetzt angezeigt wird wechseln wir in die `app.component.html` und passen das Template an:

```html
<app-button [label]="'Test'"></app-button>
```

Damit wir einen Wert an den Input übergeben können verwenden wir `[]` in Angular. Wir können auch ohne `[]` die property direkt an einen simplen Wert (String, Number etc) übergeben aber damit wir bspw. auch Dynamische Werte übergeben können verwenden wir `[]`.

Wenn wir jetzt alle Dateien speichern lädt der Angular Dev Web Server automatisch neu und auf unserer Webseite sollte jetzt ein Button mit dem Label `test` angezeigt werden. Wenn wir auf den Button klicken passiert aber noch nichts.

## Arbeiten mit Events und Bedingungen

In der `app.component.ts` können wir uns jetzt eine Logik überlegen die ausgeführt werden soll wenn ein User auf den Button klickt. Dadurch, dass unser Button eine "Base" Component ist wird das originale Click Event weitergereicht an die Parent Component. 

- Wenn auf den Button geklickt wird soll ein Zufälliges Emoji auf der Webseite angezeigt werden

Wir erweitern zuerst unsere `app.component.html` und `app.component.ts` um eine Funktion die auf das Button Click Event reagiert und ändern das Label, welches besser auf die Funktionalität passt:

```html
<app-button [label]="'Change Emoji'" (buttonClick)="generateEmoji()"></app-button>
```

Mit der `()` Syntax können wir nicht nur auf DOM Events reagieren sondern auch auf eigene Events die wir in einer Component definieren.

```ts
public generateEmoji(): void {
  
}
```

Als nächstes definieren wir uns eine Variable in der `app.component.ts` die das aktuelle Emoji speichert und geben dieses im Template aus:

```ts
public currentEmoji = '🚀';
```

```html
{{currentEmoji }}
```

Jetzt definieren wir uns noch eine private Variable die alle Möglichen Emojis beinhaltet die zufällig gewählt werden können:

```ts
private possibleEmojis = ['🚀', '🌈', '💥', '🔥', '🌟'];
```

> [!NOTE]
> Wieso nutzen wir `private` und `public`? Wir können in Angular Components auch Variablen definieren auf die bspw. nicht im Template zugegriffen werden darf. In diesem Beispiel könnten wir nicht mit `{{}}` auf die `possibleEmojis` im Template zugreifen.

Abschließend erweitern wir den Inhalt der `generateEmoji` Funktion um eine Methode die einen zufälligen Index wählt und das `currentEmoji` auf den Wert des Indexes setzt:

```ts
const randomIndex = Math.floor(Math.random() * this.possibleEmojis.length);
this.currentEmoji = this.possibleEmojis[randomIndex];
```

Wenn wir jetzt alles Speichern und auf unsere Seite den Button klicken wir ein anderes Emoji angezeigt. Angular übernimmt dabei für uns selbständig die Change Detection für die Variable `currentEmoji` und aktualisiert das Template automatisch.

## Fazit

In diesem How To haben wir gelernt wie man mit der Angular CLI Angular Projekte erstellt. Innerhalb von einem Angular Projekt haben wir uns einmal die Struktur angeschaut die immer automatisch von der CLI erstellt wird und wie man sich darin zurecht findet.

Wir haben außerdem erste Schritte mit Angular Components gemacht und wie die Interaktion zwischen zwei Components aussehen kann kennen gelernt mit einem einfachen Button und Text Beispiel.

Folgende Themen haben wir behandelt:

- Angular CLI
- Angular Projekt Struktur
- Input und Output Properties von Angular Components
- Reagieren auf Events in Angular Components

### Die fertigen Dateien:

**app.component.html**
```html
<app-button [label]="'Test'" (buttonClick)="generateEmoji()"></app-button>
{{currentEmoji }}
```

**app.component.ts**
```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-angular-123';

  public currentEmoji = '🚀';

  private possibleEmojis = ['🚀', '🌈', '💥', '🔥', '🌟'];

  public generateEmoji(): void {
    const randomIndex = Math.floor(Math.random() * this.possibleEmojis.length);
    this.currentEmoji = this.possibleEmojis[randomIndex];
  }
}
```

**button.component.html**
```html
<button (click)="handleClick()">
  {{ label }}
</button>
```

**button.component.ts**
```ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input({ required: true })
  label!: string;

  @Output() buttonClick = new EventEmitter<void>();

  public handleClick(): void {
    this.buttonClick.emit();
  }
}
```