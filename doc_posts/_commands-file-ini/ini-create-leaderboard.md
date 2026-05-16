---
title: "INI: Create Leaderboard"
num: 2.42
version: 202640
redirect_from:
  - commands/371
---

Generates a leaderboard from a section inside an INI file and saves the result as a string or an array.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------|
|File Name|File Select|Path to the INI file. If the extension is omitted, `.ini` will be appended.|
|Section|String|The INI section to read (e.g., `leaderboard`).|
|Format|Dropdown / Writable|Output line format. Use placeholders `{Rank}`, `{Key}`, and `{Value}`. Several presets are available and the field is writable.|
|Save Variable As|String|Variable name to save the result into.
|Output As Array|Checkbox|If checked, the leaderboard is saved as an array (list) instead of a single string.
|Sort Ascending|Checkbox|If checked, entries are sorted ascending; otherwise descending.
|Max|Number|Optional maximum amount of leaderboard entries to return. Leave empty to return all entries.
{:class='table table-primary'}

Behavior:
- SAMMI reads the specified INI section and builds a list of key/value pairs.
- Values that parse as numbers are ranked numerically; non-numeric values are ranked lexicographically (case-insensitive).
- If multiple entries share the same value they share the higher rank. For example, if two entries tie for first place they both receive rank `1`; the next entry receives rank `3`.
- If `Max` is set, only the top amount of entries are returned after sorting and ranking.
- If `Output As Array` is enabled the command saves a list of formatted lines; otherwise it saves a single newline-separated string.

Format placeholders:
- `{Rank}` - the rank number
- `{Key}` - the INI key name
- `{Value}` - the value string from the INI

Examples:

Given an INI section `[scores]` with:

```
alice=120
bob=95
charlie=120
dave=80
eve=95
```

With format `{Rank}) {Key}: {Value}` and `Sort Ascending` unchecked, the saved string will be:

```
1) alice: 120
1) charlie: 120
3) bob: 95
3) eve: 95
5) dave: 80
```

Use the array output mode to get a list you can iterate with `Repeat` or `Array` commands.
