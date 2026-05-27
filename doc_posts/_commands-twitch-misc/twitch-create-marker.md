---
title: "Create Marker"
num: 15
redirect_from:
  - commands/179
---

Creates a marker in your stream. Your stream must be live.\
A marker is an arbitrary point in a stream that the broadcaster wants to mark; e.g., to easily return to later.\
The marker is created at the current timestamp in the live broadcast when the request is processed.

| Box Name | Type | Description | 
|-------|--------|--------
|Login Name | Dropdown |Your Twitch login name (all lowercase characters)
|Description|String|Description of or comments on the marker. Max length is 140 characters.
{:class='table table-primary'}

**Twitch API Endpoint:** `POST /helix/streams/markers`

| Request Field | Type | Description |
|-------|--------|--------
| user_id | string | The ID of the broadcaster in whose live stream the marker is created. |
| description | string | A short description of the marker to help you remember why you created it. Maximum: 140 characters. |
{:class='table table-secondary w-auto table-hover text-break'}











