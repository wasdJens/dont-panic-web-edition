# CSS Layout

CSS kann neben der Gestaltung von einzelnen Elementen oder Blöcken auch das Layout dieser Elemente beeinflussen. So lassen sich bspw. Layouts mit mehreren Spalten oder mit einem festen Seitenlayout realisieren.

Wenn keine Layout Properties angegeben werden zeigt der Browser alle Elemente in der Reihenfolge an, wie sie im HTML Dokument definiert sind (`normal flow`). Über CSS Properties kann dieses Verhalten aber angepasst werden:

- `display` Standard Werte sind bspw. `block`, `inline` oder `inline-block` und verändern das Verhalten der einzelnen Elemente im `normal-flow`. Darüber hinaus gibt es aber auch komplette Methoden u.a. Flexbox und CSS Grid.
- `float` Elemente können mit `float` aus dem `normal-flow` genommen werden und bspw. nebeneinander angeordnet werden.
- `position` Mit `position` können Elemente absolut oder relativ positioniert werden. Absolute Positionierung ist immer relativ zum nächsten Parent Element mit `position: relative`. Relative Positionierung ist relativ zum `normal-flow` und verändert die Position des Elements nicht.

## Display Property

Die Display Property passt das Normale Verhalten von Elementen an bspw. sind Paragraphen `block` Elemente und werden untereinander angezeigt. Wenn wir in diesen Paragraphen jetzt andere Elemente hinzufügen (bspw. `<a>` oder `<strong>`) um einen Text, bleiben diese Elemente im flow an ihrer bestehenden Position. `<a>` und andere Elemente verwenden standardmäßig `display: inline`.

Mit dem Standardverhalten von Display können also Elemente entweder `block` oder `inline` dargestellt werden. Darüber hinaus ist es auch möglich spezielle `flex` und `grid` Werte an die `display` Property zu übergeben.

## Flexbox (Flexible Box Layout)

Flexbox ordnet alle Elemente in einer Dimension an, entweder als Reihe (row) oder als Spalten Layout (column). Die Eigenschaft `display: flex` wird dabei auf das Parent Element gesetzt und alle Kind Elemente werden dann zu flex items. Das nachfolgende Beispiel illustriert drei Elemente die durch die Eigenschaft `display: flex` nicht mehr untereinander angezeigt werden, sondern nebeneinander.

```css
.container {
  display: flex;
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Flexbox Magic</title>
  </head>

  <body>
    <div class="container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </body>
</html>
```

Die Richtung in der Elemente angezeigt werden können mit `flex-direction` gesteuert werden.

```css
.container {
  display: flex;
  flex-direction: row;
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Flexbox Magic</title>
  </head>

  <body>
    <div class="container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </body>
</html>
```

Auf dem Container können jetzt spezielle Flex Eigenschaften gesetzt werden, die das Verhalten der Elemente beeinflussen. Die wichtigsten sind:

- `flex-direction` Richtung in der Elemente angezeigt werden sollen. Standard ist `row` (von links nach rechts).
- `flex-wrap` Sollen Elemente in einer Zeile angezeigt werden oder sollen sie umbrechen. Standard ist `nowrap`.
- `justify-content` Wie sollen Elemente in der Zeile angeordnet werden. Standard ist `flex-start`.
- `align-items` Wie sollen Elemente in der Spalte angeordnet werden. Standard ist `stretch`.
- `align-content` Wie sollen Elemente in der Spalte angeordnet werden, wenn es mehrere Zeilen gibt. Standard ist `stretch`.

Darüber hinaus können auch auf den einzelnen Elementen spezielle Flex Eigenschaften gesetzt werden, die das Verhalten des Elements beeinflussen. Die wichtigsten sind:

- `flex-grow` Wie viel Platz soll das Element relativ zu anderen Elementen bekommen. Standard ist `0`.
- `flex-shrink` Wie viel Platz soll das Element relativ zu anderen Elementen verlieren. Standard ist `1`.
- `flex-basis` Wie viel Platz soll das Element relativ zu anderen Elementen bekommen. Standard ist `auto`.

Als Beispiel setzen wir auf alle `<div>` flex items die Property `flex: 1` dadurch versuchen alle Elemente die volle Verfügbare Breite einzunehmen. Wenn neue Items hinzugefügt werden, passen sich die Elemente selbständig wieder an.

```css
.container {
  display: flex;
  flex-direction: row;
}

.container > div {
  flex: 1;
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Flexbox Magic</title>
  </head>

  <body>
    <div class="container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </body>
</html>
```

Alle weiteren Informationen über Flexbox können hier nachgelesen werden [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

## Grid Layout

Flexbox eignet sich besonders für ein dimensionale Layouts. Für zwei dimensionale Layouts (Also Reihen und Spalten) bietet sich `display: grid` an. Grid verhält sich ähnlich zur Flexbox. Im Container können wir direkt angeben wie sich Spalten und Reihen verhalten sollen (Und welche Größe diese annehmen sollen). Alle Elemente im Container werden dann automatisch in die entsprechenden Spalten und Reihen angeordnet.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Grid Magic</title>
  </head>

  <body>
    <div class="container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
  </body>
</html>
```

Ähnlich zu einer Tabelle können aber auch einzelne Elemente genau in eine Spalten / Reihen Position gesetzt werden. Spezielle Grid Eigenschaften sind u.a:

- `grid-template-columns` Wie viele Spalten soll es geben und wie breit sollen diese sein.
- `grid-template-rows` Wie viele Reihen soll es geben und wie hoch sollen diese sein.
- `grid-template-areas` Wie sollen die einzelnen Elemente angeordnet werden.
- `gap` Wie viel Abstand soll zwischen den einzelnen Elementen sein.

Und für Grid Elemente gibt es u.a. folgende Eigenschaften:

- `grid-column-start` Ab welcher Spalte soll das Element starten.
- `grid-column-end` Bis zu welcher Spalte soll das Element gehen.
- `grid-row-start` Ab welcher Reihe soll das Element starten.
- `grid-row-end` Bis zu welcher Reihe soll das Element gehen.
- `grid-row` Welche Reihe soll das Element einnehmen.
- `grid-column` Welche Spalte soll das Element einnehmen.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 10px;
}

.box1 {
  grid-column: 2 / 4;
  grid-row: 1;
}

.box2 {
  grid-column: 1;
  grid-row: 1 / 3;
}

.box3 {
  grid-row: 2;
  grid-column: 3;
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Grid Magic</title>
  </head>

  <body>
    <div class="container">
      <div class="box1">1</div>
      <div class="box2">2</div>
      <div class="box3">3</div>
    </div>
  </body>
</html>
```

## Multple Column Layout

Wenn man Inhalte in einem Column präsnetieren möchte kann man das CSS Grid verwenden. Als Alternative gibt es aber auch `column-count` und `column-width` die einfach auf einen container gelegt werden und ein mehrspaltiges Layout erzeugen.

```css
.container {
  column-count: 3;
}
```

Wenn keine fixe Breite angegeben ist, ermittelt der Browser selbständig die jeweilige Breite für jede Spalte selbtständig. Die einzelnen Spalten können zusätzlich auch noch gestaltet werden mit `column-gap` und `column-rule`.

```css
.container {
  column-count: 3;
  column-gap: 10px;
  column-rule: 1px solid black;
}
```
