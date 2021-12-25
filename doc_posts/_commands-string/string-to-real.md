---
title: "Math: String to Real"
num: 7.5
---

Turns a string value into a real value (number).     
- returns 0 if the string does not start with a number or `.` 
- stops the conversion if it encounters any non number in the string and returns the current converted value 
- converting a value that's already real returns 0
- removes any leading zeroes and rounds the number to 2 decimal points
- string X beginning with a `.` will be converted to 0.X
- accepts strings containing Euler's number

| Box Name | Type | Description | 
|-------|--------|--------|
| Variable | String | Name of a variable to save the real value. |
| String Variable | String | Name of a variable containing the string to convert. |
{:class='table table-primary ' }

| String Variable value | Returned real value | 
|-------|--------|--------|
|"Hello World"|0|
|"Hello World 123"|0|
|"123 Hello World"|123|
|"123 Hello World 456"|123|
|".99"|0.99|
|"1.239999"|1.24|
|"000010"|10|
|"10e-2"|0,10|
|"10e+2"|1000|
|10|0|
{:class='table table-secondary w-auto table-responsive table-hover' }









