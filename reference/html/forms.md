# Forms

Forms bieten eine Technik für der Verarbeiten von Benutzereinaben auf einer Webseite zwischen dem Client und dem Server. Eine Form besteht besteht dabei aus einer Reihe von Form Controls. Darüber hinaus gibt es noch HTML Elemente um die Struktur einer Form darzustellen. Als Control zählt u.a. jedes beliebige HTML Element, dass dem Benutzer Eingaben erlaubt (Dropdowns, Buttons, Eingaben etc.). Das Wichtigste Element ist dabei das `<input>` Element.

Forms können auch den Benutzer auf Falscheingaben direkt hinweisen und können mit Validierungsfunktionen erweitert werden.

## Form Element

Das `<form>` Element definiert einen Bereich für eine Form auf einer Webseite. Eine Form ist dabei nur ein Container für die eigentlichen Controls. Auf dem Form Element können verschiedene Attribute gesetzt werden, die das Verhalten der Form beeinflussen.

- `action` - Die URL, an die die Formdaten gesendet werden sollen
- `method` - Die HTTP Methode, die verwendet werden soll (GET oder POST)

```html
<form action="/my-endpoint" method="POST"></form>
```

> [!CAUTION]
> Form Elemente sollten nicht verschachtelt werden in andere Form Elemente. Für eine Form gibt es immer ein Form Element. Eine Form kann nicht aus mehreren Form Elementen bestehen.

Form Controls können auch ohne `<form>` Element genutzt werden. Auch Form Controls die nicht Teil von einem `<form>` Element sind können über das `form` Attribute referenziert werden.

## Controls: Label, Input und Textarea Elemente

Jedes Form Control kann mit einem `<label>` versehen werden. Das Label Element ist dabei ein Container für den Text, der neben dem Control angezeigt werden soll. Das Label Element kann dabei auf zwei Arten mit dem Control verknüpft werden. Entweder durch das `for` Attribut, welches auf die ID des Controls verweist oder durch das Einbetten des Controls in das Label Element. Labels sind auch Klickbare Elemente und können automatisch das Control fokussieren.

```html
<label for="name">
  Name: <input type="text" id="name" name="user_name" />
</label>
```

Für single line Eingaben wird das `<input>` Element verwendet. Das `type` Attribut bestimmt dabei, welche Art von Eingabe erlaubt ist. HTML bietet viele Eingaben bereits als fertige Controls an (bspw. `type="email"`).

Für multi line Eingaben wird die `<textarea>` verwendet. Eine Besonderheit an `<textarea>` ggü. `<input>` ist, dass input ein void element ist (d.h. kein closing tag) während die textarea ein normales Element ist.

```html
<form action="/my-endpoint" method="POST">
  <ul>
    <li>
      <label for="name">Name</label>
      <input id="name" type="text" name="user_name" />
    </li>

    <li>
      <label for="email">Email</label>
      <input id="email" type="email" name="user_email" />
    </li>

    <li>
      <label for="msg">Message</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>

    <li>
      <button type="submit">Contact Us</button>
    </li>
  </ul>
</form>
```

Für das Absenden der User Eingabe können wir einen `type` auch auf ein `<button>` Element setzen. Die Besonderheit an dieser Stelle wir benötigen keine weitere Zeile JavaScript um den API Request abzuschicken. Andere Button Typen sind z.B. `reset` die automatisch alle Form Control Werte auf ihren Default zurücksetzen.

Über das `name` Attribute bekommt der Server die Informationen zu welchem Control ein entsprechender Wert gehört. Der Server kann dann jeden Datensatz anhand des `name` Attributs identifizieren und verarbeiten. Ähnlich zu JSON wird der Inhalt der Form als `name/value` Paare verschickt.

Im oben dargestellten Beispiel wurde der Server über einen POST Endpunkt also `user_name`, `user_email` und `user_message` erhalten. Wie der Server die Daten verarbeitet ist Abhänigg von der Serverseite im obigen Beispiel werden die Daten als `form data` geschickt.

