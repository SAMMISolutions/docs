---
title: "Block Button/Group"
num: 3
---

Blocks a button or group by its ID.\
Won't cancel an ongoing button/group but will prevent any already existing queue from happening when its turn comes.\
The block does not persist when LioranBoard is restarted.\
By setting the ID to all you can remove all current blocks. This only works for unblocking buttons.


| Box Name | Type | Description | 
|-------|--------|--------
|Button ID/Group ID|	Any|	Button ID or Group ID to block/unblock
|Block|	checkbox	|Select whether you want to block or unblock a button
|Allow Queue|	boolean	|**True** = queue will wait for button to be unblocked and then will continue as normal <br/> **False** =  any queue when the button is blocked will be ignored and deleted 
{:class='table table-primary'}

{% include media_modal.html img="block-button1.png" vid="block-button.mp4" w="100" btn="1" alt="Enable BRB mode to temporarily disable button triggers" %} 






