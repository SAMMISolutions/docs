---
title: "File: JSON to Object"
num: 1.5
redirect_from:
  - commands/393
---

Reads a JSON file and saves the parsed result directly into a SAMMI variable.

{% include alert.html text="This command is available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------|
|File Name|String / File Select|JSON file to read. Accepts absolute paths or paths relative to the SAMMI folder.|
|Save Variable As|String|Variable name where the parsed JSON object or array will be saved.|
{:class='table table-primary'}

The file must contain valid JSON. If the JSON root is an object, SAMMI saves an object. If the JSON root is an array, SAMMI saves an array.

Example file:

```json
{
  "user": "Chrizzz",
  "points": 150,
  "roles": ["mod", "vip"]
}
```

If saved as `jsonData`, you can read values such as `/$jsonData.user$/` or `/$jsonData.roles[0]$/`.
