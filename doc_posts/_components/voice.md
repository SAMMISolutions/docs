---
layout: default
title: SAMMI Voice
menu: Components
num: 5
type: fullpage
permalink: /voice
version: 202320
---
## Introduction
SAMMI Voice is a component of SAMMI that allows you to trigger your SAMMI buttons using customised spoken words or phrases. SAMMI Voice uses Microsoft Speech Recognition software that is built into Windows 10 and up.

## Setup
### Microsoft Speech Recognition
As SAMMI Voice uses Microsoft Speech Recognition, first you will have to ensure that the Speech Recognition software has been properly set up on your system. For a step by step tutorial on how to set this up, please visit [Microsoft's Support Page](https://support.microsoft.com/en-us/windows/use-voice-recognition-in-windows-83ff75bd-63eb-0b6c-18d4-6fae94050571).

{% include alert.html text="It is highly recommended you go through the steps to 'Train your computer to better understand you' so that SAMMI Voice can properly detect your voice and accent when used to trigger buttons. This can be found in the Windows Speech Recognition settings." type="info" %}

Once you have Microsoft Speech Recognition set up and trained, open up SAMMI Core and click on SAMMI Voice on the left side of the window.

### SAMMI Connection and Settings
{% include image.html w="75" src="voice.png" alt="Settings window for SAMMI Voice" %}

If SAMMI Voice is running on the same system as SAMMI Core, you will not need to change the default IP address of `127.0.0.1`. If it is on a different system, use the IP address of the PC where your SAMMI Core is running from.

The port number should not be altered, except in some very small cases. SAMMI Voice uses the port in your local API settings of 9450.

The password for SAMMI Voice is optional. If you do want to set a password, ensure that you set it so it matches the `Password` field in your SAMMI Core settings for your local API. 

{% include image.html w="75" src="voice2.png" alt="Local API settings in SAMMI Core" %}

If you want SAMMI Voice to immediately start listening when you open SAMMI Voice, tick the 'Listen on Startup' checkbox.

If you want SAMMI Voice to minimise to the System Tray when you close the window, tick the 'Minimize only to SysTray checkbox. 

If you want SAMMI Voice to show a confirmation dialog box when you close the window, tick the 'Closing Confirmation' checkbox.

### Triggers
The Triggers tab for SAMMI Voice is where you list all the triggers you want to use to trigger your SAMMI buttons. Each line represents a different trigger that can be used on your buttons.

## Creating a voice activated button on SAMMI Core

#### Add a trigger to SAMMI Voice and a SAMMI Core button
In SAMMI Voice, in the triggers tab, type the word or phrase that you want to use to trigger a button. In this example, we will use the trigger `Testing`. 

Triggers can only be added when SAMMI Voice is not listening. If you are listening, click 'Stop Listening' before adding a new trigger. Once you are done adding your trigger, you can click 'Start Listening'. 

Create a button in SAMMI Core, setting the trigger as a 'SAMMI Voice' trigger. Enter `Testing` as the trigger. 

{% include image.html w="75" src="voice3.png" alt="Creating a voice activated button" external="true" %}

This button will now be triggered when you say `Testing` and for this example, a pop up window will show up with the phrase 'Testing is a success!'

{% include video.html w="75" src="Vid 070423 174551.mp4" alt="SAMMI Voice Example" %}



