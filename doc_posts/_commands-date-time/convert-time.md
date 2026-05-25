---
title: "Convert Time"
num: 6
redirect_from:
  - commands/412
---

Converts a time value from one unit into a formatted duration string.

{% include alert.html text="This command is available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------|
|Input Time|Number / String|Time value to convert. Can be a number or a variable.|
|Input Format|Dropdown|Input unit. Available units are `Seconds`, `Minutes`, `Hours`, `Days`, and `Months`.|
|Output Format|Dropdown / String|Format string for the result. You can select a preset or type your own.|
|Save Variable As|String|Variable name where the converted time string will be saved.|
{:class='table table-primary'}

Months are treated as 30 days for duration conversion.

#### Output tokens

| Token | Description | Example |
|-------|--------|--------|
|`{ss}`|Second part with leading zero.|`04`|
|`{s}`|Total seconds.|`100`|
|`{mm}`|Minute part with leading zero.|`01`|
|`{m}`|Total minutes.|`1`|
|`{HH}`|Total hours with leading zero.|`25`|
|`{H}`|Total hours.|`25`|
|`{hh}`|Hour part inside the current day with leading zero.|`01`|
|`{h}`|Total hours.|`25`|
|`{DD}`|Total days with leading zero.|`01`|
|`{D}`|Total days.|`1`|
{:class='table table-secondary table-hover text-break'}

Examples:

| Input Time | Input Format | Output Format | Result |
|-------|--------|--------|--------|
|`100`|`Seconds`|`{m}:{ss}`|`1:40`|
|`3661`|`Seconds`|`{HH}:{mm}:{ss}`|`01:01:01`|
|`90061`|`Seconds`|`{D}d {hh}:{mm}:{ss}`|`1d 01:01:01`|
{:class='table table-secondary table-hover text-break'}
