# CSS

CSS (Cascading Style Sheets) ist eine Sprache für die Gestaltung von HTML Elementen. Style, Layout und Animationen von modernen Webseiten werden alle mit CSS gelöst. HTML beschreibt wie Text auf einer Webseite strukturiert ist, CSS beschreibt wie dieser Text aussehen soll.

CSS ist eine `rule-based-langauge`. Es werden Regeln definiert die dann einer Gruppe an Styles zugeordnet ist. Diese Regeln können dann auf ein einzelnes HTML Element oder mehrere Elemente angewandt werden.

```css
h1 {
  color: red;
  font-size: 5em;
}
```

- CSS Regeln haben immer einen Selektor. Im oberen Beispiel `h1`. Mit dieser Regel werden alle `h1` Elemente auf der Seite angesprochen.
- Für einen Selektor können wir dann ein oder mehrere properties deklarieren. Die Deklarationen folgen immer einem key-value Paar.

```css
p {
  color: black;
}
```

Darüber hinaus bietet CSS eine Menge an Modulen wie man Inhalte gestalten kann und mit welchen Semantischen Modellen (bspw. Box model) CSS Regeln aufgebaut sind. Ein paar Auszüge:

- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations

## CSS in HTML

CSS kann auf drei verschiedene Arten in HTML Dokumente eingebunden werden:

- Externes Stylesheet (empfohlen)
- Internes Stylesheet (Wenn man nicht auf externes CSS zugreifen kann)
- Inline Styles (Falls möglich vermeiden)

### Externes Stylesheet

Eine eigenständige `.css` Datei welche in ein oder mehrere HTML Dokumente eingebunden werden kann. Für das Einbinden wird das `<link>` Elemente verwendet:

```html
<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This document includes a css file</p>
  </body>
</html>
```

### Internes Stylesheet

Ein internes Stylesheet wird direkt in der HTML Datei beschrieben und über das `<style>` Element eingebunden:

```html
<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>My Website</title>
    <style>
      h1 {
        color: green;
        background-color: yellow;
        border: 1px solid black;
      }

      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This document uses a style block element</p>
  </body>
</html>
```

### Inline Styles

HTML Elementen kann man auch ein Style Attribute geben und damit ein einzelnes Element direkt inline gestalten:

```html
<!DOCTYPE html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>My Website</title>
  </head>
  <body>
    <h1 style="color: green">Hello World!</h1>
    <p style="background-color: yellow">This document includes a css file</p>
  </body>
</html>
```

> [!CAUTION]
> Inline Styles sollten nur in Ausnahmefällen verwendet werden. Sie lassen sich nicht wiederverwenden.

## Selektoren

Ein CSS Selektor ist der erste Teil einer CSS Regel. Ein Selektor gibt an welche Elemente oder Klassen angepasst werden sollen.

```css
h1 {
  background-color: yellow;
}
```

Selektoren können auch selbst definierte klassen sein:

```css
.important {
  color: red;
}
```

Selektoren können auch zu Listen kombiniert werden:

```css
h1,
.special {
  color: red;
}
```

### Arten von Selektoren

- Type selektoren sprechen genau ein HTML Element an:

```css
button {
  background-color: green;
}
```

- Klassen selektoren sprechen alle Elemente mit einer bestimmten Klasse an:

```css
.important {
  color: red;
}
```

- ID selektoren sprechen alle Elemente mit einer bestimmten ID an:

```css
#unique {
  color: green;
}
```

- Attribute selektoren sprechen alle Elemente mit einem bestimmten Attribut an:

```css
button[disabled] {
  color: grey;
}
```

- Attribute selektoren können auch auf einzelne Werte reagieren:

```css
a[href="https://www.google.com"]
{
  color: green;
}
```

- Pseudo Klassen selektieren Elemente die sich in einem bestimmten Zustand befinden:

```css
button:hover {
  color: red;
}

a:visited {
  color: grey;
}

button:disabled {
  color: grey;
}
```

- Pseudo Klassen können auch Pseudo Elemente selektieren. Hier wird die erste Zeile von einem Paragraphen rot dargestellt:

```css
p::first-line {
  color: red;
}
```

- Combinator selektieren Elemente die in einer bestimmten Beziehung zueinander stehen. Hier werden alle `p` Elemente die sich innerhalb eines `div` Elements befinden rot dargestellt:

```css
div > p {
  color: red;
}
```

## CSS Eigenschaften und Values

Jede CSS Regel lässt sich auf folgendes Pattern herunterbrechen: Es gibt eine Property und eine Value zu dieser Property:

```css
h1 {
  color: red;
}
```

- `color` ist die Property welche wir anpassen möchten von einem Element
- `red` ist der Wert den wir für diese Property setzen möchten

Auf einen Selektor können auch mehrere Properties definiert werden:

```css
h1 {
  color: red;
  background-color: yellow;
  border: 1px solid black;
}
```

> [!NOTE]
> Wenn eine Property nicht zugeordnert werden kann oder ein Wert ungültig ist ignoriert der Browser diese Property einfach.

### Funktionen

Für CSS Properties können auch Funktionen als Werte gesetzt werden z.B. die Größe von einem Container kann dynamisch berechnet werden:

```css
.container {
  height: calc(100% - 20px);
}
```

> [!NOTE]
> Mittels Funktionen kann in der Theorie auch eine Datenbank in CSS implementiert werden. https://www.leemeichin.com/posts/yes-i-can-connect-to-a-db-in-css.html

Funktionen können auch Elemente transformieren oder Dinge wiederholen. Ein einfaches Beispiel ist ein CSS Grid mit insgesamt 3 Spalten:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

### Regeln

CSS kann auch Regeln definieren mit `@<regel>`. Dadurch können Regeln definiert werden wann ein CSS Selektor oder Klasse angewandt werden. Ein häufiges Beispiel ist z.B. die Screen Größe um Elemente responsive darzustellen:

```css
body {
  background-color: lightgreen;
}

@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

### Shorthand Properties

CSS bietet auch Shorthand Properties an. Diese können mehrere Properties in einer Zeile zusammenfassen. Ein Beispiel ist die `border` Property:

```css
.container {
  border: 1px solid black;
}
```

> [!CAUTION]
> Shorthand Properties welche nicht gesetzt sind können zu unerwarteten Ergebnissen führen. Wenn wir bspw. bei einem Padding das `padding-left` nicht setzen wird ggf. ein anderer Wert dafür genommen (Nach der 4 Values Regel)
