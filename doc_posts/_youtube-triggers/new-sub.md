---
title: New Subscriber
num: 2
---

Extension Trigger: `YT Live Subscriber`\
Triggers for all new subscribers to your channel.\
This particular endpoint is different from all other endpoints. It's polled once every minute.\
Retrieve the following values by using [Math: Trigger Pull]({{ "/commands/trigger#mathtriggerpull" | relative_url }}) command and selecting the specified Extension Trigger pull value from the dropdown menu.

{% include alert.html text="YouTube API might be delayed by several minutes or even hours after the subscription is created." type="warning" %} 

| Math Trigger Pull Value | Description | 
|-------|--------|
|Value 1|Subscriber's channel title. Chat display name not provided.|
|Value 2|Subscriber's channel ID|
|Value 3|Subscriber's profile (channel) image URL|
{:class='table table-primary w-auto table-hover data-toggle='table' text-break }





