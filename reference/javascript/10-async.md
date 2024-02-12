# Async JavaScript

In JavaScript gibt es zwei Konzepze für die Asynchrone Programmierung:

- assync callbacks
- promises

Async Callbacks sind dabei alle Funktionen die an eine andere Funktion übergeben wird (als Parameter) und zu einem späteren Zeitpunkt ausgeführt wird. Dabei sind diese Funktionen aber keine "echten" Asynchronen Operationen, denn der JavaScript Prozess wartet nicht tatsächlich.

Promises sind der moderne Ansatz, um Asynchronen Code in JavaScript zu realisieren. Eine Promise ist ein Objekt, welches die fertigstellte und fehlgeschlagene Operation der Asynchronen Ausführung beinhaltet. Auf das Promise Objekt kann dann "gewartet" werden bis die Asynchrone Operation ausgeführt wird.

Die Promise dient dabei als Proxy Objekt für Rückgabe Werte an andere Funktionen und zu irgendeinem beliebigen Zeitpunkt wird die Promise dann aufgelöst (resolved) oder abgelehnt (rejected). Dabei ist ein Promise Objekt in einem der Drei Zustände:

- `pending` der initiale Zustand, bevor die Operation abgeschlossen ist
- `fulfilled` die Asynchrone Operation wurde erfolgreich ausgeführt
- `rejected` die Asynchrone Operation ist fehlgeschlagen

## Promises

Eine Promise kann mit `new Promise()` erstellt werden. Dabei werden zwei Parameter an die Funktion übergeben: `resolve` und `reject`.

### Chains

Auf eine Promise kann von außen reagiert werden mit: `then, catch und finally`. Diese drei Methoden können als Chain an die Promise übergeben werden und werden ausgeführt wenn eine Promise einen neuen Zustand erreicht.

Ein `.then` erstellt dabei ein neues Promise Objekt auf das wieder reagiert werden kann mit jeweils einem Paramter für den `fulfilled` und `rejected` Zustand. `then` Chains werden auch ohne Callback Funktion ausgeführt und geben den Wert der vorherigen Promise weiter. Ein finales `catch` kann dabei alle Fehler abfangen, die in der Chain passieren.

### Beispiele

#### Bestehende Promise Funktion verwenden

```js
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fehler bei der Anfrage. Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

fetchData(apiUrl)
  .then((data) => {
    console.log("Daten erhalten:", data);
  })
  .catch((error) => {
    console.error("Fehler bei der Datenabfrage:", error);
  });
```

#### Eigene Promise Funktion erstellen

```js
function addNumbers(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject(new Error("Nur Zahlen erlaubt"));
    } else {
      resolve(a + b);
    }
  });
}

addNumbers(5, 10)
  .then((result) => {
    console.log("Ergebnis:", result);
  })
  .catch((error) => {
    console.error("Fehler:", error.message);
  });
```


## Async / Await Syntax

Das `async` Keyword vor einer Funktion kennzeichnet diese als `Asynchron` und gibt immer eine Promise zurück (Auch wenn der Rückgabe Wert in JavaScript nicht definiert werden kann).

```js
function test() {
  return "Hello World";
}
test(); // "Hello World"

async function test() {
  return "Hello World";
}
test(); // Promise
```

Innerhalb von einer `async` Funktion können `await` Aufrufe verwendet werden. Ein `await` ist ein Operator in JavaScript der auf eine Promise wartet bis diese in den Zustand `fulfilled` wechselt.

```js
async function fetchApi() {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(result.json);
}

fetchApi();
```

## References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
