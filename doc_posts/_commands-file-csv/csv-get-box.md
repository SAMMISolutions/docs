---
title: "CSV: Get Box"
num: 17
redirect_from:
  - commands/209	
---

Retrives a value from a box in an existing CSV file. When retrieving values using 'Column/Row Name', the name in the yellow boxes have to be wrapped in `""` as the names are strings. If you use Column/Row Number instead, the number you input into the yellow boxes does not have to be wrapped in `""`. 

When you use column/row numbers, keep in mind the numbers begin with 0,0. The left-most column in a CSV file is column 0. The first row below the row of column names is row 0.

{% include image.html w="75" src="csvGetBox.png" alt="CSV columns and rows" external="true" %}

| Box Name | Type | Description | 
|-------|--------|--------
|CSV Name|String|Name of your CSV
|Column Name/Number|{% include asterisk.html %}|Name or number of the column
|Row Name/Number|{% include asterisk.html %}|Name or number of the row
|Save Variable As|String|The variable to save the box value as
{:class='table table-primary'}









