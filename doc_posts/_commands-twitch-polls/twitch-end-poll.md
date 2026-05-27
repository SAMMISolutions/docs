---
title: "End Poll"
num: 17
redirect_from:
  - commands/181
---

Ends a poll that is currently active.

| Box Name | Type | Description | 
|-------|--------|--------
|Login Name | Dropdown |Your Twitch login name (all lowercase characters)
|Status|Dropdown|TERMINATED: End the poll manually, but allow it to be viewed publicly.<br/>ARCHIVED: End the poll manually and do not allow it to be viewed publicly.
|Poll ID| String|	ID of the poll.|
{:class='table table-primary'}

**Twitch API Endpoint:** `PATCH /helix/polls`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | string | The ID of the broadcaster that's running the poll. |
| id | string | The ID of the poll to update. |
| status | string | The status to set the poll to. Possible values: `TERMINATED`, `ARCHIVED`. |
{:class='table table-secondary w-auto table-hover text-break'}











