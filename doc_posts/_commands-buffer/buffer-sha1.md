---
title: "Buffer: SHA1 Hash"
num: 11
---

Returns the SHA1 hash from a buffer. The data will be analyzed from 0 to the size of the buffer.\
SHA1 hash is like a file's digital signature. You can verify a file’s integrity by checking its hash value. If even one byte in the file changes (i.e. the file is modified in any way), its hash value will be different.\
Very useful command to periodically detect for any file changes.

| Box Name | Type | Description | 
|-------|--------|--------
|Buffer Name	|String	| Name of the buffer
|Variable|String|Variable to save the SHA1 string in.
{:class='table table-primary'}









