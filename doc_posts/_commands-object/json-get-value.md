---
title: "JSON: Get Value"
num: 10
version: 202640
redirect_from:
  - commands/367
---

Extracts a value from a JSON string by using a path and saves the result to a variable.

| Box Name | Type | Description |
|-------|--------|--------
|JSON|JSON String|JSON string to read from.
|Path|String|Path to the value, such as `user.name` or `items[0].name`.
|Save Variable As|String|Variable name to save the result.
{:class='table table-primary'}

Example JSON:

```json
{
  "user": {
    "name": "Chrizzz",
    "badges": ["mod", "vip", "subscriber"],
    "stats": {
      "level": 42,
      "active": true
    }
  },
  "items": [
    {
      "name": "Sword",
      "damage": 12
    },
    {
      "name": "Shield",
      "defense": 8
    }
  ]
}
```

Example paths:

| Path | Save Variable As | Saved Value |
|-------|--------|--------
|user.name|result|Chrizzz
|user.badges[0]|result|mod
|user.badges[2]|result|subscriber
|user.stats.level|result|42
|user.stats.active|result|true
|items[0].name|result|Sword
|items[1].defense|result|8
|items[0]|result|The first item object: `{ "name": "Sword", "damage": 12 }`
{:class='table table-secondary w-auto table-hover text-break'}

You can use this command after an HTTP request, OBS request, Twitch API call, or any command that returns JSON text.

{% include alert.html text="Keys containing dots are not supported in the path. Use simple object keys and array indexes." type="info" %}
