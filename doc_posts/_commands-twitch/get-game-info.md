---
title: "Get Game Info"
num: 7
---

Gets game information by game name.

| Box Name | Type | Description | 
|-------|--------|--------
|Game Name|String|Game name. The name must be an exact match. For example, “Pokemon” will not return a list of Pokemon games; instead, query any specific Pokemon games in which you are interested. At most 100 name values can be specified.
|Save Variable|String|Variable name to save the response 
{:class='table table-primary'}

Response fields: 

| Field | Type| Description| 
|-------|--------|--------
box_art_url | Object	| Template URL for the game’s box art.
id	| string |	Game ID.
name |	string	| Game name.
{:class='table table-secondary w-auto table-hover' }











