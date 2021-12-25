---
title: "Buffer: Create "
num: 1
---

Creates a new buffer with the given name.

{% include alert.html text="You must delete a buffer before creating another one with the same name." type="warning" %} 

When creating a buffer, you should always try to create it to a size that is appropriate to the type, with the general rule being that it should be created to accommodate the maximum size of data that it is to store.

**Buffer types:** 
- Fixed - A buffer of a fixed size in bytes. The size is set when the buffer is created and cannot be changed again. LioranBoard will crash when you reach the limit size. 
- Grow - A buffer that will grow dynamically as data is added. You create it with an initial size (which should be an approximation of the size of the data expected to be stored), and then it will expand to accept further data that overflows this initial size. 
- Wrap - A buffer where the data will wrap. When the data being added reaches the limit of the buffer size, the overwrite will be placed back at the start of the buffer, and further writing will continue from that point.

{% include image.html w="200px" src="Buffer_Types.png" alt="Buffer types" %}

{% include alert.html text="If in doubt, use a grow buffer to prevent overwrite errors." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Buffer Name	|String	| Name of the buffer to create
| Size | Size of the buffer in bytes. |
|Type |dropdown menu| Fixed, Grow or Wrap
{:class='table table-primary'}









