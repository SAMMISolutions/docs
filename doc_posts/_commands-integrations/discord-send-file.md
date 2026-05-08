---
title: "Discord: Send File"
num: 1.1
version: 202640
redirect_from:
  - commands/366
---

Uploads a single file to a Discord webhook.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|File Path|File Select|File to upload to Discord.
|Webhook URL|String|Discord webhook URL to send the file to.
{:class='table table-primary'}

Example:

| File Path | Webhook URL | Result |
|-------|--------|--------
|exports/screenshot.png|Your Discord webhook URL|Uploads `screenshot.png` to the Discord channel connected to the webhook.
|logs/latest.txt|Your Discord webhook URL|Uploads the text file to Discord.
{:class='table table-secondary w-auto table-hover text-break'}

This command is useful together with `Source Save Screenshot`, `File: Folder Read Files`, or log/export workflows.

{% include alert.html text="Make sure the webhook URL is kept private. Anyone with access to it can send messages to that Discord channel." type="warning" %}
