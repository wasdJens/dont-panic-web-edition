# How To: Eine erste Webseite erstellen

Diese Anleitung erklärt wie man eine erste einfache Webseite mit HTML und CSS erstellt.

**Vorrausetzung**

- Ein Text Editor ist installiert (bspw. [Visual Studio Code](https://code.visualstudio.com/))

## HTML Dokument

- Starte Visual Studio Code
- File -> Open
- Wähle einen Ordner für das erste Projekt aus oder erstelle einen neuen Ordner
- Klicke auf "Trust the Authors" wenn Visual Studio Code dich dazu auffordert
- File -> New File
- Gib nun `index.html` ein und speichere diese Datei im vorherigen ausgewählten Ordner
- Kopiere nun folgenden Code in die Datei und speichere diese (cmd + s oder ctrl + s)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Machine Park</title>
  </head>

  <body>
    <h1>Machine Park</h1>
    <p>This is a status page which machines are currently in use and running</p>

    <h2>All Machines</h2>
    <ul>
      <li>
        Machine 1 <span>Status: <strong>Offline</strong></span>
      </li>
      <li>
        Machine 1 <span>Status: <strong>Online</strong></span>
      </li>
      <li>
        Machine 1 <span>Status: <strong>Offline</strong></span>
      </li>
    </ul>
  </body>
</html>
```

- Öffne nun die Datei im Browser (Rechtsklick -> Auf Dateisystem anzeigen -> Datei in ein leeres Browser Tab ziehen)

## CSS Datei

- File -> New File
- Gib nun ``styles.css` ein und speichere diese Datei im vorherigen ausgewählten Ordner
- Kopiere nun folgenden Code in die Datei und speichere diese (cmd + s oder ctrl + s)

```css
body {
  font-family: Arial, Helvetica, sans-serif;
}

strong {
  color: red;
}
```

- Als nächstes muss diese CSS Datei in unserem HTML Dokument referenziert werden.
- Dafür füge folgendes `<link>` Element in den `<head>` Bereich ein:

```html
<link rel="stylesheet" href="styles.css" />
```

- Wenn alles geklappt hat sollte nun die Schriftare geändert sein und das Wort "Offline" bzw. "Online" rot dargestellt werden.

## Webseite gestalten

Mit dem Setup von oben haben wir jetzt eine HTML seite und eine CSS Datei. Wenn wir jetzt eine Änderung an einer von beiden machen und das Browser Fenster neuladen sollten die Änderungen sichtbar sein.

### HTML Elemente gestalten

Mittels CSS können alle HTML Elemente direkt gestyled werden indem man den Namen des Elements als Selektor verwendet.

- In dem nachfolgenden Beispiel setzen wir alle `h1` Elemente auf eine grüne Schriftfarbe und entfernen die Aufzählungszeichen von `ul` Elementen:

```css
h1 {
  color: green;
}

ul {
  list-style: none;
}
```

Es können auch mehrere HTML Elemente gleichzeitig selektiert werden indem man diese mit einem `,` trennt.

- Im folgenden Beispiel werden alle `h1` und `h2` Elemente grün dargestellt:

```css
h1,
h2 {
  color: green;
}
```

Mit diesen Möglichkeiten können auch Browser Defaults überschrieben werden bspw. bekommen Listen immer ein Aufführungszeichen. Mit `list-style: none` entfernen wir dieses. Als nächstes möchten wir Klassen bauen die wiederverwendet werden können.

### Klassen

Einzelne HTML Elemente gestalten hat den Nachteil, dass diese CSS Regeln für alle Elemente auf der Seite angewandt werden. Es gibt aber Fälle wo wir nur bestimmte Bereiche der Webseite bzw. bestimmte Elemente anpassen möchten. In CSS können wir auch Klassen definieren und über ein HTML Attribute die Klasse referenzieren

- Wir erstellen eine neue CSS Klasse `online` diese möchten wir für alle `li` Elemente verwenden die den Status "Online" haben. Dafür fügen wir folgenden CSS Code hinzu:

```css
.online {
  color: green;
}
```

- Als nächstes müssen wir diese Klasse in unserem HTML Dokument verwenden. Dafür fügen wir die Klasse in das `strong` Element ein:

```html
<li>
  Machine 1 <span>Status: <strong class="online">Online</strong></span>
</li>
```

- Diese Klasse überschreibt jetzt das styling vom vorherigen `strong` Element und stellt den Text grün dar aber nur für die Elemente welche die Klasse `online` als Attribute haben.

### Styles anhand der Location im Element

Eine weitere Möglichkeit Elemente zu gestalten ist anhand ihrer Position im HTML Dokument. Angenommen wir haben ein block Element (hier `<div>`) mit einer besonderen Klasse und möchten innerhalb von diesem div alle Texte orange darstellen.

- Erweitert euren Code mit folgenden Änderungen:

```css
.dashboard p {
  color: orange;
}
```

```html
<h2>Machine Dashboard</h2>
<div class="dashboard">
  <p>The machine dashboard displays all live metrics of each machine</p>
</div>
```

- Der oben stehende Selektor wählt alle Elemente aus die innerhalb der klasse `dashboard` sind.

> [!TIP]
> Es ist auch möglich Kombinationen von Selektoren zu verwenden bspw. `body h1 + p .special` ist ein gültiger Selektor. Diese Selektor styled alle Elemente mit der Klasse `.special` welche innerhalb eines `p` Elements sind welches direkt nach einem `h1` Element kommt welches innerhalb des `body` Elements ist.

### Styles basierend auf Zuständen

Jedes HTML Element hat auch einen State bspw. ein Link kann bereits vom User angeklickt worden sein oder der User hovered über einen Button. Diese Zustände können wir auch mittels CSS stylen.

Im nachfolgenden Beispiel möchten wir allen Buttons einen speziellen Hover Effekt geben.

- Erweitert euren Code mit folgenden Änderungen:

```css
button:hover {
  background-color: green;
  color: white;
}
```

```html
<button>Hover over me</button>
```