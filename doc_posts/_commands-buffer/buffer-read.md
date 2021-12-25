---
title: "Buffer: Read "
num: 3
---

Read data from a buffer at the position of the read/write head.\
Reading data from a buffer will advance the position of the head by however many bytes it read.

{% include alert.html text="If you try to read data from a position larger than the current buffer size, you will get an error <code>Attempting to read from outside the buffer, returning 0.</code>" type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Buffer Name	|String	| Name of the buffer
{:class='table table-primary'}









