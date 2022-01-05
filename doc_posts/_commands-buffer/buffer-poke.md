---
title: "Buffer: Poke "
num: 2
---

Writes data to a buffer at the specified position.

Writing data to a buffer will advance the position of the head by however many bytes it wrote.

{% include alert.html text="LioranBoard will crash when you try to write data to a fixed buffer with a position larger than the buffer size." type="danger" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Buffer Name	|String	| Name of the buffer
|Type	|Dropdown	| Type of the buffer
|Value to Write	|String	| Data to write into the buffer
|Position|Int|Position to write the data at
{:class='table table-primary'}









