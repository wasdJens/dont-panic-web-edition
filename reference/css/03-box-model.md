# CSS Box Model

Alles was mit CSS gestaltet wird hat eine "Box" um sich herum. Das Box Model bildet die Grundlage wie sich Elemente zueinander verhalten und mit welchen properties diese verändert werden können. Das Box Model hilft uns dabei CSS Verhalten besser zu verstehen und ein falsches mentales Modell ist eine häufige Fehler Quelle wenn man mit CSS arbeitet.

In CSS gibt es unterschiedliche "Boxen" die man in folgende Kategorien einordnen kann: `block boxes` und `inline boxes`. Diese Kategorien legen fest wie sich eine Box verhält wenn die Seite umbrüche macht oder in Relation zu anderen Boxen. Boxen haben immer einen `inner display type` und einen `outer display type`.

Der Display type wird über die `display` property gesetzt.

## Outer Display Type

### `block`

- Boxen "brechen" in eine neue Zeile um
- Höhe und Breite der Box wird respektiert
- Padding, Margin und Borders drücken andere Elemente weg von der Box
- Wenn keine Breite gesetzt ist füllt die Box die gesamte Breite aus

Block Boxen werden z.B. von `h1`, `p` als Default genutzt.

### `inline`

- Boxen "brechen" nicht in eine neue Zeile um
- Höhe und Breite werden nicht gesetzt
- Top und Bottom Padding, Margin und Borders werden angewandt drücken aber keine anderen Elemente weg
- Left und Right Padding, Maargin und Borders werden angewandt und drücken andere inline boxes weg von der box

Inline Boxen werden z.B. von `a`, `span`, `em` und `strong` als Default genutzt.

## Inner Display Type

`inner display type` Boxen geben an wie sich Elemente innerhalb der Box verhalten. Dabei bildet `block` und `inline layout` den Default an, wie sich Elemente auf Webseiten verhalten (Wenn nicht anders angegeben). Was passiert jetzt wenn eine Box mehrere Elemente enthält? Standardmäßig folgen alle "Child" Elemente dem `normal flow` layout. Das bedeutet das Elemente untereinander angeordnet werden und verhalten sich nach dem `block` oder `inline` Verhalten.

Aber auch dieses Verhalten kann überschrieben werden. Ein moderner Ansatz für das setzen von Elementen innheralb einer box (`inline` types) ist bspw. die `Flexbox`. Jedes Element innerhalb von dieser Box werden dann zu `flex items`. Mehr über die Flexbox im Layout Kapitel.

```css
.box {
  display: flex;
}
```

## Box Model

Das Box Model definiert wie sich Margin, Border, Padding und Inhalt von einem Element zusammen arbeiten und eine Box definieren die später auf einer Webseite angezeigt werden. Dabei ist das Box Model in vier Bereiche unterteilt:

- Content Box: Der Teil wo der eigentliche Inhalt angezeigt wird. Die Größe kann durch `inline-size`, `block-size` oder `width` und `breite` gesteuert werden
- Padding Box: Padding wird um den Inhalt herum angezeigt und dient meistens als white space. Die Größe kann über die Property `padding` geseteuert werden.
- Border Box: Die Border Box ist der Bereich um den Inhalt und Padding herum. Die Größe kann über die Property `border` gesteuert werden.
- Margin Box: Der äußerste Bereich der Box. Dieser ist über dem Inhalt, Padding und Border also ein Whitespace zwischen dem Element und anderen Elementen. Die Größe kann über die Property `margin` gesteuert werden.

```
+---------------------------+
| Margin                    |
| +-----------------------+ |
| | Border                | |
| | +-------------------+ | |
| | | Padding           | | |
| | | +---------------+ | | |
| | | | Content       | | | |
| | | +---------------+ | | |
| | +-------------------+ | |
| +-----------------------+ |
+---------------------------+
```

### Standard CSS Box Model

Im Nachfolgenden Beispiel ein Standard Box Model auf einem Element. Die Dimension vom Inhalt ist 250px x 150px. Auf diesen Inhalt werden dann Padding, Border und Margin dazu addiert. Die Kombination aus allen ist dann die gesamte Box

```css
.box {
  width: 250px;
  height: 150px;
  margin: 10px;
  padding: 10px;
  border: 3px solid black;
}
```

