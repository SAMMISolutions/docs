---
title: Introduction
num: 1
---

There are two ways to communicate with SAMMI: 

1. Via its websocket using [Bridge helper functions](https://github.com/SAMMISolutions/SAMMI-Bridge#sammi-bridge)
2. Via its API 

While SAMMI's websocket is convenient for continuous back and forth communication with faster responses, its implementation is a bit more complicated, as you need to create a Bridge extension and handle any communication in the extension code.\
On the other hand, if you only need to request or send one piece of information at the time, you can simply call SAMMI's API with a HTTP request, coming from your browser, command line or a third party app that can execute it.