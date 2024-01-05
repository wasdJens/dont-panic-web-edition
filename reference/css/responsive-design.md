# Responsive Design

Alle HTML Elemente sind im Kern automatisch komplett responsive. Ein Browser (Egal in welcher Größe) wird immer selbständig versuchen alle Elemente passend anzuordnen. Dennoch gibt es Text und andere Formate die zwar mit automatischen Umbrüchen lesbar sind aber nicht die optionale User Experience bieten.

Responsive Web Design ist dabei keine neue Technologie oder ein neuer Standard. Vielmehr kann man mit CSS und Layout Techniken jede Webseite für entsprechende Endgerät Größen designen.

## Media Queries

Media Queries ermöglichen es uns bestimmte Größen von einem Gerät zu ermitteln und verschiedene CSS Klassen anzuwenden wenn ein bestimmter Wert erreicht ist. Das folgende Beispiel zeigt eine Media Query welche alle `screen` Darstellungen (Also kein Printable Content z.B.) mit einer Mindestbreite von `80rem` anspricht. In diesem Fall wird der `margin` des `.container` Elements auf `1em 2em` gesetzt. Andernfalls wird diese Klasse ignoriert.

```css
@media screen and (min-width: 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Für die meisten modernen Webseiten bedeutet dies etwa, dass Layouts die vorher in drei Spalten unterteilt waren auf einem Mobil Gerät mit nur einer Spalte angezeigt werden. Die oben dargestellte Syntax hat einen Breakpoint bei `80rem`. Breakpoints sollten immer relative units verwenden anstatt absolute werte oder einzigartige Geräte Größen.

## Responsive Layouts

Flex, Grid und Multiple Column layouts sind alle standardmäßig responsive. Das bedeutet, dass sie sich automatisch an die Größe des Viewports anpassen bzw. Möglichkeiten anbieten direkt flexible Größen zu definieren.

### Flexbox

Flexbox items nehmen selbständig die Größe ein welche Sie von ihrem Container vorgegeben bekommen d.h. Items können auf größeren Screen Größen mehr Fläche einnehmen als auf kleineren Screens. Die Properties `flex-grow` und `flex-shrink` bieten darüber hinaus eine Möglichkeit das Verhalten zu steuern wenn bestimmte Größen erreicht sind.

Das einfachste responsive layout mit der Flexbos ist das Nachfolgende Beispiel. Alle Elemente nehmen die gleiche Größe ein und passen sich automatisch an die Größe des Containers an.

```css
.container {
  display: flex;
}

.item {
  flex: 1;
}
```

### CSS Grid

Im CSS Grid können Spalten automatisch auf eine relative breite gesetzt werden mit bspw. `1fr. Die Spalten nehmen dann die Größe an basierend auf ihrem Container.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

## Responsive Typography

Media Queries können auch auf Text Elemente angewandt werden um bspw. eine Überschrift auf einem Handy kleiner darzustellen und auf einem Desktop Screen in voller Größe.

```css
h1 {
  font-size: 2rem;
}

@media (min-width: 1200px) {
  h1 {
    font-size: 3rem;
  }
}
```

Das gleiche Ergebniss können wir aber auch erzielen indem wir `viewport` units verwenden anstelle von media queries. `vw` und `vh` sind relative units welche die Größe des Viewports als Basis nehmen. `1vw` entspricht also `1%` der Viewport Breite.

```css
h1 {
  font-size: 6vw;
}
```

In diesem Beispiel verliert der User allerdings die Möglichkeit zu zoomen. Stattdessen können wir die font-size auch dynamisch berechnen:

```css
h1 {
  font-size: calc(1rem + 2vw);
}
```

## Viewport Meta Tag

Der Viewport Meta Tag ist ein spezieller Tag welcher in der `head` section einer HTML Datei eingefügt werden kann. Er ermöglicht es uns die Größe des Viewports zu definieren und damit die Darstellung der Webseite zu beeinflussen.

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Das Viewport Meta Tag überschreibt damit den Default vom eigentlichen Gerät (Apple setzt bspw. den Viewport immer auf `980px`). Als best practice empfiehlt es sich den Viewport meta tag immer auf eine Webseite zu setzen damit eigene Media Queries und viewports richtig funktionieren.
