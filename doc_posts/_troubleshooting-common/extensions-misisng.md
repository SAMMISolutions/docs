---
title: "Extensions missing after updating"
num: 3
---

**Bridge was not properly migrated from Transmitter**\
In certain situations, you may find that some of your installed extensions remain in the `Transmitter/Extensions/installed` directory. However, when updating a bridge to a newer version, SAMMI only attempts to reinstall extensions located in the `Bridge/Extensions/installed` directory. To address this issue, please follow the steps outlined below:

1. Verify that your chosen bridge is no longer in the `transmitter` directory. To do this, navigate to SAMMI Core > Bridge > Select a Bridge. If the bridge is still in the `transmitter` directory, either select a different bridge file or copy `bridge.html` from the `transmitter` directory to the `bridge` directory and select that one.
2. Transfer all extension files from the `transmitter/Extensions/installed` directory to the `bridge/Extensions/installed` directory.
3. In SAMMI Core, navigate to Bridge > Install all extensions from folder. From there, go to the `bridge/Extensions/installed` directory and select any extension file. It's recommended to press 'No' to force reinstall extensions and manually select whether you wish to replace your Deck for each extension. 
4. Wait for the reinstallation process to complete for all of your extensions 
5. Once the reinstallation is complete, delete the `transmitter` directory.

**I do not have Transmitter folder**\
A bug was identified in the SAMMI Updater, which may result in missing extensions if you update or revert your bridge while using an older version of the updater. To address this issue, please follow the steps below:

1. Open SAMMI Core and navigate to Bridge > Install all extensions from folder. Proceed to the `bridge/Extensions/installed` directory and select any extension file. It's recommended to press 'No' to force reinstall extensions and manually select whether you wish to replace your Deck for each extension. 
2. Allow time for the reinstallation process to finish for all of your extensions.
3. To ensure you have the latest bug fixes, download the [latest SAMMI Updater version](https://github.com/SAMMISolutions/SAMMI-Official/raw/main/download/SAMMI%20Updater.zip) and use it to replace your current SAMMI Updater.