## Fieldset und Legend Elemente

Ein `<fieldset>` bietet die Möglichkeit Form Controls in Gruppen einzuordenen und diese mit einer Überschrift zu versehen (`<legend>`). So können z.B. Styles an mehrere Controls gleichzeitig angewendet werden. Radio Buttons sollten immer in einem `<fieldset>` Element gruppiert werden. Der größte Vorteil eine Form in verschiedene Fieldsets zu unterteilen ist, dass Screen Reader und andere Hilfsmittel die Form besser interpretieren können.

```html
<form action="/my-endpoint" method="POST">
  <ul>
    <li>
      <label for="msg">Message</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>

    <fieldset>
      <legend>Type of issue</legend>
      <p>
        <input type="radio" name="bug" id="bug" value="bug" />
        <label for="bug">Bug</label>
      </p>

      <p>
        <input type="radio" name="feedback" id="feedback" value="feedback" />
        <label for="feedback">Feedback</label>
      </p>

      <p>
        <input type="radio" name="question" id="question" value="question" />
        <label for="question">question</label>
      </p>
    </fieldset>

    <li>
      <button type="submit">Contact Us</button>
    </li>
  </ul>
</form>
```

## Native Form Controls

### Text Input

Text `<input>` Felder erlaubt es dem User alle möglichen Zeichen einzugeben. HTML Eingabe Felder unterstützen dabei keine Rich Text Edit Funktionen (bspw. Bold oder Italic). Text Eingaben können folgende Eigenschaften haben:

- `readonly` - Das Feld kann nicht bearbeitet werden, allerdings kann der Inhalt kopiert werden und der Wert wird übermittelt.
- `disabled` - Das Feld kann nicht bearbeitet werden und der Wert wird nicht übermittelt.
- `placeholder` - Ein Platzhalter Text, der angezeigt wird, wenn das Feld leer ist.
- `size` - Die Breite des Input Elements
- `maxlength` - Die maximale Anzahl an Zeichen, die eingegeben werden können.
- `spellcheck` - Ob das Feld Rechtschreibprüfung unterstützt (Browser Abhängig).

Über das `type` Attribute können verschiedene Arten von Text Eingaben definiert werden:

- `text` - Standardwert, erlaubt es dem User alle möglichen Zeichen einzugeben. Aus diesem Input werden u.a. Dates, Checkboxen etc. abgeleitet
- `password` - Versteckt den eingegebenen Text (Achtung: Solange die Verbindung nicht verschlüsselt ist wird der Text im Klartext übertragen)
- `hidden` - Ein besonderes Control welches zwar den Inhalt vor dem User versteckt, aber dennoch an den Server übermittelt wird.

```html
<input type="text" id="name" name="user_name" />
```

### Multi Line Text Input

Multi Line Text Inputs werden über das `<textarea>` Element dargestellt. Das `rows` und `cols` Attribut können verwendet werden um die Größe des Textareas zu definieren. Das `wrap` Attribut kann verwendet werden um das Verhalten des Textareas zu definieren, wenn der Text zu lang ist. Die möglichen Werte sind `soft` und `hard`. Bei `soft` wird der Text automatisch umgebrochen, während bei `hard` der User manuell Zeilenumbrüche einfügen muss.

```html
<textarea cols="30" rows="8"></textarea>
```

### Checkboxes und Radio Buttons

Checkboxes und Radio Buttons sind spezielle Form Controls, die nur einen Wert an den Server übermitteln, wenn sie aktiviert sind. Checkboxes können dabei einzeln oder in Gruppen verwendet werden. Radio Buttons hingegen können nur in Gruppen verwendet werden. Radio Buttons sind dabei immer in Gruppen angeordnet und der User kann nur einen Wert auswählen. Checkboxes und Radio Buttons können folgende Eigenschaften haben:

