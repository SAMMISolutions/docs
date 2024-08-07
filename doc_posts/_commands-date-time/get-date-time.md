---
title: "Get Date/Time"
num: 2
redirect_from:
  - commands/247
  - commands/138
---

Returns the current Date/Time, in the format provided.

|Box Name|Type|Description|
|-----|-----|-----
|Format|String|String including date/time [tokens]({{ "commands/date-time#tokens" | relative_url }})|
|Variable Name|String|Variable to save the string in|
{:class="table table-primary"}

|Token(s) used |Result|
|-----|-----
|{YY}{MM}{DD}|040123|
|{hh}:{mm}:{ss}{a} on {Do} {MMM} {YYYY}|1:23:45pm on 23rd Jan 2004|
|{YYYY}-{MM}-{DD}T{HH}:{mm}:{ss}{Z}<br/>Twitch|2022-01-23T13:23:45+00:00|
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }
