---
title: Sending webhooks to SAMMI
num: 1
---

The default URI is `localhost:9450/webhook` for all `POST` webhook requests.\
You must pass an `Authorization` header supplying the password if it's enabled in the SAMMI Settings.

| Parameter | Required | Type | Description
|-------|--------|--------
| request | yes | string | request name matching the webhook trigger `message` field attached to a button
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


