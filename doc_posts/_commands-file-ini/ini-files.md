---
title: General
num: 0.5
---

With the following commands you can save and load data to .ini files. Unlike with variables and stacks, the data is permanently saved and can be loaded again after you close and reopen LioranBoard.

**Rules for saving and loading ini files:**

1. Each file needs to have a specific structure for LioranBoard to read it, containing [section] and key="value".  

   {% include image.html w="75" src="ini_structure.png" alt="Ini file structure" %}  

{:start="2"}
2. You can only save and load .ini files placed in your LioranBoard folder or one of its inner folders.
3. Make sure to use the right command for loading and saving data. There are different commands for text (strings) and different commands for numbers (real values). 
4. Use relative path for loading and reading ini files. I.e. `test.ini` if you wanna load a file from your LioranBoard folder or `/sound/test.ini` if you wanna load one from your LioranBoard/sound folder. 
5. You do not need to include the extension when loading a file. `test` is totally acceptable. 