- `checked` - Ob das Control aktiviert ist.

```html
<input type="checkbox" id="bug" name="bug" value="bug" />
```

### Button Typen

Buttons können verschiedene Typen haben, die das Verhalten des Buttons definieren. Die wichtigsten Typen sind:

- `submit` - Der Button sendet die Formdaten an den Server
- `reset` - Der Button setzt alle Form Controls auf ihren Default Wert zurück
- `button` - Der Button hat kein spezielles Verhalten. Diese können bspw. über JavaScript modifiziert werden für ein spezielles Verhalten.

Ein Button kann entweder über `<button>` oder `<input type>` abgebildet werden. Ein nativer Button kann mit normalen CSS Regeln gestylt werden und sollte deshalb bevorzugt werden.

```html
<button type="submit">Contact Us</button>
```

### File Picker

Das `<input type="file">` Element erlaubt es dem User eine Datei auszuwählen. Das `accept` Attribut kann dabei verwendet werden um die Dateitypen einzuschränken. Das `multiple` Attribut erlaubt es dem User mehrere Dateien auszuwählen. Die Dateien werden dann als Array an den Server übermittelt.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

Für Mobil Geräte kann darüber hinaus direkt auf die Kamerea zugegriffen werden:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

### Email Address

Mit dem type Attribute `email` kann der User eine Email Adresse eingeben. Der Browser kann dann die Eingabe validieren und den User auf eine falsche Eingabe hinweisen. Das `multiple` Attribut erlaubt es dem User mehrere Email Adressen einzugeben. Mobil Geräte können in diesem Fall eine andere Tastatur anzeigen. Der Browser bietet für die Validierung vordefinierte Funktionen an. Es sollten aber alle übermittelten Daten auf Server Seite immer geprüft werden (Besonders was eine Valide Email Addresse ist unterscheidet sich teilweise).

```html
<input type="email" id="email" name="email" />
```

### Search Input

Das `type=search` Attribute verändert den normalen Text Input zu einer Sucheingabe. Je nach Browser werden andere Styles dem User angezeigt (X Icon sowie Runde Borders anstatt Eckige). Search Feld Eingaben werden auch automatisch vom Browser gespeichert und können bei anderen Suchfeldern als Vorschlag angezeigt werden.

```html
<input type="search" id="search" name="search" />
```

### Phone Number

Das `type=tel` Attribute verändert den normalen Text Input zu einer Telefonnummer Eingabe. Auf Mobil Geräten wird dann eine Zahleneingabe angezeigt anstelle von einer normalen Tastatur. Das `pattern` Attribut kann verwendet werden um eine Validierung zu definieren.

```html
<input type="tel" id="tel" name="tel" />
```

### URL Feld

