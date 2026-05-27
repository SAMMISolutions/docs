---
title: "Get Shared Chat Session"
num: 1.21
version: 202440
redirect_from:
  - commands/339
---

Retrieves the active shared chat session for a Twitch channel.

If **Channel** is empty, SAMMI uses the default Twitch account. The command saves the active shared chat session object returned by Twitch. If there is no active shared chat session, the saved variable is set to `undefined`.

{% include async.html %}
{% include alert.html text="This command returns <strong>nothing</strong> if there isn't an active shared chat, leaving your variable with the result of <code>undefined</code>!" type="info" %}

| Box Name | Type | Description | 
|-------|--------|--------|
|Channel|Twitch Account|Channel name to get shared chat info from. Leave empty to use the default Twitch account.
|Save Variable As|String|Variable name to save the shared chat session object.
{:class='table table-primary'}

**Saved Payload:**

| Variable Name | Type | Description |
|---------------|------|-------------|
|session_id|String|The ID for the shared chat session.
|host_broadcaster_id|String|The User ID of the host channel.
|participants|Array|Array of objects for each participant of the shared chat session.
|participants[`0-?`].broadcaster_id|String|The User ID of the participant.
|updated_at|String|The time in Twitch format that the shared chat session was last updated.
|created_at|String|The time in Twitch format that the shared chat session was created.
{:class='table table-secondary w-auto table-hover text-break'}

{% include alert.html text="Requires the <code>user:read:email</code> Twitch scope for the selected channel/account." type="info" %}
