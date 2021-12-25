---
title: "Buffer: Set Position "
num: 7
---

Sets the position of the read/write head of a buffer.\
When you write or read from a buffer, data is not reshuffled. Rather, the head pointer is adjusted.\
Whenever you use Buffer: Write command, head pointer advances. Whenever you use Buffer: Read command, head pointer also advances. 

{% include alert.html text="Setting the position to a non existing value will result in an error when trying to write or read the buffer in your next command." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Buffer Name	|String	| Name of the buffer
|Position|Int|Value to set the position of the head to.
{:class='table table-primary'}