Das `type=url` Attribute verändert den normalen Text Input zu einer URL Eingabe. Eine Besonderheit am URL feld ggü. normalen Text eingaben ist, dass der Browser dem User einen Fehler anzeigt wenn kein Protokoll angegeben wird (bspw. https://).

```html
<input type="url" id="url" name="url" />
```

### Number Feld

Das `type=number` Attribute verändert den normalen Text Input zu einer Zahleneingabe. Auf Mobil Geräten wird dann eine Zahleneingabe angezeigt anstelle von einer normalen Tastatur. Das `min` und `max` Attribut kann verwendet werden um eine Validierung zu definieren. Das `step` Attribut kann verwendet werden um die Schrittweite zu definieren.

```html
<input type="number" name="age" id="age" min="1" max="10" step="2" />
```

### Slider Control

Anstelle von normalen Number Eingaben kann auch ein Slider verwendet werden um eine Range von Möglichkeiten dem User anzubieten.

```html
<label for="price">Choose a maximum house price: </label>
<input
  type="range"
  name="price"
  id="price"
  min="50000"
  max="500000"
  step="100"
  value="250000"
/>
<output class="price-output" for="price"></output>
```

Slider Elemente geben standardmäßig nicht den gewählten Wert aus. Deshalb ist es üblich ein `<output>` Element an einen Slider zu hängen.

### Date & Time Felder

Der Browser kann unterschiedliche Date und Time Picker Optionen über ein `<input>` Feld darstellen. Hier muss man unterscheiden in wie weit Timezones und andere Lokale Unterschiede betrachtet werden müsen. Datums Eingaben können mit `min` und `max` Attributen limitiert werden.

**Datetime Local**
Ignoriert time zone Informationen. Bietet dem User ein Datum und eine Uhrzeit an.

```html
<input type="datetime-local" name="datetime" id="datetime" />
```

**Time**

```html
<input type="time" name="time" id="time" />
```

**Month**

```html
<input type="month" name="month" id="month" />
```

**Week**

```html
<input type="week" name="week" id="week" />
```

### Color Picker

Das `type=color` Attribute verändert den normalen Text Input zu einem Color Picker. Der Browser kann dann eine Farbauswahl anzeigen. Der Wert wird dabei als Hexadezimalwert übermittelt.

```html
<input type="color" name="color" id="color" />
```

### Dropdowns

HTML hat zwei Elemente für das Darstellen von Dropdown Elementen: `<select>` und `<datalist>` (Autocomplete). Ein `<select`> hat dabei die Optionen als Kind Elemente

```html
<select id="simple" name="simple">
  <option>Banana</option>
  <option selected>Cherry</option>
  <option>Lemon</option>
</select>
```

Möchte man Gruppen bilden kann zusätzlich das Element `<optgroup>` verwendet werden.

```html
<select id="groups" name="groups">
  <optgroup label="fruits">
    <option>Banana</option>
    <option selected>Cherry</option>
    <option>Lemon</option>
  </optgroup>
  <optgroup label="vegetables">
    <option>Carrot</option>
    <option>Eggplant</option>
    <option>Potato</option>
  </optgroup>
</select>
```

`<option>` kann ein spezieller `value` Wert zugewisen werden. Dieser wird dann in der Form übermittelt anstelle des Textes.

```html
<select id="simple" name="simple">
  <option value="banana">Big, beautiful yellow banana</option>
  <option value="cherry">Succulent, juicy cherry</option>
  <option value="lemon">Sharp, powerful lemon</option>
</select>
```

Möchte man mehrere Elemente auswählen gibt es die `multiple` Eigenschaft auf dem `<select>`

```html
<select id="multi" name="multi" multiple size="2">
  <option>Carrot</option>
  <option>Eggplant</option>
  <option>Potato</option>
</select>
```

Über das `<datalist>` Element und einem Input Feld können auch Autocomplete Felder erstellt werden. Basierend auf der User Eingabe werden die entsprechenden Optionen automatisch gefiltert:

```html
<label for="myFruit">What's your favorite fruit?</label>
<input type="text" name="myFruit" id="myFruit" list="mySuggestion" />
<datalist id="mySuggestion">
  <option>Apple</option>
  <option>Banana</option>
  <option>Blackberry</option>
  <option>Blueberry</option>
  <option>Lemon</option>
  <option>Lychee</option>
  <option>Peach</option>
  <option>Pear</option>
</datalist>
```

### Other Native Inputs

**Meter**
Ein besonderes Element für das Darstellen von fixen Werten in einem bestimmten Bereich. Das `min` und `max` Attribut definieren den Bereich. Das `value` Attribut definiert den aktuellen Wert.

```html
<meter min="0" max="100" value="75" low="33" high="66" optimum="0">75</meter>
```

**Progress**
Ein besonderes Element für das Darstellen von Fortschrittsbalken. Das `min` und `max` Attribut definieren den Bereich. Das `value` Attribut definiert den aktuellen Wert.

```html
<progress max="100" value="75">75/100</progress>
```
