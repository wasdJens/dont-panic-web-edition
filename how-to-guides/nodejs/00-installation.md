# How To: Node installieren

Über die Webseite kann die neuste Node Version für das jeweilige Betriebssystem installiert werden https://nodejs.org/en/download/. NodeJS installiert automatisch NPM mit.

**Es bietet sich allerdings an Node über einen Node Version Manager zu installieren und zu verwalten**.

## MacOS

(Alle nachstehnden Befehle in ein Terminal Fenster kopieren)

Installation von [Homebrew](https://brew.sh)

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Installation von [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)

```
Anleitung hier folgen: https://github.com/nvm-sh/nvm#install--update-script
```

Anschließend kann Node über NVM installiert werden

```
nvm install node
```

Zum prüfen ob die Installation erfolgreich war kann folgender Befehl ausgeführt werden

```
node -v
```

## Windows

Installation von [NVM-Windows](https://github.com/coreybutler/nvm-windows)

```
Anleitung hier folgen: https://github.com/coreybutler/nvm-windows#installation--upgrades
```

Anschließend kann Node über NVM installiert werden

```
nvm install node
```

Zum prüfen ob die Installation erfolgreich war kann folgender Befehl ausgeführt werden

```
node -v
```
