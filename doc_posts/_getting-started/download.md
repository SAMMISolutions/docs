---
layout: default
title: Download
menu: Getting Started
num: 2
permalink: /download
type: fullpage
---

### SAMMI Core, Bridge and Deck

When you download SAMMI, it comes with SAMMI Core, Bridge and SAMMI Deck for PC. You can download an Android Deck from [Google Play Store](https://play.google.com/store/apps/details?id=lioranboard.ca.lioranboard.streamdeck).

{% include alert.html text="Please note that the Android Deck was not made by the SAMMI Devs, and is utilising program code written and developed by Lioran for LioranBoard." %} 

SAMMI Core is only fully supported on Windows 10 and above, support for other platforms is coming!

You should be able to run it on Linux and MacOs using [Wine](https://www.winehq.org/), however we cannot guarantee its functionality and do not provide any technical support at this time. If you do use Wine, it will also need to be running Windows 10 ond above.

<iframe frameborder="0" src="https://itch.io/embed/1701438?dark=true" width="552" height="167"><a href="https://sammisolutions.itch.io/sammi">SAMMI by SAMMI</a></iframe>

*You can check our **[Discord's](https://discord.gg/dXez8Zh)** Announcements channel for unreleased and beta versions.* 

### Update
Updating directly in SAMMI is temporarily unavailable. You can download the `SAMMI Updater.exe` on our [SAMMI Itch Page](https://sammisolutions.itch.io/sammi) run it to update instead. This serves as a temporary updater while we deal with a malicious DMCA strike against our in-app updating GitHub repo. 

### Dependencies

**OBS Studio**     
SAMMI Core is compatible with OBS Studio. Other streaming software, such as Streamlabs OBS, is not currently supported.  

<a href="https://obsproject.com/"><button type="button" class="btn btn-outline-secondary">Download OBS Studio</button></a>
  
**OBS Websocket**       
This is how SAMMI Core communicates with OBS Studio. OBS Websocket 5.0 has been released publicly very recently and SAMMI is compatible with this version. However, as it is a recent release, some extensions that formerly worked on OBS Websocket 4.9.1 will not work if you switch to OBS Websocket 5.0.

You can download OBS Websocket 5.0 **along with** the OBS Websocket 4.9-compat in order to preserve backwards compatibility. However, this means you will need to set up two instances of OBS in SAMMI, one using 5.0 and one using the 4.9-compat version. 

For the time being, until you are sure your extensions have been fully updated to use OBS Websocket 5.0, we suggest staying on 4.9.1.

<a href="https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/"><button type="button" class="btn btn-outline-secondary">Download OBS Websocket</button></a>


### Extensions
Extensions can be found in our [Extensions](https://sammi.solutions/extensions) section or #releases channel in our **[Discord](https://discord.gg/dXez8Zh)** server!
