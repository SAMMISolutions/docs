---
title: "Get Member List"
num: 7
redirect_from:
  - commands/451
---

Retrieves all current active members of your own YouTube channel. The command follows all result pages and saves the members as an array of objects.

This command requires a refresh token created with the channel-memberships permission. If the YouTube account was connected before this command was added, [authorize YouTube again]({{ "integrations/youtube/auth-memberships" | relative_url }}) and replace the old refresh token in SAMMI.

| Box Name | Type | Description |
|-------|--------|--------|
|Channel|Dropdown|Select your YouTube channel from the dropdown menu
|Save Variable As|String|Variable name in which the member array will be saved
{:class='table table-primary' }

Each member object contains the following values:

| Key | Description |
|-------|--------|
|`display_name`|Member's YouTube display name
|`user_id`|Member's YouTube channel ID
|`channel_url`|Member's YouTube channel URL
|`picture_url`|Member's profile image URL
|`level_name`|Highest currently accessible membership level name
|`level_id`|Highest currently accessible membership level ID
|`member_since`|Date and time the current continuous membership began
|`total_months`|Total number of complete membership months reported by YouTube
{:class='table table-primary' }

Some profile fields can be empty when a member no longer has an available YouTube channel profile.
