# HTML Basics

## Text Grundlagen

HTML ist eine mächtige Markup Sprache um Struktur und Bedeutung von Inhalten zu beschreiben. Im folgenden werden Grundlegende Elemente vorgestellt die dabei helfen können Inhalte zu strukturieren. Semantische Elemente wie Header und Paragraphen sind für die Darstellung von Inhalten auf Webseiten besonders wichtig. Sie vermitteln uns Dinge die wir bereits aus der Vergangenheit kennen oder weißen uns auf wichtige Informationen. Als Beispiel eine Überschrift für eine Webseite sollte ein `<h1>` sein und als oberstes Element auf der Seite stehen.

### Header und Paragraphen

HTML bietet insgesammt 6 Header (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`) für das Beschreiben von Überschriften, Unterüberschriften etc. an. Paragraphen können in einem einzelnen Paragraphen dargestellt werden.

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>Wetter</title>
  </head>
  <body>
    <h1>Dont Panic Web Edition</h1>
    <p>By Jens Reiner</p>
    <h2>Chapter 1: Introduction to HTML</h2>
    <p>
      HTML is a powerful markup language for describing the structure and
      meaning of content. In the following, basic elements are presented that
      can help to structure content.
    </p>
    <h3>Chapter 1.1: Header and Paragraphs</h3>
    <p>
      HTML offers a total of 6 headers (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`) for
      describing headings, subheadings, etc. Paragraphs can be displayed in a
      single paragraph.
    </p>
  </body>
</html>
```

- Man sollte nur ein `h1` pro seite verwenden und alle weitern Header sind darunter
- Auf ein `h3` sollte nicht ein "höheres" heading folgen (bspw. `h2`)
- Im Idealfall besteht eine einzelne Seite nur aus 3 Headern. Alle weiteren Kapitel sollten in Unterseiten ausgelagert werden.

### Emphasis

Mittels `<em>` Tag können Wörter hervorgehoben. Über CSS lässt sich die Hervorhebung unterschiedlich darstellen. "Fett" gedruckte Wörter können mittels `<strong>` dargestellt werden.

Wenn man einen Text komplett selbst gestalten möchte kann man auch noch das `<span>` Element verwenden.

## Listen

Alle Listen in HTML werden mit dem `<li>` Element dargestellt. Listen können dabei geordnet (`<ol>`) oder ungeordnet (`<ul>`) sein. Listen können beliebig verschachtelt werden. Ein Listen Element benötigt immer einen wrapper (Entweder `<ol>` oder `<ul>`).

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>Meine Top 5!</title>
  </head>
  <body>
    <h1>Buch Empfehlungen</h1>
    <ul>
      <li>The Software Engineers Guidebook</li>
      <li>Managing Software Requirements the Agile Way</li>
    </ul>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>Einkaufen</title>
  </head>
  <body>
    <h1>Einkaufen</h1>
    <ol>
      <li>Tomaten</li>
      <li>Brot</li>
    </ol>
  </body>
</html>
```

Darüber hinaus können Listen auch ineinander verschachtelt werden. So kann ein Listen Element eine weitere Liste aufrufen:

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>Einkaufen</title>
  </head>
  <body>
    <h1>Einkaufen</h1>
    <ul>
      <li>Brot</li>
      <li>
        Gemüse
        <ul>
          <li>Tomaten</li>
          <li>Gurken</li>
        </ul>
      </li>
    </ul>
  </body>
</html>
```

## Hyperlinks

Hyperlinks bilden die Grundlage wie wir das heutige Web benutzen. Mit Hyperlinks können wir auf andere Dokumente verweisen (verlinken). Ein Link auf eine andere Webseite kann mit dem `<a>` (Anchor) Element erstellt werden.

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>My Website</title>
  </head>
  <body>
    <h1>Willkommen!</h1>
    <p>
      Hier findet ihr mehr Informationen
      <a href="https://www.google.com">Google</a>
    </p>
  </body>
</html>
```

Links können aber auch auf Inhalte innerhalb der eigenen Webseite verweisen. Bspw haben wir zwei HTML Dokumente `index.html` und `about.html`. Wenn wir nun von `index.html` auf `about.html` verweisen möchten können wir das mit einem relativen Pfad tun.

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>My Website</title>
  </head>
  <body>
    <h1>Willkommen!</h1>
    <p>
      <a href="about.html">Über diese Seite</a>
    </p>
  </body>
</html>
```

Darüber hinaus können Anchor Tags auch benutzt werden um Downloads, Emails und vieles mehr darzustellen. Ich verweise hier auf die Mozilla Dokumentation https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks