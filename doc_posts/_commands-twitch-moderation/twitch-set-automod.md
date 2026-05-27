---
title: "Set Automod Settings"
num: 8.4
version: 202320
redirect_from:
  - commands/305
---

Sets AutoMod settings for a Twitch channel. This only works for channels linked and authorized to be used with SAMMI.\
Moderation levels available: as provided by Twitch:
- AutoMod Off
- A Little Moderation
- Some Moderation
- More Moderation
- A Lot of Moderation 

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|Channel name to get AutoMod settings for. This can be left empty.
|Level|Dropdown|Dropdown selection of AutoMod levels available.
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:automod_settings</code> Twitch scope." type="info" %}

**Twitch API Endpoint:** `PUT /helix/moderation/automod/settings`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster whose AutoMod settings to update |
| moderator_id | String | The ID of the moderator or broadcaster making the request |
| overall_level | Integer | Optional. Global AutoMod level (0–4). Setting this overrides all individual category levels |
| disability | Integer | Optional. AutoMod level for disability-related terms (0–4) |
| aggression | Integer | Optional. AutoMod level for aggression (0–4) |
| sexuality_sex_or_gender | Integer | Optional. AutoMod level for sexuality, sex, or gender terms (0–4) |
| misogyny | Integer | Optional. AutoMod level for misogyny (0–4) |
| bullying | Integer | Optional. AutoMod level for bullying (0–4) |
| swearing | Integer | Optional. AutoMod level for swearing (0–4) |
| race_ethnicity_or_religion | Integer | Optional. AutoMod level for race, ethnicity, or religion (0–4) |
| sex_based_terms | Integer | Optional. AutoMod level for sex-based terms (0–4) |
{:class='table table-secondary w-auto table-hover text-break'}
