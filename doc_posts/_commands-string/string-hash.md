---
title: "String Hash"
num: 10
redirect_from:
  - commands/159
---

Hashes a string using one of the selected algorithms. 

Hashing is a cryptographic process that can be used to validate the authenticity and integrity of various types of input. It is widely used in authentication systems to avoid storing plaintext passwords in databases, but is also used to validate files, documents and other types of data.\
You can read more about hashing in this [article](https://www.csoonline.com/article/3602698/hashing-explained-why-its-your-best-bet-to-protect-stored-passwords.html).

Within SAMMI, you are likely to use hashing to generate a unique string based off some input.

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Text | {% include cmd_param.html param="Text Box (Resizable)" %} | string | String to hash. |
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to save the hash result. Can use an [Accessor Path](/commands/variables#accessors). |
| Type | {% include cmd_param.html param="Dropdown" %} | string | The type of algorithm to use |
{:class='table table-primary table-cmd-params'}