---
layout: default
title: Community
menu: Getting Started
num: 6
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

{% capture example1 %}
<a href="https://github.com/SAMMISolutions/docs/edit/main/templates/example_command_simple.md">simple template</a> which will produce this particular button: {% include example_public.html src="https://i.imgur.com/mDMCrPC.png" size="50" title="Simple button" pastebin="9HNbNCrN" %}
{% endcapture %}

{% capture example2 %}
<a href="https://github.com/SAMMISolutions/docs/edit/main/templates/example_command.md">advanced template</a> which will produce this button: {% include example_public.html src="https://i.imgur.com/jydvLf6.jpeg" size="50" title="Advanced button" pastebin="9HNbNCrN" desc=description %}
{% endcapture %}

### Where to Get Support
If you need support for SAMMI, you have several options available:
1. Read this documentation. Use the search bar to find topics relevant to your question.
2. Join the official [SAMMI Discord server](https://discord.gg/dXez8Zh). Our knowledgeable members are ready to assist you!
3. Become a member of our [subreddit](http://reddit.com/r/SAMMI). It's a new community, and we'd appreciate your help in growing it!

{:class='mt-2 anchor-header'}
### Ways to Contribute
Interested in contributing to SAMMI documentation or building an extension? We’d love your help!

#### Edit a page
1. Browse the documentation and click the {::nomarkdown}<a class="btn btn-sm btn-edit-light mb-2 mb-md-0" href="https://github.com/SAMMISolutions/docs/edit/main/doc_posts/_getting-started/community.md" title="Click the button to edit this page!" target="_blank" rel="noopener"><i class="fas fa-pen"></i> Edit</a>{:/} button if you find anything unclear or have suggestions for improvement.
2. If this is your first time editing the website, click "Fork the repository."
3. Make your changes!
4. Scroll down, provide a meaningful title (and optional description), and click "Propose changes."
5. After the page reloads, click "Create pull request."
6. Wait for approval for your changes to appear live on the website.

<br>
{% include video.html w="50" src="edit_page.mp4" alt="Editing a page on Github" %}

#### Add your own button example
To add your own button example to a command in the [Commands]({{ "commands/variables" | relative_url }}) section (each command should have up to 3 examples):

1. Upload a screenshot of the button to Imgur (while logged in) and the button's [imported JSON]({{ "faq/commands#shareabutton" | relative_url }}) to [pastebin](https://pastebin.com/). 
2. Click the {::nomarkdown}<a class="btn btn-sm btn-edit-light mb-2 mb-md-0" href="https://sammi.solutions/docs/commands/variables#variabletransition" title="Click the button to edit this page!" target="_blank" rel="noopener"><i class="fas fa-pen"></i> Edit</a>{:/} for the command you want to add an example to (e.g., Variable Transition command).
3. If this is your first time editing the website, click "Fork the repository."
4. Use the provided {{ example1 }}
{:start="4"}
5. (optionally) Explore the {{ example2 }} 
{:start="5"}
5. Add the code snippet from the template to the end of the command you're editing on Github.
6. Scroll down, provide a meaningful title (and optional description), and click "Propose changes."
7. After the page reloads, click "Create pull request."
8. Wait for approval for your example to appear live on the website.


{:class='mt-2 anchor-header'}
#### Submit Your Own Extension
If you've created your own extension and want to share it with the community, you can [submit it](https://sammi.solutions/extensions/submit) directly from this website.

#### Report a Bug
To report a bug, the quickest way is to contact us via Discord. If a bug causes SAMMI Core to crash, you can also send us a crash log by clicking "Yes" and providing a comment in the crash log pop-up that appears after the crash.

