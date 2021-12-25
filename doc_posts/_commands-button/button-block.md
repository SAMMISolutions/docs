---
title: "Block Button"
num: 3
---

Blocks a button by its ID or an entire Group ID.\
Won't cancel an ongoing button but will prevent any already existing queue from happening when its turn comes.\
The block does not persist when LioranBoard is restarted.\
By setting the ID to all you can remove all current blocks. This only works for unblocking buttons.


| Box Name | Type | Description | 
|-------|--------|--------
|Button ID or Group ID|	Any|	Button Id or Group ID to block/unblock
|Block|	boolean	|Select true to block a button and false to unblock a button
|Allow Queue|	boolean	|**True** = queue will wait for button to be unblocked and then will continue as normal <br/> **False** =  any queue when the button is blocked will be ignored and deleted 
|Self	|boolean|	If you selected `all` in your Button ID field, you can choose whether you want to clear this button as well. <br/>Does not work if the button ID is itself (in that case use False in Ongoing field).
{:class='table table-primary'}

{% include media_modal.html img="block-button1.png" vid="block-button.mp4" w="100" btn="1" alt="Enable BRB mode to temporarily disable button triggers" %} 






