---
title: "Introduction"
num: 1
---

#### Tokens
Tokens are used to denote different parts of a datetime string.<br />They are case-sensitive, and each token must be wrapped in {} to use:<br />
{hh:mm} <span class="fas fa-times" sytle="color: red" /><br />
{hh}:{mm} <span class="fas fa-check" sytle="color: green" />

|| Token | Output | Description | 
|-------|-------|--------|--------
|Year|YY|70, 71, ... 68, 69|Year without century|
||YYYY|1970, 1971, ... 2068, 2069|Year with century|
|Month|M|1, 2, ... 11, 12|Without leading zero|
||Mo|1st, 2nd, ... 11th, 12th|With ordinals|
||MM|01, 02, ... 11, 12| With leading zero|
||MMM|Jan, Feb, ... Nov, Dec|Short-form month name|
||MMMM|January, February, ... November, December|Full month name|
|Day of the month|D|1, 2, ... 30, 31|Without leading zero|
||Do|1st, 2nd, ... 30th, 31st|With ordinals
||DD|01, 02, ... 30, 31|With leading zeor|
|Day of the week|d|0, 1, ... 5, 6|0 for Sunday, 1 for Monday, etc|
||do|0th, 1st, ... 5th, 6th|With ordinals|
||dd|Su, Mo, ... Fr, Sa|2 letters|
||ddd|Sun, Mon, ... Fri, Sat|3 letters|
||dddd|Sunday, Monday, ... Friday, Saturday|Full name|
|Hour|H|0, 1, ... 22, 23|Without leading zero (24h format)|
||HH|00, 01, ... 22, 23|With leading zero (24h format)|
||h|1, 2, ... 11, 12|Without leading zero (12h format)|
||hh|01, 02, ... 11, 12|With leading zero (12h format)|
||k|1, 2, ... 23, 24|Without leading zero (24h format, where 24: replaces 00:)|
||kk|01, 02, ... 23, 24|With leading zero (24h format, where 24: replaces 00:)|
|Minute|m|0, 1, ... 58, 59|Without leading zero|
||mm|00, 01, ... 58, 59|With leading zero|
|Second|s|0, 1, ... 58, 59|Without leading zero|
||ss|00, 01, ... 58, 59|With leading zero|
|AM/PM|A|AM, PM|Uppercase|
||a|am, pm|Lowercase|
|Time Zone|Z|-12:00, -11:00, ... +11:00, +12:00|With separator|
||ZZ|-1200, -1100, ... 1100, 1200|Without separator|
|Uniz Timestamp|X|(really long number)|Number of seconds since Jan 1 1970 00:00 UTC|
{:class='table table-secondary w-auto table-responsive table-hover' }

#### Keywords
These are specific values that can be used instead of tokens for specific inputs/outputs.<br />
Some can be used instead of a Format, while others can be used instead of a Date.<br />
Format keywords are case-sensitive if they have a <span class="fas fa-star-of-life fa-sm" /> next to them.

**Formats**
|Keyword|Example|
|--------|--------|
|LT|1:23 PM|
|LTS|1:23:45 PM|
|L|01/23/2004|
|l|1/23/2004|
|LL|January 23, 2004|
|ll|Jan 23, 2004|
|LLL|January 23, 2004 1:23 PM|
|lll|Jan 23, 2004 1:23 PM|
|LLLL|Friday, January 23, 2004 1:23 PM|
|llll|Fri, Jan 23, 2004 1:23 PM|
|ISO 8601/ISO8601/RFC 3339/RFC3339/Twitch|2004-01-23T13:23:45+00:00|

**Dates**
+ yesterday
+ today
+ tomorrow
