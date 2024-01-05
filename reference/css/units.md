# Values und Units

Jeder CSS Property können Werte zugewiesen werden. Nicht alle Properties nehmen aber alle Werte entgegen. Aus diesem Grund gibt es Value Types die für spezielle Properties gelten. Zum Beispiel kann der `color` Property jede gültige Farbe zugewiesen (Als String, Als Hex Code oder als Funktion)

```css
button {
  color: red;
  background-color: #000;
}
```

## Numerische Werte

| Daten Typ | Beschreibung |
| :---: | :---: |
| `<integer>` | Ganzzahl |
| `<number>` | Gleitkommazahl |
| `<length>` | Längenangabe |
| `<dimension>` | Längenangabe mit Einheit bspw. `45deg` bei Animationen |
| `<percentage>` | Prozentangabe |

### Relative Längenangaben

| Einheit | Realtive To |
| :---: | :---: |
| `em` | Font Size vom Element häufig bei `fonz-size` properties |
| `rem` | Font Size vom Root Element |
| `vw` | 1% der Viewport Breite |
| `vh` | 1% der Viewport Höhe |
| `lh` | 1% der Zeilenhöhe |
| `rlh` | 1% der Zeilenhöhe vom Root Element |


Alle weiteren: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units

## `em` und `rem`

`em` und `rem` sind relative Längenangaben. `em` ist relativ zum Parent Element und `rem` ist relativ zum Root Element. Das Root Element ist das `html` Element. Rem bietet sich an wenn bspw. die Font Size vom HTML Element verändert wird passen sich alle Elemente entsprechend an.

```css
html {
  font-size: 16px;
}

.list-item {
  fonz-size: 1.3rem;
}
```
