---
title: "Regex: Is Match"
num: 13
version: 202640
redirect_from:
  - commands/357
---

Checks whether a string matches a regular expression. Returns `true` if the regex matches, otherwise `false`.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|String|String|Text to check.
|Regex|String|Regular expression to test against the string.
|Save Variable As|String|Variable name to save `true` or `false`.
{:class='table table-primary'}

Examples:

| String | Regex | Save Variable As | Saved Value | Notes |
|-------|--------|--------|--------|--------
|Hello World|World|isMatch|true|Matches because `World` appears anywhere in the string.
|Hello World|^World|isMatch|false|`^` means the string must start with `World`.
|Order #1234|\d+|isMatch|true|Matches one or more digits.
|Chrizzz#1234|^[A-Za-z0-9_]+#\d{4}$|isMatch|true|Checks for a username followed by a 4-digit tag.
{:class='table table-secondary w-auto table-hover text-break'}
