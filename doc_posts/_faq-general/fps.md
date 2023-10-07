---
title: SAMMI FPS
num: 10
---

Full FPS is enabled when SAMMI is in focus. When SAMMI is not in focus, FPS is severely limited to save resources.  
In order to enable full FPS even when SAMMI is not in focus, you can add the following key to `settings.ini` file in your SAMMI folder: 
```
[settings]
fullFPS="1"
```
The changes will take effect after restarting SAMMI.  

{% include alert.html text="This will use more resources and may cause performance issues on some systems." type="warning" %}