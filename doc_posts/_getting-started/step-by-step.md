---
layout: default
title: Step by step tutorial
menu: Getting Started
num: 3
permalink: /getting-started/step-by-step
type: fullpage
---

So you have discovered LioranBoard... I can only say: Welcome to the world of endless possibilities!

We will walk you through a step by step tutorial on how to set up LioranBoard, and connect it to OBS and your Twitch account. You will also learn how to create your first button, add a command and trigger it via Twitch chat. 

{% include alert.html text="LioranBoard is a closed source application made for Windows. Our tutorial covers its usage in Windows only. " type="warning" %} 

#### 1. Install all dependencies
- Download and install **[OBS Studio](https://obsproject.com/)**. As of now, LioranBoard does not support other streaming software.
- Download and install **[OBS Websocket](https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/)** (4.X) This is how LioranBoard communicates with OBS Studio. Please note that LioranBoard is not compatible with OBSWS 5.0 and up. 

#### 2. Download LioranBoard

<a href="https://obsproject.com/forum/resources/lioranboard-stream-deck-animator.862/"><button type="button" class="btn btn-primary mt-1">Download LioranBoard</button></a>
  
Unpack the zip file and place the folder anywhere in your computer, preferably in your non windows drive. 

{% include alert.html text="Do not place lioranboard folder in your Program files, as it sometimes can cause issues." type="danger" %} 

#### 3. Launch LioranBoard Receiver

Navigate to lioran/LioranBoard Receiver(PC) folder and launch LioranBoard Receiver.exe ('Receiver').    
Allow the app through the firewall if there's a prompt and slowly work your way through the onscreen built-in tutorial.    
There is much to learn, take your time to read everything carefully and do not skip any of the parts, as they are all essential to using LioranBoard. 

{% include image.html w="75" src="receiver_tutorial.png" alt="LioranBoard Receiver" type="image" %}  

#### 4. Connect Receiver to your OBS

1. In your OBS go to Tools-Websocket Server Settings. Uncheck 'Enable authorization' (for easy setup, you can change it later) and press OK. 
	  
	{% include image.html w="100" src="obsws_settings.png" alt="OBS Websocket Settings" type="image" %}


{:start="2"}
2. In your Receiver main menu press **Connect to OBS** button. It will grey out and you will see 3 yellow notification messages at the bottom of your Receiver. That means OBS is connected!

	{% include image.html w="100" src="connect_obs_message.png" alt="OBS Websocket Connection Messages" type="image" %}

#### 5. Add Transmitter to your OBS Dock

In your OBS menu navigate to View - Docks - Custom Browser Docks. Your new dock name can be `Transmitter` and the URL will be the path to the `tsl_transmitter.html` file located in your `lioranboard` folder.     
Press apply and you should see your new dock. If it does not pop up for some reason, you can always press View - Docks - Transmitter.   
Fit your new dock somewhere in your OBS screen as you see fit. 

{% include image.html w="100" src="transmitter_dock.png" alt="OBS Dock Settings" type="image" %}


{% include alert.html text="Transmitter must be running at all times. Do not close it while LioranBoard is on." type="danger" %} 

Inside the dock you should see **{% include colored_text.html color="green" text="Connected" %}** or {% include svg_dot.md color="green" %} next to Receiver. This means it is connected to your Receiver and listening for messages. 

{% include image.html w="50" src="transmitter_dock2.png" alt="Transmitter Dock added to OBS" type="image" %}

#### 6. Link your Twitch account

Linking your Twitch account to LioranBoard is a necessary step if you want to be able to listen to alerts and control your Twitch via LioranBoard.\
*You can link multiple Twitch accounts, however in this tutorial we will focus on connecting your main account.*

1. In your Receiver click on **Link your Twitch** button. 
A new menu will pop up and you will see a bunch of options to check and select between main and alternate accounts. Leave them all at default values. 
2. Click on **Open URL** which should open a new browser window and redirect you to Twitch to authorize LioranBoard.  
Press **Authorize** and wait to be redirected again to see `All good, you can go back to LioranBoard now` message in your browser.
3. Go back to your Receiver. You should see a green text `Token was obtained successfully. Token will expire on XXX.` It means you will need to repeat this process again on this date. Don't worry, LioranBoard will remind you when it's due. Press Close.

	{% include image.html w="75" src="twitch_connect.png" alt="Successfully linked Twitch account" type="image" %}

{:start="4"}	
4. Press **Connect to Twitch** button. The button will grey out and you should see **all** the following yellow notification messages: 

	{% include image.html w="100" src="twitch_connected_message.png" alt="Successfully connected to Twitch" type="image" %}

   In your Transmitter, Pubsub and Chat status should change to **{% include colored_text.html color="green" text="Connected" %}** or {% include svg_dot.md color="green" %}. Congratulations, your Twitch account is now connected!    


{% include alert.html text="Your Transmitter must be running at all times for Twitch to stay connected." type="warning" %} 

#### 7. Create your first button

In this part of the tutorial we will learn how to create a button with a simple command and add a Twitch chat trigger to it.     
You can follow the text instructions or click on <i class="far fa-plus-square fa-2x mx-auto"></i> to watch a short video.

{% include alert.html text="Pressing Done <b>twice</b> (once in your edit button screen and once in your edit deck screen) is essential to saving any changes you make to a button." type="warning" %}

<ol>
<li> {% include video_collapse.html w="80" alt="Creating a new deck" src="create_deck.mp4" %}   
  
  In your Receiver click on <strong>Add New Deck</strong> button. You should see a newly created blank deck named New Deck 6. Click on it.  
  </li>


<li> {% include video_collapse.html w="80" name="add_button" alt="Creating a new button" src="create_button.mp4" %} You will see an empty grid. This is your deck where you can create new buttons.  
Right click anywhere in the emtpy area and select <strong>Create Blank Button</strong>. A new empty button will be created. You can optionally add some text to it as well.   
 </li>

<li> {% include video_collapse.html w="80" src="add_command.mp4" alt="How to add commands to a button" %} Right click on the empty button - <strong>Add Commands</strong>.  
 </li>

<li> {% include video_collapse.html w="80" src="create_command.mp4" alt="Adding a new command to a button" %} Click on the <strong>+</strong> symbol. A default command Math: Change Variable will be created. Left click on the field with its name and change it to <strong>Twitch: Chat Message</strong> command instead. 
 </li>

<li>  {% include video_collapse.html w="80" src="populate_command.mp4" alt="Edit Twitch: Chat button command" %} Populate the fields: 
    <ol>
	  <li> <code>Message</code> - Put a random text in there. For example <code>Hello World!</code>. </li>
	  <li> <code>Channel Name</code> - Leave empty </li> </ol>

	Press <b>done</b> once you're finished. 

<li>  {% include video_collapse.html w="80" src="add_trigger.mp4" alt="Edit Twitch: Chat button command" %} Back at our main deck view, right click on the new button - Add Twitch Triggers. This is where you assign Twitch events  (such as new subscriber or chat message) to automatically trigger your buttons.
	<ol>
  <li> Click on the + sign - Chat Message.</li> 
  <li>Populate the Message field with <code>!test</code>. </li>
  <li>Press Done. </li>
   </ol>
</li> 

<li>Once you're back at your main deck view, press <strong>Done</strong>.</li>

We have now created a button that will send a chat message <code>Hello World</code> anytime it's triggered. We have also created a Twitch chat trigger which will execute the button any time someone types <code>!test</code> in your Twitch chat. 

<br><p>

<h5>Trigger the button manually from Stream Deck</h5>

<ol> 
	<li> <p> Navigate to lioranboard/LioranBoard Stream deck(PC) folder and launch <strong>LioranBoard Stream Deck.exe</strong>. This is your Stream Deck where you can manually trigger buttons you create in your Receiver. </p></li> 

{% include alert.html text="Receiver only acts as an editor. You can press your buttons in Stream Deck." type="warning" %}     
<li> You will see a green screen with some additional settings. 
Leave IP and Port at default. Selected Deck number needs to match your newly created deck number in your Receiver. In our case it should be number 6. {% include image.html w="50" src="streamdeck_settings.png" alt="OBS Websocket Connection Messages" type="image" %} </li>

<li> Press <strong>Connect</strong> and you should see your newly created button that we named <code>chat message</code>. </li>

<li>{% include video_collapse.html w="100" src="trigger_button.mp4" name="button_manual" alt="Press your newly created button" %} While looking at your Twitch chat, click on the button in your Stream Deck. It should send a <code>Hello World</code> message to your chat! <br>
<b>Important:</b> Your Receiver must be running, connected to Transmitter and connected to Twitch.</li>
</ol><br>
<h5>Trigger the button via your Twitch chat</h5>
<p> Do you still remember the Twitch chat trigger you configured for your button? If you followed the tutorial, it should be <code>!test</code>. 

<ol>
<li> {% include video_collapse.html w="80" src="trigger_button_chat.mp4" name="button_trigger_twitch" alt="Trigger your button from Twitch chat" %} Try typing <code>!test</code> (or anything else you chose to be your trigger) in your Twitch chat while looking both at your chat and Stream Deck.<br>
Two things should happen: 
	<ul>
	<li> You will see the button in your Stream Deck blink, just like when you manually pressed it with your mouse. </li>
	<li> LioranBoard will respond back with <code>Hello World</code> in your Twitch chat. </li> </ul>
</li>
</ol>
<br>
Now you have learned how to create a button, add a command and trigger it via Twitch chat! You can find more information about the individual components, commands and triggers in the next sections of the documentation. </p> 

{% include alert.html text="Didn't work as expected? Cannot connect to OBS, Transmitter or Twitch chat? Please refer to our <a href='https://lioranboard.ca/docs/troubleshooting/common'>Troubleshooting</a> section!" type="info" %} 

