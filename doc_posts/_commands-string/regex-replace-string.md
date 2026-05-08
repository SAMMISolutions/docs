---
title: "Regex: Replace String"
num: 14
version: 202640
redirect_from:
  - commands/358
---

Replaces text in a string using a regular expression and saves the resulting string.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|String|String|Text to search in.
|Regex|String|Regular expression to find matching text.
|Replacement|String|Text to replace each match with. Can be empty to remove matches.
|Save Variable As|String|Variable name to save the new string.
{:class='table table-primary'}

Examples:

| String | Regex | Replacement | Save Variable As | Saved Value |
|-------|--------|--------|--------|--------
|Order #1234|\d+|9999|newText|Order #9999
|Hello   World|\s+| |newText|Hello World
|abc123def|\d+||newText|abcdef
|User: Chrizzz, ID: 1234|ID: \d+|ID: hidden|newText|User: Chrizzz, ID: hidden
{:class='table table-secondary w-auto table-hover text-break'}

The replacement is applied to all matches found by the regular expression.
