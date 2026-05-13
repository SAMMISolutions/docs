---
title: "Play Sound Effect"
num: 1
redirect_from:
  - commands/2
---

Plays a selected sound file. Files must be in Vorbis codec in an .ogg container.

Plays a selected audio file using SAMMI's sound effect system.

{% include alert.html text="Note: In SAMMI versions older than 2026.4.0 only .ogg (Vorbis) files are supported. Other formats (mp3, wav, m4a, mp4) are supported starting with 2026.4.0 and later." type="warning" %}

Supported file types:
- .mp3
- .wav
- .m4a
- .ogg
- .mp4 (audio-only playback)

{% include alert.html text="You no longer need to convert files to a specific container — SAMMI supports common audio formats directly." type="info" %}

{% include alert.html text="SAMMI will now always play on your active default audio device. Changes to the system default device are picked up automatically — no SAMMI restart required." type="info" %}

| Box Name | Type | Description | 
|-------|--------|--------|
|Sound File Path|String|Select the file to play. Relative paths are allowed (e.g., `sounds/airhorn.mp3`).|
|Volume Level|number|Set the volume level in %|
|Save Sound ID|String|Sound Effect ID (you can select any name; it's used for other sound effect commands like stop/volume/speed)|
{:class='table table-primary ' }

Examples:

| Sound File Path | Result |
|---|---|
| sounds/airhorn.mp3 | Plays `airhorn.mp3` at the selected volume. |
| sounds/cheer.ogg | Plays `cheer.ogg` using the same sound system. |

Notes:
- If the selected file contains video (e.g., a full .mp4), only the audio track will be played.
- Use a unique `Save Sound ID` to reference this sound for volume/stop/speed commands.












