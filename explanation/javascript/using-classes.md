# About: Using Classes in JS

JavaScript-Klassen wirken auf den ersten Moment wie normale Klassen aus OOP-Sprachen wie bspw. Java oder C#. JavaScript ist jedoch eine prototypenbasierte Sprache. Was bedeutet das?

Das Verhalten von Objekten in JavaScript wird über die Objekteigenschaften und die Prototypeneigenschaften festgelegt. Mit Klassen in JavaScript werden "Methoden" eingeführt, die eher einer klassischen objektorientierten Programmierung entsprechen. Wir können also Objekthierarchien und Vererbung einsetzen.

Eine JavaScript-Klasse ist aus diesem Grund auch nur eine Abstraktion des prototypenbasierten Vererbungsmechanismus (und ein wunderschönes Beispiel, um die Mächtigkeit von prototypenbasierten Sprachen zu illustrieren, denn eine Klasse baut auf demselben Mechanismus im Hintergrund auf). In anderen Programmiersprachen sind Klassen und Konstruktoren klar von Objekten und Instanzen getrennt. In JavaScript hingegen kann sogar eine Funktion als Konstruktor eingesetzt werden:

```js
function Car(model, color) {
  this.model = model;
  this.color = color;

  this.getModel = function () {
    return this.model;
  };
}

const mercedes = new Car("Mercedes", "red");
console.log(mercedes.getModel()); // Mercedes
```

Wir haben also eine Funktion, die ein neues Auto-Objekt definiert und Eigenschaften zuweist. Eine Klasse in JavaScript macht genau das Gleiche. Wir können Objekte über das `new`-Keyword erzeugen. Dabei haben Klassen (wie Objekte) bestimmte Eigenschaften (entweder Daten oder Methoden), die definiert werden können. Wir leiten also folgende Definition für eine Klasse ab:

- Konstruktor
- Instanzmethoden und -felder
- Statische Methoden und -felder

Das obige Beispiel sieht als Klasse also so aus:

```js
class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }

  getModel() {
    return this.model;
  }
}
```

## Konstruktor

Klassen werden in den meisten Fällen als "Factory" eingesetzt, um neue Objekte zu erzeugen. Wenn wir ein weiteres Auto erstellen möchten, erwarten wir von der Auto-Klasse, dass sie uns ein neues Auto-Objekt zurückgibt. Dieses Auto können wir dann manipulieren, beispielsweise die Farbe verändern.

```js
class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }

  getModel() {
    return this.model;
  }

  setColor(color) {
    this.color = color;
  }
}

const vw = new Car("VW", "blue");
vw.setColor("red");
console.log(vw.color); // red
```

Wir haben also eine neue Instanz eines Autos erstellt. Das neue Auto hat bestimmte Eigenschaften sowie Methoden, die wir verwenden können, um das Auto zu manipulieren. Jedes Mal, wenn wir ein neues Auto über `new` erstellen, bekommen wir auch eine neue Instanz. Der `this` Operator zeigt dabei auf die Klasseninstanz. Wichtig: Innerhalb eines Konstruktors sollte deshalb kein `return` verwendet werden, da sonst die `this` Referenz überschrieben wird.

## Extends und Vererbung

Bis jetzt hätten wir alle Beispiele auch einfach als Funktionen bzw. Objekte mit entsprechenden Properties definieren können. Klassen in JavaScript unterstützen aber auch klassische Vererbung und Hierarchien. Oder anders ausgedrückt: Eine Klasse kann das Verhalten von einer anderen Klasse bekommen. In unserem Beispiel möchten wir Fahrzeuge in bestimmte Kategorien einteilen:

```js
class SUV extends Car {
  constructor(model, color) {
    super(model, color);
  }

  fitsInCities() {
    return false;
  }
}
```

Das `extends` Keyword erweitert die eigene Klasse um alle Public Properties der Superklasse. Das `super` Keyword ruft dabei den Konstruktor von `car` auf. Ohne `super` können wir `extends` nicht verwenden.

```js
const suv = new SUV("Audi", "black");
console.log(suv.getModel()); // Audi
```

## Warum überhaupt Klassen?

Wann sollte eine Klasse eingesetzt werden und wann klassische Funktionen in JavaScript? Es kommt darauf an. Klassen bieten zum einen den Vorteil, unsere Software einfacher zu organisieren. Außerdem können viele, die zuvor mit einer objektorientierten Sprache das Programmieren gelernt haben, mehr damit anfangen als mit den prototypenbasierten Mechanismen. Aber es gibt auch gute Gründe, keine Klassen einzusetzen.

Ein einfaches Beispiel [^1]

```js
function incrementDay(date) {
  return date.setDate(date.getDate() + 1);
}
const date = new Date(); // 2019-06-19
const newDay = incrementDay(date);
console.log(newDay); // 2019-06-20
// The old date is modified as well!?
console.log(date); // 2019-06-20
```

Wieso wird das alte Datum auch modifiziert? Weil Objekte immer mit ihrer Referenz übergeben werden. Wir haben also einen Seiteneffekt. Diese Art von Seiteneffekten ist aber nicht JavaScript-spezifisch, sondern Mutability ist ein Kernkonzept von OOP-Sprachen. Eine Operation, die also "einfach" aussieht, verursacht Seiteneffekte, die meistens erst zur Laufzeit erkannt werden.

Klassen werden auch eingesetzt, um Implementierungen wiederzuverwenden. Als Ergebnis haben wir dann häufig einen größeren Baum an Klassen, die unterschiedliche Funktionalität erben. Das Ziel dabei ist es, Verhalten von einer Klasse auch in einer anderen Klasse zu verwenden. In Java wird ein solches Verhalten oft mit einem Interface abgebildet. In JavaScript gibt es dafür Mixins. Aber das Problem der Unübersichtlichkeit bleibt bestehen.

Wann sollte also eine Klasse eingesetzt werden? Immer dann, wenn ein Objekt mit seinen eigenen Daten und Methoden erstellt werden soll. Klassen sollten dabei immer viel Verhalten nach außen geben, d.h. wenn eine Klasse nur aus ein paar Properties und einer Funktion besteht, ist ein Objekt bzw. eine Funktion häufig die bessere Wahl. Wenn man jedoch an Utility-Objekte denkt (siehe oben Date), bietet sich eine Klasse an, um alle Funktionen für die Manipulation des Objekts zu kapseln.

Eine gute Veranschaulichung, wann eine Klasse eingesetzt wird, ist beispielsweise das Vermeiden von einem "shallow-module" [^2] und die bevorzugte Variante von einem "deep-module".

## References

[^1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes#why_classes
[^2]: Aus dem Buch `A Philosophy of Software Design by John Ousterhout`
