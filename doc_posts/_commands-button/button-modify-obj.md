---
title: "Modify Button/Group From Object"
num: 1.1
---

Changes the appearance of a button or group (color, text, image and border) based on a provided object.\
All changes are temporary, the button will return to its original state if you reset or close and reopen SAMMI.\
Refer to [Modify Button/Group](#modifybuttongroup) command for further information about what values to use.

Example object: 

```json
{ 
    "color": 13057310, 
    "text": "Hello World", 
    "border": 2.0, 
    "image": "myImage.png" 
}
```

{% include alert.html text="SAMMI uses BGR colors. Use 'Swap red and blue' command if providing a RGB color." type="warning" %} 

| Box Name | Type | Description 
|-------|--------|--------
|Button/Group ID|	String| Button ID or group ID to change the appearance of
|Object Name|String|Object name containing your modifications
{:class='table table-primary'}

{% include media_modal.html img="modify_from_object.png" w="100" btn="1" alt="Example of a button modifying its own appearance" pastebin="afrvu1Ri" %} 







