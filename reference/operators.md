# Operators

## Arithmetic
JavaScript unterstüzt folgende Arithmetischen Operatoren: 

| Operator | Name | Purpose | Beispiel |
|:-----:|:-----:|:-----:|:-----:|
| `+` | Addition | Addiert zwei Werte | `1 + 2` |
| `-` | Subtraktion | Subtrahiert zwei Werte | `1 - 2` |
| `*` | Multiplikation | Multipliziert zwei Werte | `1 * 2` |
| `/` | Division | Dividiert zwei Werte | `1 / 2` |
| `%` | Modulo | Gibt den Rest einer Division zurück | `1 % 2` |
| `**` | Exponentiation | Potenziert einen Wert | `2 ** 3` |

> [!NOTE]
> Der Browser rechnet von links nach rechts (`operator precendence`). Klammern können verwendet werden, um die Reihenfolge der Berechnung zu ändern.

## Increment / Decrement

JavaScript unterstützt folgende Inkrement / Dekrement Operatoren: `++` und `--`

```js
let guessCount = 4;
// User makes an input
guessCount--;
```

```js
let iteration = 0;
// Increase counter each iteration
iteration++;
```

## Assignment Operators

| Operator | Name | Purpose | Beispiel |
|:-----:|:-----:|:-----:|:-----:|
| `+=` | Addition Assignment | Addiert einen Wert zu einer Variable hinzu | `x += y` |
| `-=` | Subtraction Assignment | Subtrahiert einen Wert von einer Variable | `x -= y` |
| `*=` | Multiplication Assignment | Multipliziert eine Variable mit einem Wert | `x *= y` |
| `/=` | Division Assignment | Dividiert eine Variable durch einen Wert | `x /= y` |

## Comparison Operators

| Operator | Name | Purpose | Beispiel |
|:-----:|:-----:|:-----:|:-----:|
| `===` | Strict Equality | Vergleicht zwei Werte auf `exakte` Gleichzeit. Hier wird kein Datentyp umgewandelt | `5 === "5"` -> false |
| `==` | Abstract Equality | Vergleicht zwei Werte und versucht eine Typ Umwandlung | `5 == "5"` -> true |
| `<` | Less Than | Vergleicht zwei Werte und gibt `true` zurück, wenn der linke Wert kleiner als der rechte Wert ist | `5 < 10` -> true |
| `>` | Greater Than | Vergleicht zwei Werte und gibt `true` zurück, wenn der linke Wert größer als der rechte Wert ist | `5 > 10` -> false |
| `<=` | Less Than or Equal | Vergleicht zwei Werte und gibt `true` zurück, wenn der linke Wert kleiner oder gleich dem rechten Wert ist | `5 <= 10` -> true |
| `>=` | Greater Than or Equal | Vergleicht zwei Werte und gibt `true` zurück, wenn der linke Wert größer oder gleich dem rechten Wert ist | `5 >= 10` -> false |
| `!==` | Strict Not Equal | Vergleicht zwei Werte und gibt `true` zurück, wenn die Werte nicht gleich sind | `5 !== 10` -> true |


> [!IMPORTANT]
> Verwende immer `===` in JavaScript anstelle von `==` damit JavaScript keine Typumwandlung durchführt.

## Logical Operators

| Operator | Name | Purpose | Beispiel |
|:-----:|:-----:|:-----:|:-----:|
| `&&` | Logical AND | Gibt `true` zurück, wenn beide Werte `true` sind | `true && true` -> true |
| `||` | Logical OR | Gibt `true` zurück, wenn einer der Werte `true` ist | `true || false` -> true |
| `!` | Logical NOT | Negiert einen Wert | `!true` -> false |

## Ternary Operator (?)

Ein spezieller logischer Operator in JavaScript `?` welcher eine Bedingung entgegen nimmt und diese auswertet. Wenn die Bedingung `true` ist wird der `left hand operator` ausgeführt andernfalls der `right hand operator`.

```js
console.log(true ? 1 : 2); // 1
console.log(false ? 1 : 2); // 2
```