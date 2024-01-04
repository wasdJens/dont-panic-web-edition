# Functions

Funktionen sind das wichtigste Konzept in jeder Programmiersprache. Funktionen erlauben es uns Code wiederzuverwenden und auszulagern. Eine Funktion kann dann von jedem anderen Programmteil aufgerufen und ausgeführt werden. Funktionen können auch wiederum andere Funktionen aufrufen.

In JavaScript sind Funktionen `first-class-citizens` und aufgrund der multiparadigmatischen Sprache von JavaScript kann man in JavaScript auch Funktional Programmieren (Als Alternative zu Objekt Orientierter Programmierung).

## Funktionen vs. Methoden

Funktionen welche Teil von einem Objekt sind werden als Methoden bezeichnet. Alle anderen Funktionen in JavaScript sind eigenständige Code-Blockanweisungen die genau eine Aufgabe ausführen und dadurch immer wieder verwendet werden können. Eine Funktion kann irgendwo im Programm definiert werden und dann an einer beliebigen Stelle im Programm aufgerufen werden.

Eine Methode hingegen ist eine Funktion die einem Objekt zugeordnet ist. Man verwendet dieses Konzept wenn man Operationen anbieten möchtet welche Werte innerhalb eines Objektes verändern.

```js
function greet(name) {
  console.log(`Hello ${name}`);
}

console.log(greet("Jens")); // Hello Jens
```

```js
const person = {
  name: "Jens",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

console.log(person.greet()); // Hello Jens
```

## Definition

Eine Funktion in JavaScript kann mit dem `function` keyword deklariert werden. An eine Funktion können beliebige Parameter übergeben werden. Funktionen in JavaScript sind im Hintergrund Objekte. Damit in JavaScript eine Funktion ausgeführt wird muss diese "aufgerufen" werden (invoking functions).

Das Aufrufen von einer Funktion wird über den Namen der Funktion gefolgt von `()` gemacht.

```js
function square(number) {
  return number * number;
}
console.log(square(5)); // 25
```

Funktionen in JavaScript geben immer `undefined` zurück. Damit eine Funktion einen Wert zurückgibt muss das `return` keyword verwendet werden.

## Parameters

Eine Funktion kann Parameter (alternativ: arguments, properties oder attributes) entgegen nehmen. Parameter werden in der `()` von der Funktion deklaration beschrieben.

```js
const randomNumber = Math.random();

const originalText = "I am a sandwich";
const newText = originalText.replace("sandwich", "hamburger");
```

Parameter können auch Default Werte annehmen falls kein Wert übergeben wird bzw. der Wert optional ist. Nicht übergebene Parameter die auch keinen Default Wert haben sind `undefined`.

```js
function greet(name = "World") {
  console.log(`Hello ${name}`);
}

console.log(greet()); // Hello World
console.log(greet("Jens")); // Hello Jens
```

Primitive Parameter werden `pass by value` an die Funktion übergeben. Das bedeutet das die Funktion eine Kopie des Wertes bekommt und nicht den Wert selbst.

```js
const number = 5;

function addOne(number) {
  number += 1;
  return number;
}
console.log(addOne(number)); // 6
console.log(number); // 5
```

Nicht Primitive Parameter werden `pass by reference` an die Funktion übergeben. Das bedeutet das die Funktion eine Referenz auf den Wert bekommt und nicht den Wert selbst. Wenn Sie also den Wert von diesem Parameter in der Funktion verändern wird auch der Wert außerhalb der Funktion verändert.

```js
const person = {
  name: "Jens",
};

function changeName(person) {
  person.name = "Max";
  return person;
}

console.log(changeName(person)); // { name: 'Max' }
console.log(person); // { name: 'Max' } !CAUTION!
```

> [!CAUTION]
> Das Konzept von `pass by reference` ist eines der häufigsten Probleme wenn man mit JavaScript und Objekten arbeitet. Wenn man ein Objekt an eine Funktion übergibt sollte immer sichergestellt werden, dass Seiteneffekte explizit gewünscht ist oder eine neue Referenz für das Objekt erstellt wird. Bspw. mit `Object.assign()` oder dem Spread Operator `...`.

## Anonyme Funktionen

JavaScript erlaubt es Funktionen ohne Namen zu definieren. Diese Funktionen werden als `anonyme Funktionen` bezeichnet. Anonyme Funktionen können direkt an eine Variable zugewiesen werden.

```js
const square = function(number) {
  return number * number;
}

console.log(sqaure(5))); // 25
```

Funktionen können auch komplett ohne Namen und Variable deklariert werden:

```js
(function () {
  console.log("Hello World");
});
```

Diese Art der Funktion werden häufig als `immediately invoked function expressions` verwendet also Funktionen welche sofort ausgeführt werden. (Und nicht erst aufgerufen werden müssen)

## Funktionen als Parameter

Funktionen in JavaScript können auch als Parameter an andere Funktionen übergeben werden. Dieses Konzept erlaubt es uns Programme in einem funktionalen Stil zu entwerfen. Wir können also eine komplexe Funktion an eine andere Funktion übergeben welche dann die komplexe Funktion wiederverwenden kann.

Ein häufiges Beispiel in JavaScript wo man dieses Pattern benötigt ist es auf Events zu reagieren. Angenommen wir haben eine Funktion welche auf einen Button klick reagieren soll. Wir können diese Funktion dann an die `addEventListener` Funktion übergeben welche dann die Funktion ausführt wenn der Button geklickt wird.

```js
function handleClick() {
  console.log("Button clicked");
}

button.addEventListener("click", handleClick);
```

Dadurch kann die Button Funktion eigenen Code ausführen und muss nicht wissen was die `handleClick` Funktion macht. Die `handleClick` kann auch als anonyme Funktion direkt übergeben werden:

```js
button.addEventListener("click", function () {
  console.log("Button clicked");
});
```

Eine weitere Möglichkeit Funktionen in JavaScript zu definieren sind Arrow Functions

## Arrow Functions

Eine Funktion in JavaScript kann auch als `arrow function` deklariert werden. Eine Arrow function gibt implizit direkt einen Rückgabewert zurück.

```js
const sum = (a, b) => a + b;
```

Können aber auch mit einem Code Block und eigenem `return` keyword deklariert werden:

```js
const sum = (a, b) => {
  return a + b;
};
```

Arrow Functions können auch an andere Funktionen übergeben werden:

```js
button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

Arrow Functions haben allerdings gegenüber normalen Funktionen folgende Einschränkungen: Kein Binding auf `this` oder `super`. Sollten nicht als Methode in Objekten deklariert werden. Können nicht als Konstruktor verwendet werden.
