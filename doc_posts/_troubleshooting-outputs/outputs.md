---
title: Recording Outputs
num: 0
---

When troubleshooting problems, especially via the Discord server, you may be asked to record an output from SAMMI.\
To do so, you need to close SAMMI if it's open, head to your main SAMMI folder, open `Settings.ini`, and add one of the following to the `[settings]` section (not the `[last_crash_data]` section):

`record_pubsub="1"`\
`record_bridge="1"`\
`record_twitchchat="1"`\
`record_http="1"`\
`record_obs="1"`

After saving the settings.ini file, and relaunching SAMMI, a new text file will be created in your main SAMMI folder, named `record_(something).txt` (depending on what setting you added).

{% include alert.html text='Leaving any of these settings on may cause SAMMI to lag. Once you have finished your troubleshooting, remember to turn them off (by changing `"1"` to `"0"`, or by deleting that line, then saving the file).' type="warning" %} 

#### Record PubSub

The PubSub system allows Twitch to broadcast realtime messages to SAMMI (as well as other services, like StreamElements). Think of it like a radio station broadcast, and SAMMI is a radio that's tuned in to that frequency - it gets news, weather, and songs from the station. SAMMI then relays those to you in the form of triggers, such as Twitch Chat, New Follower, etc.\
Enabling this records that information to `record_pubsub.txt`

#### Record Bridge

The Bridge sends information to SAMMI from both extensions and the Test Triggers tabs.\
Enabling this records that information to `record_bridge.txt`

#### Record Twitch Chat

Not only does this include all chat messages sent in your Twitch chat (except messages sent by the main account linked in SAMMI), it also includes extra information, such as raid and host info (at least until they remove them... RIP hosts).\
Enabling this records that information to `record_twitchchat.txt`

#### Record HTTP

This logs all HTTP Requests send from SAMMI, and the response.\
Enabling this records that information to `record_http.txt`

#### Record OBS

This includes all websocket traffic between OBS and SAMMI.\
Enabling this records that information to `record_obs.txt`
