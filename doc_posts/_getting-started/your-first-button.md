---
layout: default
title: Your First Button
menu: Getting Started
num: 4
permalink: /getting-started/your-first-button
type: fullpage
---
In this introductory tutorial, we will learn how to create a button with the goal of sending a chat message to your Twitch chatroom, customize it's appearance in a deck, and going over various methods on how to trigger this button.

You can follow the text instructions or watch a short video for each step.

{% include alert.html text="This tutorial's purpose is to let you experience the basic workflow and operation of SAMMI components and give you a point of reference when exploring the documentation. It's entirely okay if you don't understand something!" type="warning" %}

{% include alert.html text="This tutorial assumes you've successfully connected Twitch." type="warning" %}

### 1. Create a Deck

From SAMMI Core's Dashboard, in the Deck Menu, click on the big plus button, then, in the context menu that appears, click **Add New Deck**. Double-click the newly created deck to edit it.

{% include video.html w="75" src="create_deck.mp4" alt="Create a new deck" %}

### 2. Create a Button

This is the Deck Editor! The empty grid is your deck where you can create new buttons. Simply double click a blank spot. A new empty button will be created.

{% include video.html w="75" src="create_button.mp4" alt="Create a new button" %}

### 2.1. (optional) Edit Button Appearance and Positioning

To help us identify what this button's purpose is going to be, we can edit it's visuals by right clicking the button, and clicking **Edit Appearance** in the context menu that appears.

You'll be greeted with the button's Appearance Editor, allowing you to set some color, text, and even background image; to name a few options.

Once finished, click **Save** to keep your changes.

Afterwards, you can change up the button's positioning.

Click and drag your button to change it's placement in the deck. Drag the sides and corners of the button to resize it aswell.

This can help you stay organized, and improve your experience in an upcoming step.

### 3. Add a Command

Double click on the empty button you just created.

This is the button's Commands Editor. Click on the **+** symbol. A context menu will appear. Click on the Twitch Commands category and select **Twitch: Send Chat Message** (you can also just start typing the name of the command in the search box).

{% include video.html w="75" src="add_command.mp4" alt="Adding a new command" %}

### 4. Fill Command Fields

Fill in the boxes within the command's fields.

   - Message - Put any text you want in there. For example, `Hello World!`.
   - Channel Name - Leave empty (will use your default Twitch channel)  

Press **Save** and click **Ok** once finished.

{% include video.html w="75" src="populate_command.mp4" alt="Filling the input boxes in the fields of a command" %}

### 5. Add a Trigger

Back in our Deck Editor, right click on your button and click **Edit Triggers** from the context menu. This is your button's Trigger Menu, where you can attach any event to trigger your button. 

  - Click on the **+** sign and select Twitch Chat from the context menu. 
  - Remove the `*` in the Message field's box and populate it with `!test` instead.

Press **Save**

{% include video.html w="75" src="add_trigger.mp4" alt="Add a new trigger" %}

### 7. Finalizing Button

Back in your deck, press **Save**

{% include alert.html text="Pressing Save <b>twice</b> (once in your edit button screen and once in your edit deck screen) is essential to permanently saving any changes you make to a button." type="warning" %}

{% include video.html w="75" src="save_deck.mp4" alt="Save the deck" %}

We have now created a button that will send a chat message `Hello World` anytime it's ran. We have also created a Twitch chat trigger which will execute the button automatically any time someone types `!test` in your Twitch chat.

### Trigger your button manually from a Deck App

There are several ways to trigger a button. One of them is triggering it from a **Deck App**. 

1. Open **SAMMI Panel** by going to the dashboard, clicking **Deck App**, and clicking **Open SAMMI Panel (Web)** from the context menu that appears.

2. Once it launches, you will see connection settings. As we are just keeping everything at default in this tutorial, you can simply press **Connect**. Selected deck should be `Deck 1`. Press Load Deck and you should see your created button.  

{% include video.html w="75" src="open-streamdeck.mp4" alt="Open SAMMI Deck" %}

3. While looking at your Twitch chat of the Twitch account you just linked in SAMMI in the previous steps, click on the button in your **SAMMI Deck**. It should send a `Hello World!` message to your chat!  

{% include video.html w="75" src="trigger_button.mp4" alt="Trigger Button from SAMMI Deck" %}

### Trigger your button manually from it's Commands Editor

If you're just putting together a new button, it's often easier to trigger it directly from it's Commands Editor, as this allows you to keep modifying the button commands without all the extra steps of pressing it in your Deck App. 

1. Navigate to your button's Commands Editor.

2. Press **Run**. You should see the same `Hello World` message in your Twitch Chat. 

   {% include video.html w="75" src="trigger_button2.mp4" alt="Trigger button from Edit Command screen" %}

### Trigger your button automatically via Twitch Chat

Do you remember the Twitch chat trigger you added to your button? If you followed earlier, it should be `!test`. This means that everytime anyone types `!test` in your Twitch Chat, the button should get automatically triggered.

1. Type `!test` in your Twitch Chat while looking both at chat and your Deck App (SAMMI Panel). You should notice two things: 
   - You will see the button in SAMMI Panel blink, just like when you manually pressed it with your mouse earlier. 
   - SAMMI will respond back with `Hello World` message in your Twitch Chat.   


{% include video.html w="75" src="trigger_button_chat.mp4" alt="Trigger button via chat" %}

WIP vvv

Now you have learned how to create a button, add a command and trigger it via Twitch chat! You can find more information about the individual components, commands and triggers in the next sections of the documentation. 

