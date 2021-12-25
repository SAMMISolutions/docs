---
title: "Buffer: Write "
num: 2
---

Writes data to a buffer at the position of the read/write head.

Writing data to a buffer will advance the position of the head by however many bytes it wrote.

{% include alert.html text="LioranBoard will crash when you try to write data to a fixed buffer with a position larger than the buffer size." type="danger" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Buffer Name	|String	| Name of the buffer
{:class='table table-primary'}









