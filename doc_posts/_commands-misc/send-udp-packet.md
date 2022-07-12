---
title: Send UDP Packet
num: 9.5
---

This command allows a one-way unencrypted "push" of buffer data to a specified IPv4 address and port number as a UDP/IP encapsulated packet.  Useful for communicating information or sending commands to server endpoints or hardware devices that accept UDP connections.

| Box Name | Type | Description | 
|-------|--------|--------
|IP|String|Destination IPv4 address.
|Port|String|Destination port number. 
|Buffer Name|Binary|The name of the buffer containing the binary payload information for the UDP packet.
{:class='table table-primary'}

{% include alert.html text='Keep buffers 508 bytes or smaller to stay under the maximum safe UDP/IP payload size, smaller if additional protocol encapsulation is required beyond UDP and IP.' type="warning" %}







