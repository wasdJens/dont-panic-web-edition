# CSS Custom Properties (Variables)

Eine Custom Property (Oder CSS Variable) ist eine Funktionalität von CSS, um Werte einer Art Variable zuzuordnen, damit diese später in anderen CSS Teilen wiederverwendet werden kann.

Größere Webseiten nutzen häufig die selben Werte speziell wenn es darum geht Allgemeine HTML Elemente zu gestalten. Ein einfaches Beispiel ist die Farbe und Borders von einem Button auf einer Webseite. Wenn man jetzt jedes mal jede Button Definition suchen und anpassen muss wenn sich bspw. der Border Radius um 1px ändert ist dies sehr aufwendig und fehleranfällig.

Custom Properties hingegen können einmalig definiert werden und dann überall in CSS referenziert werden. CSS bietet dabei zwei Möglichkeiten eine Custom Property zu definieren:

- `@property` (at-rule)
- `--primary-color: blue` (custom property syntax)

Diese Werte können dann über die `var()` Funktion in CSS referenziert werden. Ein Unterschied zwischen der `@property` Regel und `--primary-color: blue` ist ihr Verhalten in Bezug auf Cascading und Inheritance von ihren Parent Elementen.

`--primary-color: blue` respektieren immer die Cascading Regeln und erben ihre Werte von möglichen Parent Elementen. `@property` hingegen können angeben, ob Werte von einem Parent übernommen werden sollen und was die Initial Werte sind.

## Definition von Custom Properties

Custom Properties können in jeder CSS Regel für ein Element definiert werden. Ein einfaches Beispiel wir möchten die Allgemeine Farbe von einem Button definieren:

```css
button {
  --main-bg-color: orange;
}
```

Die Zuweisung erfolgt dabei wie für normale CSS Properties und Custom Properties können alle gültigen CSS Werte annehmen. Für die Regel `button` wird also die Custom Property `--main-bg-color` definiert und auf den Wert `orange` gesetzt. Auf diese Custom Property können wir jetzt im Scope von der `button` Regel zugreifen. 

Aber auf diesen Selektor kann man nicht Global zugreifen aus diesem Grund werden CSS Custom Properties normalerweise auf dem `root` pseudo Element definiert:

```css
:root {
  --main-bg-color: orange;
}
```

Aber es gibt auch gute Gründe nicht jede Custom Property Global zu definieren.

Die `@property` Definition hingegen erlaubt es fein granular Werte für eine Custom Property zu definieren. Hier können Typen, Initial Werte und Inheritance Regeln gesetzt werden:

```css
@property --main-bg-color {
  syntax: '<color>';
  inherits: false;
  initial-value: orange;
}
```

> [!NOTE]
> Als Expermintelles Feature können Custom Properties auch über JavaScript definiert werden. CSS Houdini erlaubt es Entwicklern explizit CSS Custom Properties zu definieren und zu manipulieren. Dieses Feature ist aber bspw. noch nicht in Firefox verfügbar. [^1] [^2] 

## Custom Properties lesen

Auf Custom Properties kann mit der `var()` Funktion zugegriffen werden egal ob diese als `@property` oder mittels `--` definiert wurden.

```css
button {
  background-color: var(--main-bg-color);
}
```

Wenn eine Custom Property nicht gefunden wird, kann der zweite Paramter von `var()` einen Fallback Wert definieren:

```css
button {
  background-color: var(--main-bg-color, orange);
}
```

## Custom Properties in JavaScript

Custom Properties können auch in JavaScript gelesen und gesetzt werden. Sie werden wie alle anderen Properties von einem Element behandelt:

```js
// Inline style
element.style.getPropertyValue('--main-bg-color');

// Get value fom whereever
getComputedStyle(element).getPropertyValue('--main-bg-color');

// Set variable on inline style
element.style.setProperty('--main-bg-color', 'blue');
```


## References

[^1]: https://developer.mozilla.org/en-US/docs/Web/API/Houdini_APIs+
[^2]: https://developer.mozilla.org/en-US/docs/Web/API/CSS_Properties_and_Values_API