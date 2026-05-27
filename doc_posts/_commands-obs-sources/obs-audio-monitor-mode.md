---
title: "Audio Monitor Type"
num: 13
redirect_from:
  - commands/46
---

Changes the monitoring type of an audio source.\
Same option as in OBS-Audio Mixer-Cogwheel-Advanced Audio Properties. 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Source Name|	String|	Audio source name. Select from dropdown or input manually.
|Monitor Type|	dropdown |	Type of monitoring to use
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetInputAudioMonitorType`

| Request Field | Type | Description |
|-------|--------|--------
| inputName | String | Name of the audio source. |
| monitorType | String | Monitor type to set. |
{:class='table table-secondary w-auto table-hover text-break'}

| Monitor Type Value | Description |
|-------|--------|
| `none` | No monitoring — audio is not sent to the monitoring device. |
| `monitorOnly` | Monitor only — audio is sent to the monitoring device but not to the stream/recording. |
| `monitorAndOutput` | Monitor and output — audio is sent to both the monitoring device and the stream/recording. |
{:class='table table-secondary w-auto table-hover text-break'}









