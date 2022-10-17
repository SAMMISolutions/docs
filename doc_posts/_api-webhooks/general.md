---
title: Receiving webhooks in SAMMI
num: 1
---

You can receive a webhook trigger in SAMMI by following these steps: 
1. Create a new button and add a Webhook Trigger
    - the `Message` field must match the `trigger` key supplied in the HTTP Request
    - If you leave `*` in the `Message` field it will accept any webhook triggers  

    
      {% include video.html w="75" src="add_trigger.mp4" alt="Adding a webhook trigger" %}

2. Add `Trigger Pull Data` command inside the button that will pull any data supplied in the webhook request body when SAMMI receives the trigger.
   {% include image.html w="75" src="pull_data.png" alt="Pull Webhook data" %}
