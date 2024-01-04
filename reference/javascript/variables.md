# Variablen

Eine Variable ist ein Container für einen Wert, wie z.B. das Ergebnis einer Rechenoperation oder ein Text, den der Benutzer eingegeben hat. Variablen sind ein benannter Speicher in JavaScript und können einen Wert speichern, auf den später zugegriffen werden kann.

Variablen werden mit einen der folgenden keywords in JavaScript deklariert:

```js
let userInput;

const mwst = 0.19;

var sum;
```

> [!CAUTION]
> Historisch bedingt gibt es das keyword `var` noch in JavaScript. Es sollte aber nicht mehr verwendet werden, da es zu unerwarteten Verhalten führen kann. Stattdessen sollte immer `let` oder `const` verwendet werden. Siehe [A note about var](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#a_note_about_var)

Eine Variable kann, muss aber nicht, einen Wert zugewiesen haben. Ein Wert kann mit `=` einer Variablen zugewiesen werden.

```js
let userInput;

userInput = "Hello World!";

const mwst = 0.19;
```

Variablen können beliebig benannt werden. Es gibt jedoch folgende Aussnahmen:

- Variablennamen dürfen nicht mit einer Zahl beginnen
- Variablen sind Case Sensitive
- [Reserverd Keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)

## Unterschied zwischen `let` und `const`

Variablen, die mit `let` deklariert werden, können ihren Wert ändern. Variablen, die mit `const` deklariert werden, können ihren Wert nicht ändern.

```js
const userInput = "Hello World!";
userInput = "Hello World!"; // TypeError: Assignment to constant variable.
```

## Datentypen in JavaScript

JavaScript ist eine dynamisch typisierte Sprache. Das bedeutet, dass Variablen nicht mit einem Datentyp deklariert werden müssen. Der Datentyp wird automatisch zur Laufzeit ermittelt.

Jeder Wert in JavaScript ist immer einem Datentyp zugeordnet. Der Datentyp kann sich aber zur Laufzeit ändern. Das folgende Beispiel veranschaulicht die dynamische Typisierung von JavaScript.

```js
let userInput = "Foo"; // Datentyp: string
userInput = 42; // Datentyp: number
```

JavaScript hat insgesamt 8 Datentypen:

### Number

- In JavaScript können Zahlen Integer und Float Werte sein.
- Es gibt keine spezielle Unterscheidung zwischen Integer und Float Werten.

```js
let number = 1337;
let pi = 3.14159265359;
```

- Ein besonderer Zahlenwert ist der BigInt (Zahlen > 2^53 -1). BigInts werden mit einem `n` am Ende der Zahl gekennzeichnet.

```js
let bigInt = 1234567890123456789012345678901234567890n;
```

### String

- Strings in JavaScript können entweder mit `"` oder ``` deklariert werden.
- Strings beinhalten jede beliebige Zeichenkette, wie z.B. Text, Zahlen, Sonderzeichen, etc.

```js
const endpoint = "https://api.example.com";
const version = "v1";
```

- Strings können mit `+` konkateniert werden.

```js
const h = "Hello";
const w = "World";
console.log(h + " " + w); // Hello World
```

- Strings können auch als Template Strings definiert werden.
- Ein Template String kann direkt Variablen enthalten, die mit `${}` umschlossen werden.

```js
const number = 800;
const price = `The price of the new phone is ${number}`;
console.log(price); // The price of the new phone is 800
```

- Template Strings können auch Funktionen ausführen

```js
const phone = 800;
const discount = 25;
const price = `The price of the new phone is ${
  phone - (phone / 100) * discount
}`;
console.log(price); // The price of the new phone is 600
```

### Boolean

- Boolean Werte sind logische Datentypen die nur zwei Zustände annehmen kann: `true` oder `false`.

```js
const confirmed = false;
const approved = true;
```

### Null & Undefined

- In JavaScript gibt es zwei besondere Datentypen: `null` und `undefined`
- `null` ist ein expliziter Wert, der angibt, dass eine Variable keinen Wert hat. (Gesprochen: nothing, empty oder wert unbekannt)
- `undefined` ist ein impliziter Wert, der angibt, dass eine Variable keinen Wert hat. (Gesprochen: Dieser Variable wurde noch kein Wert zugewiesen.)

```js
let username = null; // Variable hat einen Wert aber der User hat noch keine Eingabe gemacht.

let password; // Variable hat keinen Wert und der User hat noch keine Eingabe gemacht.
```

- `null` kann speziell verwendet werden, um eine Variable als `leer` oder `unbekannt` zu deklarieren.
- `undefined` hingegen symbolisiert, dass eine Variable gar keinen Wert hat.

### Object

- Objekte in JavaScript sind der wichtigste Datentyp
- Objekte können verschiedene Properties beinhalten
- Jedes Property hat einen Wert
- Ein Property ist dann der Schlüssel, um auf den Wert zuzugreifen
- Objekte werden mit `{}` deklariert
- Objekte können Variablen zugeordnert werden

```js
const user = {
  name: "Jens",
  age: 27,
  isAdmin: true,
};

const phone = {
  manufacturer: "Apple",
  model: "iPhone",
  storage: 128,
  isReleased: false,
};
```

- Objekte können auch leer definiert werden `const empty = {}`;
- Objekte haben einen `key` und einen dazugehörigen wert: `<key>: <value>`
- Properties (Also `keys`) können aus dem Objekt mittels `.` (Dot Notation) gelesen werden

```js
const phone = {
  manufacturer: "Apple",
  model: "iPhone",
  storage: 128,
  isReleased: false,
};

console.log(phone.manufacturer); // Apple
```

- Properties können jeden Datentyp beinhalten
- Neue Werte können mit der `.` Notation hinzugefügt werden

```js
const phone = {
  manufacturer: "Apple",
  model: "iPhone",
  storage: 128,
  isReleased: false,
};
phone.price = 1600;
console.log(phone); // { manufacturer: 'Apple', model: 'iPhone', storage: 128, isReleased: false, price: 1600 }
```

- Properties löschen kann man mit dem `delete` keyword

```js
const phone = {
  manufacturer: "Apple",
  model: "iPhone",
  storage: 128,
  isReleased: false,
};
delete phone.isReleased;
console.log(phone); // { manufacturer: 'Apple', model: 'iPhone', storage: 128 }
```

- Properties verändern passiert mit der `.` Notation

```js
const phone = {
  manufacturer: "Apple",
  model: "iPhone",
  storage: 128,
  isReleased: false,
};
phone.isReleased = true;
console.log(phone); // { manufacturer: 'Apple', model: 'iPhone', storage: 128, isReleased: true }
```

- Properties (also der key) kann auch ein `multi-word` sein:

```js
const factory = {
  "construction site": "Heidenheim an der Brenz",
};
```

- `multi-word` properties können dann nur mit `[]` (Sqaure Bracket Notation) gelesen werden:

```js
const factory = {
  "construction site": "Heidenheim an der Brenz",
};
console.log(factory["construction site"]); // Heidenheim an der Brenz
```

- Die Square Bracket Notation kann auch neue properties hinzufügen:

```js
const fruit = "apple";
const basket = {
  [fruit]: 5,
};
console.log(basket); // { apple: 5 }
```

### `typeof` operator

JavaScript ist dynamisch typisiert dadurch benötigt man einen speziellen Operator um herauszufinden welchen Datentyp eine Variable aktuell hat:

```js
const price = 25;
console.log(typeof price); // number
const name = "Jens";
console.log(typeof name); // string
const userInput = null;
console.log(typeof userInput); // object
```

> [!WARNING] > `typeof null` gibt `object` zurück. Das ist ein bekannter Bug in JavaScript. Siehe [typeof null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#null)

## `const` vs. `let`

Eine Variable sollte immer mit `const` deklariert werden. `const` zeigt dem Leser des Codes direkt, dass sich der Wert der Variable nicht mehr ändern wird. Besonders in einer dynamisch typisierten Sprachen lassen sich so Fehler vermeiden. `let` wird nur dann verwendet wenn man sich sicher ist, dass sich der Wert der Variable ändern wird.

> Use `const` when you can, and use `let` when you have to.
