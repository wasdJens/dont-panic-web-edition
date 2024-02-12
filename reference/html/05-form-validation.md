# Form Validation

Client Seitige Form Validation kann Kommunikation mit dem Server vorab sparen (User kann nur die Daten schicken die der Server auf jeden Fall entgegen nehmen sollte). 

> [!CAUTION]
> Alle Daten die ein Server entgegen nimmt sollten IMMER auf Server Seite validiert werden. Client Seitige Validierung stellt nur auf der eigenen Webseite die Daten sicher aber über einen HTTP Request oder modifizierte Seite können alle möglichen Daten geschickt werden.

Unter Form Validation zählen u.a:

- Ob eine Eingabe required ist
- Ob eine Eingabe ein bestimmtes Format benötigt (bspw. eine Telefonnummer)
- Ob eine Eingabe eine bestimmte Maximal Länge hat
- Ob eine Eingabe bestimmte Zeichen enthalten darf (bspw. keine Sonderzeichen)

Wenn die Client Seitige Validierung einen Fehler feststellt können z.B. Buttons für das Übermitteln an den Server deaktiviert werden bis alle Fehler behoben sind. Sie können auch den User helfen die richtigen Eingaben zu machen (bspw. mit Hints, Tooltips etc.).

Form Validierungen können dabei auf zwei Arten passieren:

- Built-in Form Validierung welche HTML Features nutzt und kein JavaScript benötigt.
- JavaScript Form Validierung welche JavaScript nutzt um die Form zu validieren.

Wenn möglich sollten immer Built-In Validatoren ggü. JavaScript vorgezogen werden (Aufgrund der Performance Vorteile und der nativen Integration d.h. bei einem Update müssen wir nichts an unserem Code ändern). JavaScript Validierung sollte nur dann zum Einsatz kommen wenn man komplexe Validierungs Regeln hat bspw. Verknüpfungen über mehrere Controls oder bestimmte Regex Patterns.

## Built-In Form Validierung

- `required` - Das Feld muss ausgefüllt sein
- `minlength` und `maxlength` - Minimale und maximale Länge des Feldes (Bei Strings)
- `min` und `max` - Minimale und maximale Zahl des Feldes (Bei Zahlen Eingaben)
- `type` - Validiert das Feld auf einen bestimmten Typen (bspw. `email` oder `url`)
- `pattern` - Validiert das Feld auf ein bestimmtes Regex Pattern

Wenn ein Control eine Regel verletzt wird automatisch die CSS Pseudo Klasse `:invalid` gesetzt. Sollte der User versuchen die Form abzuschicken wird diese direkt vom Browser abgelehnt und eine Fehlermeldung angezeigt. 

Wenn eine Form alle Regeln einhält wird die CSS Pseudo Klasse `:valid` gesetzt. Der Browser erlaubt dann das Übermitteln der Form an den Server solange kein JavaScript Code diese Aktion verhindert.

```html
<form>
  <label for="choose">Would you prefer a banana or cherry?</label>
  <input id="choose" name="i-like" required/>
  <button>Submit</button>
</form>
```

```css
input:invalid {
  borer: 1px solid red;
}
```

```html
<form>
  <label for="choose">Would you prefer a banana or a cherry?</label>
  <input id="choose" name="i-like" required pattern="[Bb]anana|[Cc]herry" />
  <button>Submit</button>
</form>
```

## JavaScript Validierung

Für die Validierung mittels JavaScript gibt es die `Constraint Validation API` die einen Satz an Methoden definiert für die einzelnen HTML Elemente.

- `HTMLButtonElement` - Stellt ein Button dar
- `HTMLFieldSetElement` - Stellt ein Set an Controls dar
- `HTMLInputElement` - Stellt ein Input Feld dar
- `HTMLOutputElement` - Stellt ein Output Feld dar
- `HTMLSelectElement` - Stellt ein Dropdown Feld dar
- `HTMLTextAreaElement` - Stellt ein Textarea Feld dar

Mithilfe der Constraint Validation API bekommen wir Zugriff auf folgende Eigenschaften:

- `validationMessage` - Gibt die Fehlermeldung zurück die der Browser anzeigt
- `validity` - Gibt ein `ValidityState` Objekt zurück welches die Validierungs Regeln enthält
- `willValidate` - Gibt an ob das Element validiert wird wenn die Form abgeschickt wird

Darüber hinaus bekommen wir folgende Methoden:

- `checkValidity` - Gibt `true` zurück wenn das Element valide ist. Wenn die Validierung invalide ist feuert diese Methode darüber hinaus noch ein `invalid` Event.
- `reportValidity` - Gibt die einzelnen Felder zurück via Events. Wird häufig in Kombination mit `preventDefault` genutzt um die Form nicht abzuschicken wenn die Validierung fehlschlägt.
- `setCustomValidity(message)` - Setzt eine eigene Fehlermeldung die der Browser anzeigt. Wenn diese Methode benutzt wird wird die Validierung immer als invalide angesehen. Damit können bspw. eigene Fehler provoziert werden die nicht durch die eingebauten Validierungs Regeln abgedeckt werden. (Im Hintergrund ist plötzlich eine Maschine offline gegangen und deshalb können die Informationen nicht mehr bearbeitet werden)

```html
<form>
  <label for="mail">
    I would like you to provide me with an email address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

```js
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});
```

### Disable Built In Validation

Möchten wir komplett auf die Browser Validierung verzichten kann an eine Form das Attribut `novalidate` hinzufügen. Damit wird die Validierung komplett deaktiviert. In diesem Fall können wir die Validierung komplett mit JavaScript selbst implementieren (Bzw. müssen wir wenn wir eine Valide Email Adresse haben möchten)

```html
<form novalidate>
  <label for="mail">
    I would like you to provide me with an email address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
```

Die Constraint Validation API sowie CSS Pseudo Klassen bleiben uns aber erhalten.

### Validierung nur mit JavaScript

In einigen Fällen können wir nicht auf die Constraint Validation API zurückgreifen. (Bspw. bei eigenen custom controls). In diesem Fall können wir aber die komplette Validierung mittels JavaScript abbilden.

In diesem Fall sollte man sich aber vorab folgende Fragen stellen: 

- Was für Validierungen benötige ich? 
  - Wie kann ich sicherstellen, dass ein gewisser String in einem bestimmten Format ist? 
  - Kann ich einen Regex schreiben der meine Eingabe für mich validiert?
- Was passiert wenn die Form invalide ist?
  - Kann ich den User helfen die Form zu korrigieren?
  - Wie soll ein Fehler angezeigt werden?
- Kann der User selbständig den Fehler beheben?
  - Oder ist der Fehler bspw. gar nicht durch den User selbst entstanden?

```html
<form>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
      <input type="text" id="mail" name="mail" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = email.nextElementSibling;

// As per the HTML Specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field
window.addEventListener("load", () => {
  // Here, we test if the field is empty (remember, the field is not required)
  // If it is not, we check if its content is a well-formed email address.
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? "valid" : "invalid";
});

// This defines what happens when the user types in the field
email.addEventListener("input", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (isValid) {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  } else {
    email.className = "invalid";
  }
});

// This defines what happens when the user tries to submit the data
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.className = "invalid";
    error.textContent = "I expect an email, darling!";
    error.className = "error active";
  } else {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  }
});
```

