# How To: The Power of Flexbox and Grid

Diese Anleitung erklärt wie man Flexbox und CSS Grid verwenden kann um ein responsives Layout zu erstellen. Als Beispiel werden Elemente einmal mit Flexbox und einmal mit Grid positioniert. Dabei bricht das Flexbox Layout ab einer kleinen Screen Größe automatisch um.

**Vorrausetzung**

- Ein Text Editor ist installiert (bspw. [Visual Studio Code](https://code.visualstudio.com/))
- Grundlagen HTML & CSS
- Eine Leere HTML Seite sowie eine `styles.css` Datei die im HTML Eingebunden ist

## Flexbox und Grid Beispiel

Als erstes kopiert euch folgendes HTML Template in eure `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flexbox und Grid Beispiel</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <div class="item">Flex Item 1</div>
      <div class="item">Flex Item 2</div>
      <div class="item">Flex Item 3</div>
      <div class="item">Flex Item 4</div>
      <div class="item">Flex Item 5</div>
      <div class="item">Flex Item 6</div>
    </div>

    <div class="grid-container">
      <div class="grid-item">Grid Item 1</div>
      <div class="grid-item">Grid Item 2</div>
      <div class="grid-item">Grid Item 3</div>
      <div class="grid-item">Grid Item 4</div>
      <div class="grid-item">Grid Item 5</div>
      <div class="grid-item">Grid Item 6</div>
    </div>
  </body>
</html>
```

Wir definieren zwei Container einmal für eine Flexbox und einmal für ein CSS Grid. Jeder Container hat eine Vielzahl an beliebigen Items die später entsprechend angeordnet werden.

Als nächstes kopiert folgende CSS Definitionen in eure `styles.css` Datei:

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --tertiary-color: #e74c3c;
  --grid-color: #9b59b6;
  --background-color: #f2f2f2;
  --grid-background-color: #f9f9f9;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--background-color);
}

.item {
  background-color: var(--primary-color);
  color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  flex: 1 1 calc(33.33% - 20px);
  box-sizing: border-box;
}

.item:nth-child(odd) {
  background-color: var(--secondary-color);
}

.item:nth-child(3n) {
  background-color: var(--tertiary-color);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;
  background-color: var(--grid-background-color);
}

.grid-item {
  background-color: var(--grid-color);
  color: #fff;
  padding: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .container {
      flex-direction: column;
  }
  .item {
      flex: 1 1 100%;
  }
}
```

Die CSS Regeln einmal genauer erläutert:

```css
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--background-color);
}
```

- Für unseren Flex Container definieren wir die `display` Regel `flex` und `flex-wrap: wrap` um die Items automatisch umzubrechen. Mit `justify-content: space-between` sorgen wir dafür das die Items gleichmäßig verteilt werden. `padding` und `background-color` sind nur optische Anpassungen.

```css
.item {
  background-color: var(--primary-color);
  color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  flex: 1 1 calc(33.33% - 20px);
  box-sizing: border-box;
}
```

- Für die Items definieren wir die Hintergrundfarbe, Textfarbe, Padding und Margin. Mit `flex: 1 1 calc(33.33% - 20px)` sorgen wir dafür das die Items gleichmäßig verteilt werden. `box-sizing: border-box` sorgt dafür das Padding und Margin nicht die Breite des Elements verändern.

Eine Besonderheit bei den Items sind die Anpassungen für das `nth-child` Pseudo Element.

```css
.item:nth-child(odd) {
  background-color: var(--secondary-color);
}

.item:nth-child(3n) {
  background-color: var(--tertiary-color);
}
```

- Hier definieren wir die Hintergrundfarbe für jedes dritte und jedes ungerade Element.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;
  background-color: var(--grid-background-color);
}
```

- Für unseren Grid Container definieren wir die `display` Regel `grid` und `grid-template-columns: repeat(3, 1fr)` um die Anzahl der Spalten zu definieren. `grid-gap` sorgt für den Abstand zwischen den Items. `padding` und `background-color` sind nur optische Anpassungen.

Zum Abschluss definieren wir uns noch eine Media Query um die Anordnung der Items auf kleinen Bildschirmen zu ändern.

```css
@media (max-width: 768px) {
  .container {
      flex-direction: column;
  }
  .item {
      flex: 1 1 100%;
  }
}
```

## Kombination aus einem Grid mit Flex Items

Wir können auch beide Display Arten kombinieren. Für das zugrunde Liegende Layout verwenden wir ein Grid und für die Items innerhalb des Grids verwenden wir Flexbox. Wir können das Beispiel von oben abändern oder eine neue HTML und CSS Datei anlegen.

Zuerst definieren wir uns einen Gallery Container wir möchten einzelne Items mit einem Titel und einer Beschreibung darstellen:

```html
<div class="gallery">
    <div class="item">
        <div class="item-content">
            <div class="item-title">Title 1</div>
            <div class="item-description">Description 1</div>
        </div>
    </div>
    <div class="item">
        <div class="item-content">
            <div class="item-title">Title 2</div>
            <div class="item-description">Description 2</div>
        </div>
    </div>
    <!-- Weitere Elemente hier hinzufügen -->
</div>
```

Dann passen wir unsere CSS Definitionen an: 

```css
    :root {
        --primary-color: #3498db;
        --secondary-color: #2ecc71;
        --tertiary-color: #e74c3c;
        --grid-color: #9b59b6;
        --background-color: #f2f2f2;
        --grid-background-color: #f9f9f9;
    }

    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: var(--background-color);
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        padding: 20px;
    }

    .item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: var(--primary-color);
        color: white;
        border-radius: 10px;
        overflow: hidden;
    }

    .item-content {
        padding: 20px;
    }

    .item-title {
        font-size: 24px;
        margin-bottom: 10px;
    }

    .item-description {
        font-size: 18px;
    }

    @media (max-width: 768px) {
        .gallery {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
        .item-title {
            font-size: 20px;
        }
        .item-description {
            font-size: 16px;
        }
    }

    .item:nth-child(odd) {
        background-color: var(--secondary-color);
    }

    .item:nth-child(3n) {
        background-color: var(--tertiary-color);
    }
```

Das besondere an diesem Grid ist das wir die `grid-template-columns` Regel verwenden um die Anzahl der Spalten zu definieren. Mit `repeat(auto-fit, minmax(300px, 1fr))` sorgen wir dafür das die Spalten automatisch umgebrochen werden wenn der Platz nicht ausreicht. Mit `gap: 20px` sorgen wir für den Abstand zwischen den Items.

Wenn wir jetzt die Größe vom Fenster verändern sehen wir wie sich die Elemente immer neu ausrichten. Hierfür könnt ihr noch mehrere Elemente im HTML hinzufügen.

> [!TIP]
> Wenn ihr eure JavaScript Kenntnisse üben wollt könnt ihr auch die Items Dynamisch über eine fixe Anzahl und einer Schleife hinzufügen.

Wenn wir jetzt bspw. die Karten Darstellung abändern möchten und Titel und Beschreibung zentriert anzeigen möchten können wir einfach `align-items: center` zu der `.item` Klasse hinzufügen.
