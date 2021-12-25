---
title: "String: Position"
num: 1
---

Returns the position of the **first** occurrence of a specified value in a string. Case sensitive.\
Return 0 if it doesn't find any match.


| Box Name | Type | Description | 
|-------|--------|--------|
|Variable|	String|	Variable name to save the position
|String|	String|	String to search
|Find String|	String|	String to search for
{:class='table table-primary' }

| Value to search for | String| Position returned| 
|-------|--------|--------
|"hello" | "hello and hello world" | 1
|"hello" | "Hello and hello world" | 11
|"hello" | "Hello and Hello world" | 0
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }









