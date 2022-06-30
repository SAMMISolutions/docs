---
title: "CSV Save"
num: 2
---

Saves your CSV file to a file path of your choice. The file path has to be the full file path of the file, ending with .csv, and currently works best if drive letters are in lowercase. Alternatively, you can use the `/$global.main_directory$/` variable to save your CSV to the default directory. 

When a CSV file is saved, an extra row appears at the bottom of the file that is used to save your default values. Modifying this extra row may result in your default values not being read properly by LioranBoard, and your CSV being corrupted. 

Note that the file path uses a forward slash instead of the Windows default back slash.

| Box Name | Type | Description | 
|-------|--------|--------
|CSV Name|String|Name of your CSV.
|File Path|String|File path to save to.
{:class='table table-primary'}

{% include example_public.html src="https://i.imgur.com/pqisayY.png" size="100" title="Save CSV file to default category" pastebin="mCDFXQJG" %} 







