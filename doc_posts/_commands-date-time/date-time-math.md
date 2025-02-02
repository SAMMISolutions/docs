---
title: "Date/Time Math"
num: 3
redirect_from:
  - commands/248
---

Returns a Date/Time, in the format specified, after adding or subtracting an amount of time. Includes your computer's timezone in the calculation.

|Box Name|Type|Description|
|--------|--------|--------
|Variable Name|String|Variable to save the string in.|
|Input Format|String|String including date/time tokens.|
|Date/Time|String|Datetime String in the Input format.|
|Operator|Dropdown|+= or -=|
|Number/Variable|String|Amount to be added or subtracted.|
|Unit|Dropdown|Seconds, Minutes, Hours, Days, Months, or Years.|
|Output Format|String|String including date/time tokens. It's equal to Input Format if it's left empty.|
{:class="table table-primary"}

{% include alert.html text="TIP: You can use this command with an empty Number/Variable to just change the format of a date/time." type="info" %}
{% include alert.html text="TIP: Use the {Z} Format to make your code aware of your timezone, otherwise it might cause slight issues!" type="info" %}

