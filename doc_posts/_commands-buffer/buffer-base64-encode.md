---
title: "Buffer: Base64 Encode"
num: 12
---

Turns a whole buffer into a base64 string.

{% include alert.html text="Base-64 encoding is a way of taking binary data and turning it into a plain text. It is designed to carry data stored in binary format across the network channels. For example, you can use it to easily transfer images over the network. " type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Buffer Name	|String	| Name of the buffer
|Start Position	|{% include asterisk.html%}	| Where to start the string encoding (to encode full buffer, input `0`)
|Size| {% include asterisk.html%}	| Size of the buffer (leave at `0` for current buffer size)
Save Variable As | String | Variable to save the string value in |
{:class='table table-primary'}









