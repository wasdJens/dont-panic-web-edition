# Events

Events sind ein grundlegender Bestandteil des Browsers. Wenn der Benutzer auf etwas klickt oder etwas in eine Eingabe eingibt, wird ein Ereignis ausgelöst, auf das mit JavaScript reagiert werden kann. Um auf Events zu reagieren gibt es spezielle Event Handler. Ein Event Handler ist eine JavaScript Funktion welche ausgeführt wird wenn das entsprechende Event auf einem Element ausgelöst wird.

```html
<button>Submit</button>
```

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  // Do something here
});
```

## Event Listeners

JavaScript bietet mit der `addEventListener` Methode eine Möglichkeit auf Events zu reagieren. Die Methode nimmt zwei Argumente entgegen. Das erste Argument ist der Name des Events auf das reagiert werden soll. Das zweite Argument ist eine Funktion welche ausgeführt wird wenn das Event ausgelöst wird.

Im vorherigen Beispiel wird auf das `click` Event des Buttons reagiert. Wenn der Benutzer auf den Button klickt wird die Funktion ausgeführt. Das zweite Argument ist in diesem Fall eine Pfeilfunktion. Die `handle` Funktion kann auch ausgelagert werden und so wiederverwendet werden.

Wenn auf ein Event nicht mehr gehört werden soll gibt es die `removeEventListener` Methode.

```js
btn.removeEventListener("click", handle);
```

Eine Elegante Methode für das Entfernen von Event Handlers ist die Verwendung von `AbortSignal`.

```js
const controller = new AbortController();

btn.addEventListener(
  "click",
  () => {
    // Do something here
  },
  { signal: controller.signal }
);
```

Wenn der Event Handler dann entfernt werden soll kann der `controller` verwendet werden.

```js
controller.abort();
```

Auf ein Element könnten auch mehrere Event Listener registriert werden. Auf unserem Button können auch `mouseover` events und co definiert werden. Es kann auch auf das selbe Event gehört werden nur mit einer anderen `handler` Funktion.

```js
btn.addEventListener("click", () => {
  // Do something here
});

btn.addEventListener("click", () => {
  // Do something else here
});

bt.addEventListerner("mouseover", () => {
  // Do something here
});
```

## Event Handler Properties

Objekte (z.B. Buttons, Inputs etc.) welche Events nach außen geben haben spezielle event properties welche bei eintreten von einem Event die Handler Funktion aufrufen.

```js
const btn = document.querySelector("button");

btn.onClick = () => {
  // Do something here
};
```

Ein Unterschied ggü. Event Handlers auf ein `on` Event kann nur einmalig reagiert werden mit einem Handler. Mehrfache Handler für das selbe Click Event sind hier nicht möglich.

## Event Objects

Für das Reagieren auf Texteingaben muss die Event Handler Funktion wissen welche Eingabe der Benutzer gemacht hat. Jeder Event Handler bekommt automatisch ein `event object` als parameter übergeben.

```js
const input = document.querySelector("input");

input.addEventListener("input", (event) => {
  console.log(event.target.value);
});
```

## Events außerhalb vom Browser

Event Handlers und Listeners ist ein fundamentales Konzept auch außerhalb vom Browser in JavaScript Runtimes (z.B. NodeJS). Die Sematik ist die selber allerdings sind die Funktionen für das Registrieren und Verarbeiten von Events anders. In NodeJS bspw. gibt es die `on` Methode.

```js
import { request } from "http";

const options = {
  host: "jsonplaceholder.typicode.com",
  path: "/posts",
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
  },
};

const data = {
  title: "Foo",
  body: "bar",
  userId: 1,
};

const req = request(options, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("close", () => {
    console.log(JSON.parse(data));
  });
});

req.write(JSON.stringify(data));
req.end();
```
