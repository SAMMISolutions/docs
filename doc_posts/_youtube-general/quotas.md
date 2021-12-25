---
title: Quota usage and limits
num: 2
---

YouTube Live API uses a quota system to ensure that developers use the service as intended and do not create API clients that unfairly reduce service quality or limit access for others.\
LioranBoard has been given a global quota of 8000000 units/day. This is quota for all users combined using the integration.\
Individual users have a **max quota of 500 units/minute**. **This in no way means you should use up all your quota every minute**, it's rather a hard limit to prevent spam. It might be a subject to change later depending on how many users use the integration and if we can get a higher quota approved by YouTube.  


Find the quota cost table below. YouTube Live API does not provide this information for some of the commands. Those were calculated by my own observations and might be a subject to change at anytime.  


*Max per minute is a rough estimate as it depends on how often the integration polls new chat messages per minute.*

| Command | Cost | Max per minute| Additional Info |
|-------|--------|--------
|Get chat messages|  5 units | N/A | Chat messages are polled based on the amount of viewers or whatever YouTube API dictates. They can cost anywhere from 30-150 units/minute.|
|Send a chat message| 20 units | 23 | Group up your chat messages or show them on screen instead to save your quota.
|Ban a user |200 units| 2 | This is a very expensive endpoint. It's recommended to ban users manually if you need to go through a lot of names.| 
|Update broadcast |50 units| 9 | 
|List Categories| 1 unit | N/A | Categories are retrieved once every streaming session.|
|Get Channel Stats |1 unit | N/A | Your channel stats are retrieved once every streaming session. |
|Get Broadcast Stats |1 unit | 1 | Get Broadcast Stats is automatically polled every minute by the integration. Using the LB command does not increase the cost.|
|Get Subscribers|1 unit | 470 | Checking for new subscribers is done once per minute. Using the `Check Subscriber Status` command will cost you an additional 1 unit.
|Get Member Info |2 units|235|
{:class='table table-primary w-auto table-hover data-toggle='table'} 

If you run out of your individual quota, you will get an alert message `You have exceeded your user quota. Slow down!` in LioranBoard and will not be able to listen to new events or use any commands for 1 minute before your quota is replenished. You might need to reload the Transmitter as well. 








