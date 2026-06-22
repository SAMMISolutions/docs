---
title: Button Indicator Icons
num: 0.5
---

Buttons can display small icons in their top-left corner. These icons provide a quick overview of the button's configuration without opening its settings or commands.

Multiple icons can be displayed on the same button. If there is not enough horizontal space, SAMMI continues on the next line. You can hide all of these icons with the **Hide Button Icons** option.

| Icon | Meaning | When it is shown |t
|------|---------|------------------|
| <img src="{{ '/assets/images/commands-introduction/button-indicator-icons/commands.png' | relative_url }}" width="32" height="32" style="image-rendering: pixelated;" alt="Commands indicator icon"> | Commands | The button contains one or more commands that run when the button is pressed. |
| <img src="{{ '/assets/images/commands-introduction/button-indicator-icons/play-sound.png' | relative_url }}" width="32" height="32" style="image-rendering: pixelated;" alt="Play Sound Effect indicator icon"> | Play Sound Effect | The button contains a **Play Sound Effect** command in its press or release commands. |
| <img src="{{ '/assets/images/commands-introduction/button-indicator-icons/keyboard.png' | relative_url }}" width="32" height="32" style="image-rendering: pixelated;" alt="Keyboard indicator icon"> | Keyboard Input | The button contains a **Keyboard Simulate Press** command in its press or release commands. |
| <img src="{{ '/assets/images/commands-introduction/button-indicator-icons/stop-sound.png' | relative_url }}" width="32" height="32" style="image-rendering: pixelated;" alt="Stop Sound Effect indicator icon"> | Stop Sound Effect | The button contains a **Stop Sound Effect** command in its press or release commands. |
| <img src="{{ '/assets/images/commands-introduction/button-indicator-icons/triggers.png' | relative_url }}" width="32" height="32" style="image-rendering: pixelated;" alt="Triggers indicator icon"> | Triggers | The button has at least one trigger configured. |
| <img src="{{ '/assets/images/commands-introduction/button-indicator-icons/overlap.png' | relative_url }}" width="32" height="32" style="image-rendering: pixelated;" alt="Overlap indicator icon"> | Overlap | **Allow Button Overlap** is enabled. The button can run again while a previous execution is still active. |
| <img src="{{ '/assets/images/commands-introduction/button-indicator-icons/persistent.png' | relative_url }}" width="32" height="32" style="image-rendering: pixelated;" alt="Persistent indicator icon"> | Local Variable Persist | **Local Variable Persist** is enabled, so local variables remain available after the button finishes. |
| <img src="{{ '/assets/images/commands-introduction/button-indicator-icons/queue.png' | relative_url }}" width="32" height="32" style="image-rendering: pixelated;" alt="Queue indicator icon"> | Allow Queue | **Allow Queue** is enabled. Additional executions wait until the current execution finishes. |
| <img src="{{ '/assets/images/commands-introduction/button-indicator-icons/press-type.png' | relative_url }}" width="32" height="32" style="image-rendering: pixelated;" alt="Press type indicator icon"> | Press Type | The button uses a press type other than the normal press behavior. |
| <img src="{{ '/assets/images/commands-introduction/button-indicator-icons/switch-deck-deprecated.png' | relative_url }}" width="32" height="32" style="image-rendering: pixelated;" alt="Deprecated Switch Deck indicator icon"> | Switch Deck (deprecated icon) | SAMMI still stores the related button setting, but the Deck Editor intentionally skips this legacy icon when drawing button indicators. |
| <img src="{{ '/assets/images/commands-introduction/button-indicator-icons/release-commands.png' | relative_url }}" width="32" height="32" style="image-rendering: pixelated;" alt="Release commands indicator icon"> | Release Commands | The button contains one or more commands that run when the button is released. |
| <img src="{{ '/assets/images/commands-introduction/button-indicator-icons/init-variables.png' | relative_url }}" width="32" height="32" style="image-rendering: pixelated;" alt="Initial variables indicator icon"> | Initial Variables | The button has initial variables configured. |
| <img src="{{ '/assets/images/commands-introduction/button-indicator-icons/protected.png' | relative_url }}" width="32" height="32" style="image-rendering: pixelated;" alt="Protected button indicator icon"> | Protected | The button is protected. Its commands cannot be copied. |
| <img src="{{ '/assets/images/commands-introduction/button-indicator-icons/transparent.png' | relative_url }}" width="32" height="32" style="image-rendering: pixelated;" alt="Transparent button indicator icon"> | Transparent | The button is transparent and has no other indicator icons to display. |
{:class='table table-secondary w-auto table-hover align-middle' }
