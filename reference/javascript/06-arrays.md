# Arrays

Arrays bieten uns die Möglichkeit Daten in einer strukturierten Liste zu speichern. Der Vorteil von Arrays gegenüber Objekten ist die Möglichkeit Daten an beliebiger Stelle zu modifizieren und über alle Daten zu iterieren.

```js
const cars = ["Mercedes", "Audi", "BMW", "Volkswagen"];
```

Arrays besitzen darüber hinaus spezielle Methoden für das modifizieren und "durchlaufen" ihrer Daten. Arrays sind nicht typisiert und haben in JavaScript keine feste Größe.

```js
const array = ["Hallo Welt", 25, { name: "Jens", age: "27" }, false];
console.log(array); // ['Hallo Welt', 25, {name: 'Jens', age: '27'}, false]
```

Auf Element innerhalb eines Arrays kann mittels `property` Selektor zugegriffen werden

```js
const cars = ["Mercedes", "Audi", "BMW", "Volkswagen"];
console.log(cars[2]); // BMW

console.log(cars["length"]); // 4
```

Arrays in JavaScript sind im Hintergrund auch nur Objekte d.h. auf Objekt Properties wie z.B. die Länge kann so auch zugegriffen werden. Alternativ funktioniert für Array properties auch die `.` Notation

```js
const cars = ["Mercedes", "Audi", "BMW", "Volkswagen"];
console.log(cars.length); // 4
```

## Array Modifikationen

- Für das Hinzufügen von einem neuen Element an das Ende von einem Array kann die `push` Methode verwendet werden
- Für das Löschen des letzten Elements in einem Array kann die `pop` Methode verwendet werden
- Das erste Element in einem Array kann entfernt und wird automatisch zurückgegeben mittels `shift`
- Für das Hinzufügen von einem Element an den Anfang von einem Array kann die `unshift` Methode verwendet werden

```js
const cars = ["Mercedes"];
cars.push("Audi");
console.log(cars); // ['Mercedes', 'Audi']

cars.pop();
console.log(cars); // ['Mercedes']
```

```js
const cars = ["Mercedes", "Audi", "BMW", "Volkswagen"];
const car = cars.shift();
console.log(car); // Mercedes
console.log(cars); // ['Audi', 'BMW', 'Volkswagen']
```

```js
const cars = ["Mercedes"];
cars.unshift("Audi");
console.log(cars); // ['Audi', 'Mercedes']
```

Um über alle Element in einem Array zu iterieren können wir die klassische `for` loop verwenden oder die spezielle `for of` loop welche JavaScript anbietet

```js
const cars = ["Mercedes", "Audi", "BMW", "Volkswagen"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
```

```js
const cars = ["Mercedes", "Audi", "BMW", "Volkswagen"];
for (const car of cars) {
  console.log(car);
}
```

Eine spezielle Iteration über alle Elemente ist die `forEach` Methode die auf einem Array Objekt definiert ist. Diese Methode nimmt eine Funktion entgegen die für jedes Element im Array aufgerufen wird.

```js
const cars = ["Mercedes", "Audi", "BMW", "Volkswagen"];
cars.forEach((car) => {
  console.log(car);
});
```

## Array Methoden

Arrays in JavaScript bieten eine Vielzahl an Methoden für das Modifzieren von ihrem Inhalt. Hier die wichtigsten einmal aufgelistet:

- `concact` - Fügt zwei Arrays zusammen
- `slice` - Erstellt eine Kopie (Optional: Von Start bis End Index)
- `splice` - Enternt ein Element (Optional: Von Start bis End, Optional: Ersetzt mit einem anderen Element)
- `reverse` - Dreht den Inhalt um
- `sort` - Sortiert das Array anhand einer übergebenen Sortierfunktion
- `indexOf` - Sucht und gibt den Index von einem Element zurück
- `join` - Gibt einen String zurück mit allen Array Elementen (Optional: Seperator - Default alle strings mit `,` getrennt)
- `includes` - Überprüft ob ein übergebener Wert existiert im Array
- `find` - Gibt das erste Element zurück das die Callback Funktion erfüllt

Arrays bieten darüber hinaus noch Methoden an die eine Callback Funktion entgegen nehmen. Eine Callback Funktion wird als Parameter übergeben die dann für jedes Element im Array aufgerufen wird (Auch bekannt als `higher-order functions`). Diese Methoden nehmen das bestehende Array, führen die Callback Funktion auf jedes Element aus und geben ein neues Array zurück mit allen Elementen.

- `map` - Callback Funktion wird auf jedes Element angewandt (Alle Element werden zurückgegeben)

```js
const roles = ["create", "read", "update", "delete"];
const mappedRoles = roles.map((role) => role.toUpperCase());
console.log(mappedRoles); // ['CREATE', 'READ', 'UPDATE', 'DELETE']
```

- `filter` - Jedes Element das `true` für die Callback Funktion liefert wird zurückgegeben

```js
const cars = ["Mercedes", "Audi", "BMW", "Volkswagen", "Porsche"];
const vwGroup = cars.filter(
  (car) => car === "Volkswagen" || car === "Audi" || car === "Porsche"
);
console.log(vwGroup); // ['Audi', 'Volkswagen', 'Porsche']
```

- `every` - Gibt `true` zurück wenn die Callback Funktion für alle Elemente `true` ist

```js
const numbers = [1, 2, "3", 4, "5"];
const onlyNumbers = numbers.every((value) => typeof value === "number");
console.log(onlyNumbers); // false
```

- `some` - Gibt `true` zurück wenn die Callback Funktion für mindestens ein Element `true` ist

```js
const cars = ["Mercedes", "Audi", "BMW", "Volkswagen", "Porsche"];
const hasAudi = cars.some((car) => car === "Audi");
console.log(hasAudi); // true
```
