---
title: "Buffer: Set Position"
num: 7
---

Sets the position of the read/write head of a buffer.\
When you write or read from a buffer, data is not reshuffled. Rather, the head pointer is adjusted.\
Whenever you use Buffer: Write command, head pointer advances. Whenever you use Buffer: Read command, head pointer also advances. 

| Box Name | Type | Description | 
|-------|--------|--------
|Buffer Name	|String	| Name of the buffer
|Position|Int|Value to set the position of the head to.
{:class='table table-primary'}









