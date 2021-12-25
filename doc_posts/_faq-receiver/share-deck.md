---
title: Share a deck
num: 9
---

{% include alert.html text="Each configs.ini file represents a single deck." type="info" %} 

1. In the main Receiver menu, note the deck number you would like to copy.
2. Look at the bottom of your Receiver, there is a small grey text that says either `Local` or `Appdata`
    1. Local - go to `LioranBoard Receiver` folder and copy the configs.ini file with the same number-1 you noted in step 1. I.e. if your deck number is 2, the file containing your deck is `configs1.ini`.
    2. Appdata - go to `C:/user/%username/appdata/local/lioranboard` and copy the configs.ini file with the same number-1 you noted in step 1. I.e. if your deck number is 2, the file with containing deck is `configs1.ini`.
3. To make sure you're copying the right deck file, you can open the `configs.ini` file and find `[configs]` section. The name value should be the name of your deck.