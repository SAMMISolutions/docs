---
title: "Date/Time Duration"
num: 4
version: 202320
redirect_from:
  - commands/307
---

Converts a duration into an object with the breakdown of years, months, days, hours, minutes, and seconds. Optionally adds or subtracts an amount before converting.

|Box Name|Type|Description|
|--------|--------|--------
|Variable Name|String|Variable to save the resulting object in.|
|Duration|String|Input duration value.|
|Unit|Dropdown|Unit of the input duration: Seconds, Minutes, Hours, Days, Months, or Years.|
|Operator|Dropdown|Whether to add (`+=`) or subtract (`-=`) an additional amount from the duration before converting.|
|Number/Variable|String|Amount to add or subtract. Can be 0 to skip the math step.|
|Unit|Dropdown|Unit of the amount being added or subtracted: Seconds, Minutes, Hours, Days, Months, or Years.|
|Output Format|Dropdown|Largest unit to include in the result object: Seconds, Minutes, Hours, Days, Months, or Years.|
{:class="table table-primary"}

The saved object contains the following keys, depending on the selected Output Format:

|Key|Type|Description|
|--------|--------|--------
|second|Number|Remaining seconds (0–59).|
|minute|Number|Remaining minutes (0–59). Included when Output Format is Minutes or larger.|
|hour|Number|Remaining hours (0–23). Included when Output Format is Hours or larger.|
|day|Number|Remaining days within the month. Included when Output Format is Days or larger.|
|month|Number|Remaining months (0–11). Included when Output Format is Months or larger.|
|year|Number|Remaining years. Included when Output Format is Years.|
{:class="table table-secondary table-hover text-break"}

Example: an input of `3661` seconds with no math and Output Format set to `Hours` saves an object with `{ "hour": 1, "minute": 1, "second": 1 }`.
