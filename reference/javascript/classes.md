# Classes

Klassen in JavaScript sind spezielle Funktionen und wurden mit dem ES6 Standard eingeführt. Eine Klasse kann entweder als Ausdruck oder als Deklaration definiert werden:

```js
class Car {
  constructor(model) {
    this.model = model;
  }
}

const Car = class Car2 {
  constructor(model) {
    this.model = model;
  }
};
```

Klassen orientieren sich dabei stark an die Definition von [Funktionen](./functions.md) und können auch als Anonyme Klassen definiert werden. Ein Unterschied zu den Funktionen ist, dass Klassen erst definiert werden müssen bevor diese verwendet werden können (Hoisted siehe [^1]).

Innerhalb von einer Klasse können Methoden, ein Konstruktor und Properties definiert werden. Der Konstruktor ist dabei eine spezielle Methode die beim Erstellen einer Instanz aufgerufen wird. Klassen können auch vererbt werden und über das `super` Keyword wird der Konstruktor der Superklasse aufgerufen.

```js
class Car {
  constructor(model) {
    this.model = model;
  }

  getModel() {
    return this.model;
  }
}

const mercedes = new Car("Mercedes");
console.log(mercedes.getModel()); // Mercedes
```

Klassen Felder (Hier `model`) sind vergleichbar mit den Properties von Objekten (Und keine Variablen!). Aus diesem Grund müssen wir hier auch kein `let` oder `const` verwenden. Außerdem gibt es in JavaScript kein `public` oder `private`. Felder können dabei entweder mit einem Default Wert initialisiert werden oder nur über den Konstruktor. Nicht gesetzte Felder werden `undefined`. Private Felder in JavaScript werden mit `#` deklariert:

```js
class Car {
  #model;

  constructor(model) {
    this.#model = model;
  }

  getModel() {
    return this.#model;
  }
}
```

Klassen können auch vererbt werden. Dazu wird das `extends` Keyword verwendet. Die Superklasse wird dabei mit `super` aufgerufen:

```js
class Vehicle {
  constructor(model) {
    this.model = model;
  }

  getModel() {
    return this.model;
  }
}

class Car extends Vehicle {
  constructor(model, color) {
    super(model);
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}
```

## References

[^1]: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
