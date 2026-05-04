---
title: "Create Poll"
num: 16
redirect_from:
  - commands/180
---

Creates a new poll for your channel. Must be at least affiliate. Minimum amount of 2 choices.
For more information on creating polls, check out the [Twitch API Reference Guide for Create Poll](https://dev.twitch.tv/docs/api/reference/#create-poll).

| Box Name | Type | Description | 
|-------|--------|--------
|Login Name | Dropdown |Your Twitch login name (all lowercase characters)
|Poll Name|String|Question displayed for the poll. Maximum: 60 characters.
|Choice 1|String|Text displayed for the first choice. Maximum: 25 characters.
|Choice 2|String|Text displayed for the second choice. Maximum: 25 characters.
|Choice 3|String|Optional third choice. Maximum: 25 characters.
|Choice 4|String|Optional fourth choice. Maximum: 25 characters.
|Choice 5|String|Optional fifth choice. Maximum: 25 characters.
|Dur.(s)|Number {% include asterisk.html%}|Total duration for the poll in seconds.
|Points|Number {% include asterisk.html%}|Number of Channel Points required to vote once with Channel Points. Minimum: 0. Maximum: 1000000.
{:class='table table-primary'}

{% include alert.html text="Requires the <code>channel:manage:polls</code> Twitch scope." type="info" %}










