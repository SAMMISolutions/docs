---
layout: default
title: Update and Backup
menu: Getting Started
num: 5
permalink: /getting-started/data-backup
type: fullpage
---

SAMMI is comprised of multiple components that make up the overall experience. Each of these components is separately able to be updated, but often is recommended to update everything all at once via the `SAMMI Updater`.

## Why should I update?

SAMMI connects to a lot of services that you can all make talk to each other, and with more moving parts, comes the potential of one of those services changing their API and breaking something you worked hard on.

This is out of our control, so we regularly release updates to address these kinds of situations; as well as general bug fixes, stability improvements, and grand new features to keep SAMMI on the cutting edge.

## Will my buttons be impacted?

We work very hard to keep buttons from several years ago, working just like it used to in newer versions. We take user's button functionality very seriously and deprecate vs outright delete content, meaning, old content we find to be too outdated to continue building upon, is often left inaccessible rather than outright deleted. This leaves new users unable to use the old content and are redirected to new content, while old users relying on old content, still function perfectly fine.

## Auto Update SAMMI Components
Upon launch, SAMMI Core will automatically prompt you if a new update is available or not for Core. Clicking yes will open the `SAMMI Updater` and automatically update Core, and any additional components that need updating, then restart SAMMI Core. The update process will then be complete!

**To manually check for new versions of SAMMI Components to automatically update to**:
1. Open SAMMI Core and navigate to **Settings** located along the bottom menu banner.
2. Select the **Updates** tab then select **Check for Updates**.
3. If updates are available, a popup will appear asking if you would like to update now.
4. Click **Yes** to initiate the SAMMI Updater, which will automatically update all components and restart SAMMI Core. The update process is now complete!

{% include image.html w="75" src="updater.png" alt="SAMMI Updater" %}

**If you wish to update or downgrade specific components, you can do so by manually launching the SAMMI Updater**:
1. Open SAMMI Core and navigate to **Settings** located along the bottom menu banner.
2. Select the **Updates** tab then select **Open Updater**. This will open SAMMI Updater, without initiating any updates automatically.
   1. If you get a message about not the updater not being found, proceed to the section [below](#download-sammi-updater).
3. A menu will be displayed, allowing you to choose whether to update or downgrade a component.
4. If you choose to downgrade a component, you will have the option to select the version to which you want to revert.

{% include alert.html text="You may be prompted to run SAMMI Updater as an administrator." type="warning" %} 

### Download SAMMI Updater
If you are prompted with the alert saying "Could not find SAMMI Updater.exe", you can download the newest SAMMI Updater from the [SAMMI Github repository](https://github.com/SAMMISolutions/SAMMI-Official/raw/main/download/SAMMI%20Updater.zip).\
Extract the contents of the downloaded .zip file into the `SAMMI Updater` folder located in the root of your SAMMI install directory (create the folder if not already there).

{% include image.html w="75" external="true" src="https://i.imgur.com/WiRE5Us.gif" alt="Extracting .zip to SAMMI Updater folder"%}

Afterwards, you may open `SAMMI Updater.exe` directly, or through SAMMI Core via the Settings.

## Back up your data
SAMMI is a self contained app in the SAMMI folder, otherwise known as a portable app. You do not go through the process of installing it like with other apps.
This means you can freely copy the whole SAMMI folder to another computer and it will work just the same!

All your current decks are saved in `(SAMMI Directory)\json\decks_data.json`. SAMMI automatically creates backup files every time you save your deck, stored beside that file as `decks_data_old.json` and `decks_data_veryold.json` respectively.