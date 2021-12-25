---
layout: default
permalink: templates/example-command-simple
---
<!-- Don't include the front matter above -->

<!-- This simple line below will display an image and pastebin embed -->
<!-- src = full path to the Imgur image, i.e. https://i.imgur.com/zsxdHym.jpeg -->
<!-- size = resize image if it's too large (which it should not be in the first place). Valid values are 25, 50 and 75 (percentage). Delete the key or change it to 100 if you want full image size. -->
<!-- title = title, will be displayed as a button and title of the modal -->
<!-- pastebin = the pastebin unique ID, NOT the whole url, i.e. https://pastebin.com/HVRnqeJx will be just HVRnqeJx -->
<!-- If you're NOT including pastebin, delete the pastebin="X" key completely -->
<!-- Do not change anything else -->
{% include example_public.html src="https://i.imgur.com/zsxdHym.jpeg" size="50" title="Simple button" pastebin="9HNbNCrN" desc=description %} 
