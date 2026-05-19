---
title: "Get Active EventSub Subscriptions"
num: 20
version: 202520
redirect_from:
  - commands/346
---

Retrieves a list of all your active EventSub subscriptions.

| Box Name | Type | Description | 
|-------|--------|--------
|Save Variable As|String|Variable to save the result|
{:class='table table-primary'}

**Saved Payload:**

SAMMI saves the full enabled EventSub subscriptions response returned by Twitch.

| Variable Name | Type | Description |
|-------|--------|--------|
data|Array|Array of active EventSub subscription objects.
data[`0-?`].id|String|Subscription ID.
data[`0-?`].status|String|Subscription status.
data[`0-?`].type|String|EventSub subscription type.
data[`0-?`].version|String|EventSub subscription version.
data[`0-?`].condition|Object|Condition object for the subscription.
data[`0-?`].transport|Object|Transport configuration for the subscription.
data[`0-?`].created_at|String|Time in Twitch format when the subscription was created.
data[`0-?`].cost|Number|Cost of the subscription.
total|Number|Total number of matching subscriptions.
total_cost|Number|Total cost of active subscriptions.
max_total_cost|Number|Maximum total subscription cost allowed by Twitch.
pagination|Object|Pagination data, if Twitch returns more pages.
{:class='table table-secondary w-auto table-hover text-break'}
