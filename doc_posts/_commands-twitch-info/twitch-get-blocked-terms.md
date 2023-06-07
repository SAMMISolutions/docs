---
title: "Get Blocked Terms"
num: 2.4
version: 202322
redirect_from:
  - commands/314
---

Gets an array of blocked terms from a Twitch channel.

{% include alert.html text="This command needs some time to execute, either delay your next commands by 1-2 seconds or use <a href='/docs/commands/wait#waituntilvariableexists'>Wait Until Variable Exists</a> command." type="warning" %}

| Box Name | Type | Description | 
|-------|--------|--------
Channel|String|Channel name to get blocked terms of
Save Variable As|String|Variable to save the result
{:class='table table-primary'}


| Variable Name | Type | Description |
|---------------|------|-------------|
default|Array|Array of objects representing each blocked term
default[`0-?`]|Object|contains info for a blocked term
default[`0-?`].broadcaster_id|String|The broadcaster's ID
default[`0-?`].created_at|String|The UTC date and time, in RFC3339 format, of when the blocked term was created. Will be an empty string if the user is banned.
default[`0-?`].expires_at|String|The UTC date and time, in RFC3339 format, of when the blocked term expires. Will be `null` if there is no set expiration.
default[`0-?`].id|String|The blocked term's unique identifier
default[`0-?`].moderator_id|String|The ID of the moderator who added the blocked term
default[`0-?`].text|String|The blocked term itself!
default[`0-?`].updated_at|String|The UTC date and time, in RFC3339 format, of when the blocked term was updated.
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }