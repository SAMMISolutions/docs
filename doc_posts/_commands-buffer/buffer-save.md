---
title: "Buffer: Save"
num: 4.5
redirect_from:
  - commands/111
---

With this command you can save the contents (raw data) of a buffer to a file, ready to be read back into memory using the Buffer: Load command. If a folder has not been created, a new one will be created with this command.

{% include alert.html text="SAMMI cannot modify SAMMI system files or files outside of its own directory if Enhanced Protection in SAMMI Settings is enabled." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Buffer Name	|String	| Name of the buffer
|File Path| String| File name to save the buffer into. Accepts both relative and absolute path. |
{:class='table table-primary'}

Example File Path: `/$global.main_directory$/test.txt`

{% include example_public.html src="https://i.imgur.com/3OuLvOu.png" size="100" title="Example use of correct File Path in SAMMI folder" %}  
