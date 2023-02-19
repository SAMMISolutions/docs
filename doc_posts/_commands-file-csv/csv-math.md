---
title: "CSV: Math"
num: 24
redirect_from:
  - commands/246
---

Execute math on columns/rows in your CSV.

{% include alert.html text="Doing math on a row will ignore the row name (column 0 of that row)" type="info" %} 

| Box Name | Type | Description |
|-------|--------|--------
|CSV Name|String|Name of your CSV.
|Orientation|Dropdown|Select if you are doing math on a column or a row.
|Column/Row Name/Number|{% include asterisk.html %}|Name of the column/row to do math on.
|Operator|Dropdown|Type or operation to do (Sum, Mean, Max or Min).
|Variable Name|String|Variable name to save the result.
{:class='table table-primary'}

{% include image.html w="100" src="cvs_math.png" alt="CSV example with 5 columns and 3 rows" %}

|Orientation|Column/Row Name/Number|Operator|Result|
|-------|--------|--------|--------
|column| 1 |Sum|4
|column| 3 |Mean|4.50
|row| 0 |Max|4
|row| 1 |Min|2
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }
