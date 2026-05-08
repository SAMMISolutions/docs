---
title: "Regex: Get Captures"
num: 15
version: 202640
redirect_from:
  - commands/369
---

Gets capture groups from the first regex match and saves them as an array.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|String|String|Text to search in.
|Regex|String|Regular expression with capture groups.
|Save Variable As|String|Variable name to save the capture array.
{:class='table table-primary'}

Examples:

| String | Regex | Save Variable As | Saved Array |
|-------|--------|--------|--------
|User: Chrizzz, ID: 1234|User: (.*), ID: (\d+)|captures|[`Chrizzz`, `1234`]
|2026-05-08|(\d{4})-(\d{2})-(\d{2})|captures|[`2026`, `05`, `08`]
|Name: Sam, Score: 9001|Name: (.*), Score: (\d+)|captures|[`Sam`, `9001`]
{:class='table table-secondary w-auto table-hover text-break'}

After running the command, use `Array Get Value` to read individual captures:

| Array | Position | Result |
|-------|--------|--------
|captures|0|First capture group.
|captures|1|Second capture group.
{:class='table table-secondary w-auto table-hover text-break'}

{% include alert.html text="Only capture groups are returned. The full match is not included in the array." type="info" %}
