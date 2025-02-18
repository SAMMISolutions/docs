---
title: "Get User Status"
version: 202320
num: 17
redirect_from:
  - commands/303
---
Returns the status of a user for one of your linked channels. The response will return either true or false.\
Available status types:
- Check Subscriber
- Check Mod
- Check VIP
- Check Follower

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|Dropdown|Twitch channel to get a user's status for. This can be left empty.
|User Name|String|User Name of the user to get the status for.
|Type|Dropdown|Use the dropdown menu to choose the status type.
|Save Variable As|String|Name of the variable to save the response as.
{:class='table table-primary'}
