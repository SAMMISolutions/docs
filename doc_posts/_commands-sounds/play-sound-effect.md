---
title: "Play Sound Effect"
num: 1
redirect_from:
  - commands/2
  - commands/obs-sound-play
---

Plays a selected audio file using SAMMI's sound effect system.

{% include alert.html text="Note: In SAMMI versions older than 2026.4.0 only .ogg (Vorbis) files are supported. Other formats (mp3, wav, m4a, mp4) are supported starting with 2026.4.0 and later." type="warning" %}

Supported file types:
- .mp3
- .wav
- .m4a
- .ogg (Vorbis and Opus)
- .mp4 (audio-only playback)

{% include alert.html text="Starting with SAMMI 2026.5.0, .ogg files have full support on par with MP3 and WAV: OGG Opus files can now be played (previously only OGG Vorbis), OGG plays on any selected output device, and OGG fully supports stop, volume (including fades), and playback speed." type="info" %}

{% include alert.html text="You no longer need to convert files to a specific container — SAMMI supports common audio formats directly." type="info" %}

{% include alert.html text="Leave Audio Device empty to play through your active default audio device. Set Audio Device to route the sound effect to a specific Windows playback device." type="info" %}

| Box Name | Type | Description | 
|-------|--------|--------|
|Sound File Path|String|Select the file to play. Relative paths are allowed (e.g., `sounds/airhorn.mp3`).|
|Volume Level|number|Set the volume level in %|
|Audio Device|String|Optional. Leave empty for the current default device. Select a device from the dropdown, use `default`, `primary`, or `standard` for the default device, or type a full/partial Windows playback device name. Advanced users may also enter a numeric output device index.|
|Save Sound ID|String|Sound Effect ID (you can select any name; it's used for other sound effect commands like stop/volume/speed)|
{:class='table table-primary ' }

Examples:

| Sound File Path | Result |
|---|---|
| sounds/airhorn.mp3 | Plays `airhorn.mp3` at the selected volume. |
| sounds/cheer.ogg | Plays `cheer.ogg` using the same sound system. |

Notes:
- If the selected file contains video (e.g., a full .mp4), only the audio track will be played.
- As of SAMMI 2026.5.0, every supported format — including .ogg (Vorbis and Opus) — can be routed to a specific Audio Device and supports stop, volume (including fades), and playback speed.
- Use a unique `Save Sound ID` to reference this sound for volume/stop/speed commands.












