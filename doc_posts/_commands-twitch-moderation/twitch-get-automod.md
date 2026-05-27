---
title: "Get Automod Settings"
num: 8.3
version: 202320
redirect_from:
  - commands/304
---

Gets AutoMod settings for a Twitch channel. This only works for channels linked and authorized to be used with SAMMI.

If **Channel** is empty, SAMMI uses the default Twitch account. The response is saved as an object containing the AutoMod level fields returned by Twitch.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|Channel name to get AutoMod settings for. This can be left empty.
|Save Variable As|String|Name of the variable to save the response as. If the response is 0, AutoMod settings for that function has not been turned on. If it is 1, it has been turned on. 
{:class='table table-primary'}

**Saved Payload:**

SAMMI saves the first AutoMod settings object returned by Twitch (`data[0]`).

| Variable Name | Type | Description |
|-------|--------|--------|
|broadcaster_id|String|Twitch User ID of the broadcaster.
|moderator_id|String|Twitch User ID of the moderator account used for the request.
|overall_level|Number|Overall AutoMod level. Twitch may return `null` if individual settings are used.
|disability|Number|AutoMod level for disability-related terms.
|aggression|Number|AutoMod level for aggression.
|sexuality_sex_or_gender|Number|AutoMod level for sexuality, sex, or gender terms.
|misogyny|Number|AutoMod level for misogyny.
|bullying|Number|AutoMod level for bullying.
|swearing|Number|AutoMod level for swearing.
|race_ethnicity_or_religion|Number|AutoMod level for race, ethnicity, or religion terms.
|sex_based_terms|Number|AutoMod level for sex-based terms.
{:class='table table-secondary w-auto table-hover text-break'}

{% include alert.html text="Requires the <code>moderator:read:automod_settings</code> and <code>user:read:email</code> Twitch scopes." type="info" %}
