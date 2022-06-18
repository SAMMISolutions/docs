---
title: "Ban User"
num: 4
---

Bans a viewer. Must supply either their chat username (this will only work if they previously chatted in your current streaming session) or their channel ID.\
You can remove a timeout from a user by timing them out again with 0 seconds duration.

| Box Name | Type | Description | 
|-------|--------|--------|
|Channel|Dropdown|Select your YouTube channel from the drop down menu
| User Name or ID| String | Username or channel ID of the viewer you wish to ban
|Type|Dropdown|Ban type. Temporary means the user will be only timed out. 
|Duration|Number|(only if you selected temporary ban) Duration if timeout in seconds.
|Save Ban ID Variable As| String | Save the Ban ID into a Variable so you can later use it in [Unban User](#unbanuser) command.
{:class='table table-primary' }









