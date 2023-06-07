---
title: String Substitute Variables
num: 10.1
version: 202322
redirect_from:
  - commands/318
---

Replaces substituted variable placeholders (ex: `/$username$/`) in a template string with variables from the current button, or a provided object.

| Box Name | Type | Description | 
|-------|--------|--------|
|Template String Variable|	String	|Variable name containing a template string with substituted variable placeholders
|Replacement Object Name| Object | If provided, choose to reference variables within an object instead of the button's current variables.
{:class='table table-primary' }

|Variables in button| Template String | Returned String | 
|-----------|-------|--------|
|username: "chrizzz"<br>months: 12|Thanks `/$username$/` for the `/$months$/` months!|Thanks chrizzz for the 12 months!|
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }







