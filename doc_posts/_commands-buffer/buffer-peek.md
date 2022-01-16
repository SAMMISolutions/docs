---
title: "Buffer Peak"
num: 3
---

Reads data from a buffer at the specified position.

{% include alert.html text="If you try to read data from a position larger than the current buffer size, you will get an error <code>Attempting to read from outside the buffer, returning 0.</code>" type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Buffer Name	|String	| Name of the buffer
|Type	|Drodown	| Type of the buffer you want to read from
|Variable	|String	| Variable to save the read data into
|Position|Int|Position to read the data at
{:class='table table-primary'}