Die gesamte Größe der Box ist dann: 250px + 10px + 10px + 3px + 3px = 276px

### Alternatives Box Model

Das standardmäßige Box Model kann auch auf ein alternatives geändert werden (`border-box`). Dabei wird die Breite und Höhe der Box auf den Inhalt inklusive Padding und Border gesetzt. Die Margin wird dann außerhalb der Box gesetzt. Der Inhalt ist also die eigentliche Breite minus Padding und Border.

```css
.box {
  box-sizing: border-box;
}
```

Mit dem selben CSS wie von oben:

```css
.box {
  width: 250px;
  height: 150px;
  margin: 10px;
  padding: 10px;
  border: 3px solid black;
}
```

Die gesamte Größe der Box ist dann: In der `inline` Richtung 250px und 150px in die `block` Richtung. Möchte man dieses Modell für alle Elemente auf einer Webseite anwenden kann man das `<html>` Element entsprechend setzen:

```css
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
```

## Margins, Paddings und Borders

> [!TIP]
> Alle Properties können entweder in der short-hand Schreibweise definiert werden (`padding: 10, 25, 25, 10`) oder jede Property kann einzeln definiert werden (`padding-top: 10; padding-right: 25; padding-bottom: 25; padding-left: 10;`)

### Margin

Margin ist ein Whitespace um ein Element herum. Dieser Whitespace drückt andere Elemente "weg" von der eigentlichen Box. Margin Werte können dabei Positiv oder Negativ sein. Ein negativer Wert kann z.B. eingesetzt werden um zwei Elemente überlappend darzustellen.

```css
.box {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
}
```

### Borders

Eine Border ist zwischen der Margin und dem Padding von einer Box. Im Standard Box Model Modus wird die Border auf die Größe der Breite und Höhe addiert. Im Alternativen Box Model nimmt die Border stattdessen etwas Größe vom eigentlichen Inhalt weg (Wenn der Inhalt 250x250px beträgt und eine Border von 2px gesetzt ist der eigentliche Inhalt nur noch 248x248px groß). Die Border selbst kann dabei vier unterschiedliche Styles annehmen (z.B. solid oder dotted) und jede Border kann individuell gesetzt werden (z.B. die Border Links soll dotted sein während die Border Rechts solid ist)

```css
.box {
  border-top: 10px solid black;
  border-right: 20px dotted black;
  border-bottom: 30px solid black;
  border-left: 40px dotted black;
}
```

### Padding

Ein Padding ist der Abstand zwischen dem Inhalt und der Border. Das Padding verschiebt dabei die Border vom eigentlichen Inhalt weg. Paddings können nicht negativ sein (anders als margins bspw.). Hintergrund Farben werden auch auf das Padding angewandt.

```css
.box {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}
```

## Box Model in Kombination mit inline boxes

Inline boxen (bspw. `<span>` Elemente) können auch Properties wie Border, Padding und Margin bis zu einem gewissen Teil annehmen. Eine Besonderheit von inline boxen ist dabei, dass die Breite und Höhe ignoriert werden und die Relation zu anderen Elementen ignoriert wird. Ein `<span>` innerhalb von einem Paragraphen mit einem padding wird also überlappend mit dem Paragraphen im Konflikt stehen. Abstände links und rechts werden allerdings respektiert.

```css
span {
  padding: 10px;
  border: 3px solid black;
  margin: 10px;
}
```

### `inline-block`

Das Display Attribute kann den Zustand `inline-block` annehmen. Dieses bietet einen Kompromiss aus `inline` und `block`. `inline-block` kann verwendet werden wenn ein Element nicht einen Zeilenumbruch hervorrufen soll aber trotzdem Breite und Höhe annehmen soll.

- Die Höhe und Breite werden respektiert
- Padding, Margin und Border werden angewandt und andere Elemente werden weggedrückt

```css
span {
  margin: 20px;
  padding: 20px;
  width: 80px;
  height: 50px;
  background-color: lightblue;
  border: 2px solid blue;
  display: inline-block;
}
```

Ein einfaches Anwendungsbeispiel für `inline-block` ist die Klick Zone von Elementen (Bspw. Links) zu vergrößern damit User nicht direkt auf den Text klicken müssen sondern einen größeren Bereich zur Auswahl haben.
