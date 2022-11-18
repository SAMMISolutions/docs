---
title: "File: Get SHA1 Hash"
num: 25
---

Returns the SHA1 hash of a file.\
SHA1 hash is like a file's digital signature. You can verify a file’s integrity by checking its hash value. If even one byte in the file changes (i.e. the file is modified in any way), its hash value will be different.\
Very useful command to periodically detect any file changes.

| Box Name | Type | Description | 
|-------|--------|--------
|Variable|String|Variable to save the SHA1 string in.
|File Path|	string|	File name you wish to get SHA1 hash of. Accepts both relative and absolute path.|
{:class='table table-primary'}









