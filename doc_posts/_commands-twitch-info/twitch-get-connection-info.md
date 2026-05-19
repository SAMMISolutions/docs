---
title: "Get Connection Info"
num: 1
redirect_from:
  - commands/105
---

Get connection information for the selected Twitch account, such as your User ID or OAuth Token. 

{% include alert.html text="Be careful when pulling your OAuth token info. Make sure to delete the variable when you don't need it anymore. Do not accidentally expose it on your stream." type="danger" %} 

| Box Name | Type | Description | 
|-------|--------|--------
Login Name | String | Your Twitch login name
Save Variable As| String | Variable to save the result
Type | Dropdown |  Value to get. User ID, OAuth token, Login Name or Display Name
{:class='table table-primary'}

**Saved Value:**

| Type Selection | Saved Type | Description |
|-------|------|-------------|
|User ID|String|The connected Twitch account's user ID.|
|OAuth Token|String|The connected Twitch account's OAuth token.|
|Login Name|String|The connected Twitch account's login name.|
|Display Name|String|The connected Twitch account's display name.|
{:class='table table-secondary w-auto table-hover text-break'}







