# Overflow

Alles in CSS ist in Boxen unterteilt (Siehe [Box Model](./box-model.md)). CSS versucht selbständig Inhalte so anzuordenen, dass es zu keinem Overflow kommt indem Boxen sich gegenseitig "wegdrücken" doch jede Screen Größe ist ab einem Gewissen Punkt begrenz und Inhalte überlappen sich.

Overflow Content erkennt man häufig daran, dass der eigentliche Inhalt aus seiner Box "aussbricht" bspw. hat ein Header eine Border aber der Titel ist zu lang und bricht aus der Box aus. CSS versteckt standardmäßig keinen zu großen Inhalt sondern erlaubt den Overflow. Ansonsten könnte es passieren das wichtige Inhalte nicht angezeigt werden (Und User gar nicht wissen ob hier Inhalt fehlt oder nicht).

Sobald ein Element eine Höhe und Breite hat lässt CSS den Content overflowen, weil CSS davon ausgeht wenn eine fixe Höhe und Breite gesetzt ist der Fall von einem Overflow vom Entwickler abgedeckt ist.

## Overflow Property

CSS hat eine eigene Property um den Overflow von einem Inhalt bewusst zu steuern und nicht auf Browser Defaults zurückzufallen. Die `overflow` property gibt einer Klasse an wie sie sich Verhalten soll, wenn der Inhalt zu groß ist.

```css
.box {
  width: 350px;
  height: 250px;
  overflow: hidden;
}
```

Im oben genannten Beispiel ist der "einfachste" Fall um mit Overflow umzugehen. Der Overflow wird einfach versteckt.

> [!WARNING] > `overflow:hidden` sollte nur eingesetzt werden wenn ausgeschlossen werden kann, dass keine Informationen verloren gehen.

Eine bessere Alternative ist es Inhalt der größer als die Box ist ein Scroll Verhalten zu geben. Dadurch kann innerhalb der Box einfach gescrolled werden und der komplette Inhalt wird dargestellt

```css
.box {
  width: 350px;
  height: 250px;
  overflow: scroll;
}
```

Der Vorteil von Scrollen ist, dass sich der andere Inhalt auf der Seite nicht ungewollt verschiebt. Allerdings bleiben die Scrollbalken in der `overflow: scroll` immer Sichtbar auch wenn der Inhalt in eine Box passen würde.

Deshalb kann man auch angeben in welche Richtung eine Scrollbar gesetzt werden soll mit `overflow-y: scroll` und `overflow-x: scroll`. Das beste aus beiden Welten ist das setzen von `overflow: auto` hier übernimmt der Browser die Aufgabe Scrollbars zu setzen falls der Inhalt zu groß ist und andernfalls werden diese ausgeblendet.

## Wörter umbrechen

Overflow ist speziell bei Text ein Problem und eine Scrolleiste auch nicht immer die beste Lösung. Aus diesem Grund kann man auch mit `word-break` und `overflow-wrap` das Verhalten von Text in einer Box steuern.

```css
.box {
  width: 350px;
  height: 250px;
  overflow: hidden;
  word-break: break-work;
}
```
