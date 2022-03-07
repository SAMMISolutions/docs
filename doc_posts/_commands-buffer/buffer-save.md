---
title: "Buffer Save"
num: 4.5
---

With this command you can save the contents (raw data) of a buffer to a file, ready to be read back into memory using the Buffer: Load command.

{% include alert.html text="You should save your file in LioranBoard folder or one of its inner folders. Full path is needed i.e. c:/lioranboard/test.txt (All Lowercase)" type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Buffer Name	|String	| Name of the buffer
|File Path| String| File name to save the buffer into. |
{:class='table table-primary'}

Better example File Path: /$global.main_directory$/test.txt

{% include example_public.html src="https://i.imgur.com/3OuLvOu.png" size="100" title="Example use of correct File Path in LioranBoard folder" %}  
