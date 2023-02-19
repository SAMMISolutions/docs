---
title: "Block Button/Group"
num: 3
redirect_from:
  - commands/189
---

Blocks or unblocks a button/group by its ID.\
Won't cancel an ongoing button/group but will prevent any already existing queue from happening when its turn comes.\
The block does not persist when SAMMI is restarted.\
By setting the ID to all you can remove all current blocks. This only works for unblocking buttons.


| Box Name | Type | Description |
|-------|--------|--------
|Button ID/Group ID|	Any|	Button ID or Group ID to block/unblock
|Block|	Checkbox	|**Checked** = block a button, **Unchecked** = unblock a button
|Allow Queue|	Checkbox	|**Checked** = queue will wait for button to be unblocked and then will continue as normal <br/> **Unchecked** =  any queue when the button is blocked will be ignored and deleted
{:class='table table-primary'}






