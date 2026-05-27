---
title: "Get Videos"
version: 202320
num: 16
redirect_from:
  - commands/302
---
Gets videos from a Twitch channel.\
Available types of videos:
- All Videos 
- Archives
- Highlights
- Uploads
- Clips

If 'All Videos' is selected, the response will not contain 'Clips'. The response received, depending on the size of the request, will require some time to load, so please ensure you use a 'Wait Until Variable Exists' command with this one.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|Dropdown|Twitch channel to get videos from. This can be left empty.
|Type|Dropdown|Dropdown of video types that can be received from Twitch.
|Save Variable As|String|Name of the variable to save the response as.
{:class='table table-primary'}

**Saved Payload:**

SAMMI saves the full response object returned by Twitch. For **Clips**, `data` contains clip objects. For all other video types, `data` contains video objects.

| Variable Name | Type | Description |
|-------|--------|--------|
|data|Array|Array of video or clip objects returned by Twitch.
|data[`0-?`].id|String|Video or clip ID.
|data[`0-?`].user_id|String|Twitch User ID of the broadcaster or video owner.
|data[`0-?`].user_login|String|Login name of the broadcaster or video owner.
|data[`0-?`].user_name|String|Display name of the broadcaster or video owner.
|data[`0-?`].title|String|Video or clip title.
|data[`0-?`].url|String|Twitch URL for the video or clip.
|data[`0-?`].thumbnail_url|String|Thumbnail URL.
|data[`0-?`].created_at|String|Time in Twitch format when the video or clip was created.
|data[`0-?`].view_count|Number|View count, if Twitch returns it for the selected type.
|data[`0-?`].duration|String|Video duration for video responses.
|data[`0-?`].type|String|Video type for video responses.
|pagination|Object|Pagination data, if Twitch returns more pages.
{:class='table table-secondary w-auto table-hover text-break'}
