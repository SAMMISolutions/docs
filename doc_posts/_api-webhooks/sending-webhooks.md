---
title: Sending webhooks to SAMMI
num: 1
---

The default URI is `localhost:9450/webhook` for all `POST` webhook requests.\
You must pass an `Authorization` header supplying the password if it's enabled in the SAMMI Settings.

{% include alert.html text="Using C#? <code>System.Net.ServicePointManager.Expect100Continue</code> must be set to <code>false</code> to stop the header “Expect: 100-Continue” from being sent with the request as SAMMI will not handle it properly." type="warning" %} 

| Parameter | Required | Type | Description
|-------|--------|--------
| trigger | yes | string | trigger name matching the webhook trigger `message` field attached to a button
| any | no | any | Any custom data you wish to pass to SAMMI
{:class='table table-primary' }


**Example Request**

```
{
	"trigger": "myWebhookTrigger",
	"customData": "Some cool data",
	"customObjectData": {
		"key": "Hello World",
		"anotherKey": "Bye"
	},
	"customArrayData": ["Silver", "Sugar"]
}
```


