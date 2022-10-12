---
layout: default
title: Community
menu: Getting Started
num: 7
permalink: /getting-started/community
type: fullpage
---

{% capture description %}
**Some description**   
Written purely in `markdown`, *yay*!
- bullet point
- another bullet point
- and another one
{% include selectAll.html text="This sentence will all be selected even if the user clicks only on a single letter." %}
{% include colored_text.html color="red" text="Some red text hello 123456" %}

| table header | another header | one more |
|-------|--------|--------|
| first | second | third |
| one | two | three |
{:class='table table-primary w-auto'}
{% include alert.html text="Some important alert text" type="warning" %}
{% endcapture %}

## Where to get support
If you're looking for support for SAMMI, you have these options: 
1. Read this documentation. You can use the search bar to find any relevant topics for your question. 
2. Join the official [SAMMI Discord server](https://discord.gg/dXez8Zh). We've got lots of very knowledgeable members that will be able to help you!
3. Become a member of our [subreddit](http://reddit.com/r/SAMMI). It's still pretty new, help us get it going! 

{:class='mt-2 anchor-header'}
## Ways to contribute 
Interested in contributing to SAMMI documentation or building an extension? We’d love your help! 

### Edit a page
1. Read through the documentation, and click the {::nomarkdown}<a class="btn btn-sm btn-edit-light mb-2 mb-md-0" href="https://github.com/SAMMISolutions/docs/edit/main/doc_posts/_getting-started/community.md" title="Click the button to edit this page!" target="_blank" rel="noopener"><i class="fas fa-pen"></i> Edit</a>{:/} button if you see anything confusing or have any **suggestions** for something to be improved. 
2. If this is your first time editing this website, you must click on <button type="button" class="btn btn-success btn-sm">**Fork the repository**</button>
3. Make your changes! 
4. Scroll down, create a meaningful title (and optionally description) and press <button type="button" class="btn btn-success  btn-sm">**Propose changes**</button>
5. Once the page reloads, click on <button type="button" class="btn btn-success btn-sm">**Create pull request**</button>  
6. Wait for an approval for it to show live on our page!

<br>
{% include video.html w="50" src="edit_page.mp4" alt="Editing a page on Github" %}

### Add your own button example
Want to **add your own button example** to any of the commands in the [Commands]({{ "commands/variables" | relative_url }}) section? Each command can have up to 3 different button examples!
1. First you will need a screenshot of the button uploaded to Imgur and [pastebin](https://pastebin.com/) with the button's [imported JSON]({{ "faq/commands#shareabutton" | relative_url }}).
2. Click on {::nomarkdown}<a class="btn btn-sm btn-edit-light mb-2 mb-md-0" href="https://sammi.solutions/docs/commands/variables#variabletransition" title="Click the button to edit this page!" target="_blank" rel="noopener"><i class="fas fa-pen"></i> Edit</a>{:/} button for the command you want to add an example to. Maybe you would like to add one to [Variable Transition]({{ "commands/variables#variabletransition" | relative_url }}) command?
3. If this is your first time editing this website, you must click on <button type="button" class="btn btn-success btn-sm">**Fork the repository**</button>
4. Use this [very simple template](https://github.com/SAMMISolutions/docs/edit/main/templates/example_command_simple.md) which will produce this particular button: {% include example_public.html src="https://i.imgur.com/zsxdHym.jpeg" size="50" title="Simple button" pastebin="9HNbNCrN" %}
{:start="4"}
5. (optional) Like to experiment? Check out the [advanced template](https://github.com/SAMMISolutions/docs/edit/main/templates/example_command.md) instead which will produce this button:&nbsp;{% include example_public.html src="https://i.imgur.com/jydvLf6.jpeg" size="50" title="Advanced button" pastebin="9HNbNCrN" desc=description %} 

{:start="5"}
6. Add the code snippet from the template to the very end of the command you're editing on Github!
7. Scroll down, create a meaningful title (and optionally description) and press <button type="button" class="btn btn-success  btn-sm">**Propose changes**</button>
8. Once the page reloads, click on <button type="button" class="btn btn-success  btn-sm">**Create pull request**</button>  
9. Wait for an approval for it to show live on our page!



{:class='mt-2 anchor-header'}
### Submit your own extension 
Have you made your own extension and would like to share it with the rest of the community? You can now [submit it](https://sammi.solutions/extensions/submit) directly from this website! 

### Report a bug 
Found a bug? The fastest way to report a bug is to let us know via Discord! If a bug is causing your SAMMI Core to crash, you can also send us a crash log by clicking 'Yes' and entering a comment in the crash log pop-up that appears after the crash. 

## Content Creators <span class="badge bg-warning text-dark">Under construction</span>
Watch videos from members of the SAMMI community to give you tips and tricks on how to use SAMMI. 

