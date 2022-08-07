---
title: "File: INI to Object"
num: 9
---

Converts an INI file into an Object. The Object will have each key as the section name and each value as an object will the keys from the INI file.

| Box Name | Type | Description | 
|-------|--------|--------
|Object Name|String|Object to save the INI content.
|File Path|String|File to save into the object. Can use relative or absolute path.
{:class='table table-primary'}

| File | Object Returned| 
|-------|--------
|[names]<br />follower1="Christinna"<br />follower2="Roadie"<br />[Points]<br />follower1="20.000000"<br />follower2="12.000000"| {<br />  names: {<br />    follower1:"Christinna",<br />    follower2:"Roadie"<br />},<br />  Points: {<br />    follower1:20,<br />    follower2:12<br />}<br />}
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }
