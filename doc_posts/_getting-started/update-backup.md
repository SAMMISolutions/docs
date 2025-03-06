---
layout: default
title: Update and Backup
menu: Getting Started
num: 4.1
permalink: /getting-started/data-backup
type: fullpage
---

## Auto Update SAMMI
**To check for new versions of SAMMI Core, follow these steps**:
1. Open SAMMI Core and navigate to "SAMMI-Settings."
2. Select "Check for Updates."
3. If updates are available, a popup will appear asking if you would like to update now.
4. Click "Yes" to initiate the SAMMI Updater, which will automatically update all components and restart SAMMI Core. The update process is now complete!

{% include image.html w="75" src="updater.png" alt="SAMMI Updater" %}

**If you wish to update or downgrade specific components, you can do so by manually launching the SAMMI Updater**:
1. Go to the SAMMI folder on your computer and locate the "SAMMI Updater" subfolder.
2. Double-click on "SAMMI Updater.exe" to open the updater.
3. A menu will be displayed, allowing you to choose whether to update or downgrade a component.
4. If you choose to downgrade a component, you will have the option to select the version to which you want to revert.

{% include alert.html text="You may be prompted to run SAMMI Updater as an administrator." type="warning" %} 

### Download SAMMI Updater  
If there is no SAMMI Updater in your SAMMI folder, you can download the newest SAMMI Updater from [SAMMI Github repository](https://github.com/SAMMISolutions/SAMMI-Official/raw/main/download/SAMMI%20Updater.zip).\
Place the whole SAMMI Updater folder in your SAMMI folder and run SAMMI Updater.exe to update SAMMI manually. Read more about manual updates in [Troubleshooting Section](/docs/troubleshooting/common#updateproblemsmissingsammiupdater).


## Back up your data
SAMMI is a self contained app in the SAMMI folder, you do not go through the process of installing it like with other apps.
This means you can freely copy the whole SAMMI folder to another computer and it will work just the same!

All your current decks are saved as `json/decks_data.json` file. SAMMI automatically creates a backup file every time you save your deck. 


