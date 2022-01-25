---
title: "Wait For Timeout"
num: 10
---

Pauses all the button commands from executing until the specified timer reaches 0.\
This way you can delay your commands by using variables (since it's not otherwise possible to insert variables into Delay parameter fields).

| Box Name | Type | Description | 
|-------|--------|--------|
|Timeout|Number {% include asterisk.html%}|How long to wait in milliseconds before unpausing normal button command flow
{:class='table table-primary' }

{% include example_public.html src="https://i.imgur.com/PEw7cQF.gif" size="100" title="Using a variable to delay commands" pastebin="VJwMqUXJ" %}  




