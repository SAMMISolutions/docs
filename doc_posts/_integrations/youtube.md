---
layout: default
title: YouTube Live
menu: Integrations
num: 3
type: fullpage
permalink: /integrations/youtube
---

#### Introduction

YouTube Live is a completely free SAMMI integration made by [Christina K](https://github.com/christinna9031?tab=repositories).\
It allows you to listen to all chat events, send chat messages, ban users and other commands straight from SAMMI while streaming on YouTube Live.  

Unlike Twitch, YouTube API is very limited and cannot be freely used without going through a long approval process. It has taken several months for YouTube to approve the integration and provide me with additional quota to be able to release it for everyone.

Please consider [donating](https://sammi.solutions/donate) or supporting me on [Patreon](https://www.patreon.com/Christinna?fan_landing=true), so I can keep further developing and maintaining the integration. Thank you!  



#### Link your account

You must [Authorize the integration]({{ "integrations/youtube/auth" | relative_url }}) to allow SAMMI access to your YouTube Live account and to retrieve your refresh token. 

{% include alert.html text="Keep your refresh token safe! If you accidentally share it with someone, you can go to the <a href='https://myaccount.google.com/permissions?continue=https%3A%2F%2Fmyaccount.google.com%2Fsecurity'>Google security settings page</a> to revoke user access to SAMMI in your Google account and authorize it again." type="warning" %}

1. Retrieve your refresh token from the link provided above
2. In your SAMMI, go to **YouTube Connection** and paste your Refresh Token in the Refresh Token box. 
3. Press **Link**.

{% include video.html w="75" src="youtube_auth.mp4" alt="YouTube Linking an account" %}


#### Quotas

YouTube Live API uses a quota system to ensure that developers use the service as intended and do not create API clients that unfairly reduce service quality or limit access for others.\
SAMMI has been given a global quota of 8000000 units/day. This is quota for all users combined using the integration.\
Individual users have a **max quota of 500 units/minute**. **This in no way means you should use up all your quota every minute**, it's rather a hard limit to prevent spam. It might be a subject to change later depending on how many users use the integration and if we can get a higher quota approved by YouTube.  


Find the quota cost table below. YouTube Live API does not provide this information for some of the commands. Those were calculated by my own observations and might be a subject to change at anytime.  


*Max per minute is a rough estimate as it depends on how often the integration polls new chat messages per minute.*

| Command | Cost | Max per minute| Additional Info |
|-------|--------|--------
|Get chat messages|  5 units | N/A | Chat messages are polled based on the amount of viewers or whatever YouTube API dictates. They can cost anywhere from 30-150 units/minute.|
|Send a chat message| 20 units | 23 | Group up your chat messages or show them on screen instead to save your quota.
|Ban a user |200 units| 2 | This is a very expensive endpoint. It's recommended to ban users manually if you need to go through a lot of names.| 
|Change Status |50 units| 9 | 
|Channel Stats |1 unit | N/A | Your channel stats are retrieved once every streaming session. |
|Get Live Stats |1 unit | 1 | Get Broadcast Stats is automatically polled every minute by the integration. Using the SAMMI command does not increase the cost.|
|Get Subscribers|1 unit | 470 | Checking for new subscribers is done once per minute. Using the `Check Subscriber Status` command will cost you an additional 1 unit.
|Get Member Info |2 units|235|
{:class='table table-primary w-auto table-hover data-toggle='table'} 

If you run out of your individual quota, you will get an alert message `You have exceeded your user quota. Slow down!` in SAMMI and will not be able to listen to new events or use any commands for 1 minute before your quota is replenished. You might need to reload the Bridge as well. 

#### Terms of Service 
By using the SAMMI Youtube Live (“Service) integration created by Christina K. ( “We”, “Us”, “Our" ), you are agreeing to be bound by the following terms and conditions ("Terms of Service").<br/>

If the owner makes material changes to these Terms, we will post a notice in the official SAMMI Discord server and on our site before the changes are effective. Any new features that augment or enhance the current Service shall be subject to the Terms of Service. Continued use of the Service after any such changes shall constitute your consent to such changes.<br/>

Violation of any of the terms below will result in the termination of your Account. You agree to use the Service at your own risk.

1. You must be 13 years or older to use this Service.
2. You are responsible for maintaining the security of your account and specifically your refresh token. We cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.<br/>

Users may access the integration via SAMMI. Any use of the integration is bound by these Terms of Service, [Youtube’s Terms of service](https://www.youtube.com/t/terms), plus the following specific terms:

1. You expressly understand and agree that we shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses, resulting from your use of the integration.
2. Abuse or excessively frequent requests to Youtube Live API by modifying the integration code for your own use may result in the temporary or permanent suspension of your account's access to the integration.
3. We reserve the right at any time to modify or discontinue, temporarily or permanently, your access to the integration (or any part thereof) with or without notice.
4. You may not duplicate, copy, or reuse any portion of the integration code or concepts without express written permission from us.
Your use of the Service is at your sole risk. The service is provided on an "as is" and "as available" basis.
5. If your quota usage significantly exceeds the average quota usage (as determined solely by us) of other SAMMI users, we reserve the right to throttle your API requests until you can reduce your quota consumption.
6. We do not warrant that (i) the service will meet your specific requirements, (ii) the service will be uninterrupted, timely, secure, or error-free, (iii) the results that may be obtained from the use of the service will be accurate or reliable, (iv) the quality of any products, services, information, or other material purchased or obtained by you through the service will meet your expectations, and (v) any errors in the Service will be corrected.
7. You expressly understand and agree that we shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses.
The failure to exercise or enforce any right or provision of the Terms of Service shall not constitute a waiver of such right or provision.
8. Questions about the Terms of Service should be sent to <a href='mailto&#58;ch&#114;is%74&#105;%6En%61&#37;2E&#107;r&#64;gma%6&#57;l&#46;co&#109;'>chri&#115;t&#105;n&#110;&#97;&#46;&#107;r&#64;g&#109;ail&#46;com</a>.


#### Privacy Policy
{:#privacypolicy}

SAMMI and its developer prioritize your privacy and treat all personal data with utmost care. SAMMI is a desktop application that you run locally on your own computer. It connects only to your own YouTube account and accesses data only for your own channel. This policy describes exactly how SAMMI accesses, uses, stores, shares, retains and deletes Google user data, in accordance with the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) (including the Limited Use requirements).

**Data Accessed.** When you authorize the integration, SAMMI accesses the following data, exclusively for your own channel: your channel profile and statistics (channel name, avatar, subscriber/view/video counts); your live broadcast details and statistics (title, description, category, views, likes, concurrent viewers); your live chat messages and chat events (including new and milestone channel memberships, Super Chats and Super Stickers); your subscriber information (new subscribers and a viewer's subscription status); and your active channel members, including each member's current membership level and the date they became a member.

**Data Usage.** This data is used solely to provide the integration's features on your own stream: displaying your channel and stream information in SAMMI and in your own overlays, and triggering local automations you configure (e.g. alerts, sounds and overlay effects in response to chat messages, subscribers, memberships, Super Chats and Super Stickers). The integration also performs actions that you yourself initiate on your own broadcast, such as sending a chat message, moderating (timing out, banning or unbanning a viewer), updating your stream title/description/category, and starting an ad break. SAMMI does not use Google user data for advertising, profiling, or any purpose unrelated to these features.

**Data Sharing.** SAMMI does not sell, transfer or share your Google user data with any third party. The only external system involved is our secure AWS API, which acts purely as an intermediary to perform the OAuth token exchange with Google over HTTPS; it does not store your data or credentials. We do not transfer Google user data to any other party, AI/ML model, or service.

**Data Storage & Protection.** All Google user data and credentials are stored **only locally on your own computer**. Your YouTube Live credentials (including your refresh token) are never stored on our servers. Accessing data via YouTube API Services is performed by Bridge, a local HTML file that relays data over a local websocket connection to SAMMI on the same machine. All communication with Google and our AWS API is encrypted in transit via HTTPS.

**Data Retention & Deletion.** Because all data is stored locally, it is retained only on your own computer for as long as you choose to keep it. You can delete all stored data at any time by unlinking the integration and removing your local SAMMI data, and you can revoke SAMMI's access to your Google account at any time via the [Google security settings page](https://myaccount.google.com/permissions). Revoking access immediately stops any further data access.

SAMMI's use and transfer of information received from Google APIs adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements. SAMMI uses YouTube API Services as part of its functionality; for more information about how YouTube manages and protects your data, please see the [Google Privacy Policy](https://policies.google.com/privacy), which also governs your use of YouTube API Services. For any privacy questions, or to request deletion of data, contact us at <a href='mailto&#58;ch&#114;is%74&#105;%6En%61&#37;2E&#107;r&#64;gma%6&#57;l&#46;co&#109;'>chri&#115;t&#105;n&#110;&#97;&#46;&#107;r&#64;g&#109;ail&#46;com</a>.

Please be assured that we are committed to ensuring the privacy and security of your data at all times.


