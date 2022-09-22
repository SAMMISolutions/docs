---
title: Dual PC Setup
num: 2
---

SAMMI can connect to your OBS from another PC, as long as they are both sharing the same network.

**PC running OBS**
1. Run your OBS as normal.
2. Open your command line (Windows + R, `cmd.exe`) and type `ipconfig`. Note down your IPv4 address. It probably starts with `192.168.`, but could start with `10.` instead.

**PC running SAMMI**
1. Open SAMMI Core, and open OBS Connections.
2. Enter your other PC's IPv4 address in the IP box.
3. Make sure your Port and Password match, as shown in the [instructions to set up an OBS connection]({{ "//getting-started/step-by-step#connectsammitoyourobs" | relative_url }}).
4. Click Connect.

As long as nothing is blocking the connection to your streaming PC (like your anti-virus or firewall), SAMMI should now be linked to your other PC's OBS.
{% include image.html w="50" src="obs-another-pc.png" alt="Modified &quot;OBS Connections&quot; to use OBS PC&prime;s IPv4 Address" %}

