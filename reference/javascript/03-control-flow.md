# Control Flow

Wie in jeder Programmiersprache gibt es auch in JavaScript die Möglichkeit den Programmfluss zu ändern und auf Entscheidungen zu reagieren. Die einfachste Art sind "Conditional Statements" (Bedingte Anweisungen), die es erlauben, Code nur dann auszuführen, wenn eine bestimmte Bedingung erfüllt ist.

## If ... else

- In JavaScript gibt es `if`, `else` und `if else` für bedingte Anweisungen.
- Die Bedingung kann dabei ein logischer Operator sein (Siehe [Operators](operators.md))

```js
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}
```

```js
const price = 800;
const dicount = 200;
let canPurchase = false;

if (price - discount <= 600) {
  canPurchase = true;
} else {
  canPurchase = false;
}

console.log(canPurchase); // true
```

- `else` ist ein optionaler Block und kann auch weggelassen werden.

```js
if (condition) {
  // Code to execute if condition is true
}

// complete other stuff
```

- Bedingungen können auch verknüpft werden d.h. an ein bestehendes if kann im else teil eine weitere Bedingung angehängt werden.

```js
if (conditionA) {
  // Result A
} else if (conditionB) {
  // Result B
} else {
  // Result C
}
```

- Jede Bedingung wird immer in einen boolschen Wert umgewandelt. Das bedeutet, dass besondere Werte und Datentypen wie `0`, `""`, `null`, `undefined`, `NaN` und `false` als `false` ausgewertet werden. Alle anderen Werte werden als `true` ausgewertet.

## Switch Statement

- Mehrere Bedingte Ausdrücke können auch mit einem `switch` Statement abgefragt werden.
- `switch` hat einen oder `n case` Abschnitt und einen optionalen `default` Abschnitt
- `case` Abschnitte werden mit break beendet

```js
let price = 2000;
switch (price) {
  case 1000:
    console.log("Price is 1000");
    break;
  case 2000:
    console.log("Price is 2000");
    break;
  default:
    console.log("Price is not 1000 or 2000");
}
```

## Loops

Schleifen erlauben es uns Ausdrücke wiederholt auszuführen. JavaScript unterstützt die gängigen Schleifen Konstruke: `for`, `do while` und `while`. Schleifen können jederzweit mit dem `break` keyword abgebrochen werden. Eine aktuelle Iteration kann man mit `continue` überspringen.

In JavaScript gibt es noch zwei besondere loops: `for ... in` und `for ... of`

### `for`

- `for` loops wiederholen sich so lange bis eine Bedingung nicht mehr erfüllt ist. Die Wiederholungen finden dabei in einem bestimmten Bereich statt.

```js
for (begin; condition; step) {
  // repeat until condition is false
}
```

```js
for (let i = 0; i <= 100; i++) {
  console.log(i);
}
```

### `do while`

- Wiederholen sich bis eine Bedingung nicht mehr erfüllt ist. Das besondere an der `do while` die erste Iteration wird immer ausgeführt

```js
do statement;
while (condition);
```

```js
let i = =,
do {
  console.log(i);
  i++;
} while (i <= 100);
```

### `while`

- Wiederholt sich solange bis eine Bedingung nicht mehr erfüllt ist. Bedingung wird vor dem ersten durchlauf geprüft

```js
while (condition) {}
```

```js
let i = 0;
while (i <= 100) {
  console.log(i);
  i++;
}
```

### `for in`

- Die `for in` loop kann über alle Properties innerhalb von einem Projekt loopen

```js
const phone = {
  manufacturer: "Apple",
  model: "iPhone",
  storage: 128,
  isReleased: false,
};

for (const key in phone) {
  console.log(key); // manufacturer, model, storage, isReleased
}
```

### `for of`

- Die `for of` loop kann über alle iterierbaren Objekten loopen (String, Array, Map, Set, etc.)

```js
const array = [1, 2, 3, 4, 5];

for (const number of array) {
  console.log(number); // 1, 2, 3, 4, 5
}
```
