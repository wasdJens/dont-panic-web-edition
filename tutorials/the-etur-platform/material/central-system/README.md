Das ist die `Central-System` Implementierung von ETUR welche ihr in Aufgabe [09](../../09-Issues-In-The-Central-System.md) einbinden sollt.

# Install

```bash
npm i
```

# Run

- Server is running under Port `6432`

```bash
node src/index.js
```

# Usage

## Create Audit Entry

POST http://localhost:6432/reports/audit
BODY: JSON Report
RETURNS: The created report object with its id

## Get Audit Entry by ID
GET http://localhost:6432/reports/audit/:id
RETURNS: The found report object based on the provided id