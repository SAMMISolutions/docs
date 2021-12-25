---
layout: default
title: Wild Cards
num: 6
---

A wild card <i class="fas fa-star-of-life fa-sm"></i> refers to a character that can be substituted for zero or more characters in a string. They are used to search for partial matches instead of exact ones.\
Wild cards can be used for **Twitch Chat** and **Redeem points with message** triggers.\
You can pull their value by using the [String: Wildcard Pull]() command.

**Wild Card Rules:**
- They need to match exactly, including the position in the text and spaces
- a single <i class="fas fa-star-of-life fa-sm"></i> will allow any message to trigger your button
- You can use as many wild cards as you want as long as the formatting is matched
- 2 wild cards back to back without a space will be turned into just one wildcard
- wild card matches are checked in the order the triggers were added and the check stops as soon as it finds the first match
- Twitch automatically removes double space in the message, so you do not need to worry about that


|Trigger |	Chat Input | <i class="fas fa-check" style="color: green"></i> = accepted | <i class="fas fa-times" style="color: red"></i> = rejected ||
|-------|--------|--------|--------|--------|
|world <i class="fas fa-star-of-life fa-sm"></i>|	world hello <i class="fas fa-check" style="color: green"></i>	|world hello hi there <i class="fas fa-check" style="color: green"></i>|	hello world	 <i class="fas fa-times" style="color: red"></i>|hello world hello <i class="fas fa-times" style="color: red"></i>
|<i class="fas fa-star-of-life fa-sm"></i> world|	world hello <i class="fas fa-times" style="color: red"></i>|	world hello hi there <i class="fas fa-times" style="color: red"></i>|	hello world <i class="fas fa-check" style="color: green"></i>|	hello world hello <i class="fas fa-times" style="color: red"></i>
|<i class="fas fa-star-of-life fa-sm"></i> world <i class="fas fa-star-of-life fa-sm"></i>|	world hello	<i class="fas fa-times" style="color: red"></i>|world hello hi there <i class="fas fa-times" style="color: red"></i>	|hello world <i class="fas fa-times" style="color: red"></i>|	hello world hello <i class="fas fa-check" style="color: green"></i>
|world <i class="fas fa-star-of-life fa-sm"></i> <i class="fas fa-star-of-life fa-sm"></i>|	world hello <i class="fas fa-times" style="color: red"></i>|	world hello hi there <i class="fas fa-check" style="color: green"></i>|	hello world	<i class="fas fa-times" style="color: red"></i>|hello world hello <i class="fas fa-times" style="color: red"></i>
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }

If you want to allow a single word for your trigger, no matter where it is placed in the sentence, you will need 4 different triggers: `word`, `word *`, `* word` and `* word *`.\
Please note this assumes there's a space before and after `word`.

{% include image.html w="75" src="wildcard1.png" alt="Single word in text input" %}

Want to capture only a single word after a specific keyword and ignore the rest of the text? Use these two triggers: `keyword * *` and `keyword *` (order matters!).\
Now if you make your [String: Wildcard Pull]() command pull the first (0) wildcard, it will always pull whatever word comes after `keyword` and ignore any additional text afterwards.

{% include image.html w="75" src="wildcard2.png" alt="Single word after a specific keyword" %}

{% include alert.html text='A single <i class="fas fa-star-of-life fa-sm"></i> in your Point Redeem With Message Trigger field allows for any message to trigger your button, but does not function as an actual wild card. Use Math: Trigger pull to pull the whole message.' type="warning" %} 