---
title: "Logbook"
permalink: /logbook/
layout: single
author_profile: true
---

Short, informal updates and observations as I work through projects and problems.

---

### **2025-07-19**  
Spent almost the entire weekend (about 6 hours) trying to get my Pi camera to work.  
Strangely, the LiDAR setup worked just fine last weekend.

#### Issues I ran into:

1. **Couldn’t get the default `v4l2` camera driver to work**  
   After trying various fixes, ChatGPT recommended switching to [`camera_ros`](https://github.com/christianrauch/camera_ros.git), which worked perfectly.

2. **My laptop couldn’t see ROS topics from the Pi**  
   The camera node was running on the Pi, but no topics were visible on my laptop. Here's what I tried:
   - Confirmed IP-level connectivity (ping works both ways)
   - Verified ROS environment variables (including `ROS_DOMAIN_ID`)
   - Ensured ROS setup files were sourced correctly on both machines
   - Disabled `ufw` firewall on both systems
   - Rebooted both devices and repeated the full troubleshooting sequence

Still no connection between devices. Might be a deeper ROS 2 discovery or DDS configuration issue.

---

### **2025-07-22**  
Still troubleshooting the same networking issue — starting to think the problem might be with the internet router itself. I brought in the GL.iNet mini router to isolate and debug the Pi’s connection.

#### Issues I ran into:
The Raspberry Pi didn’t appear on the mini router network when connected via Ethernet.  
At first, it seemed like Ethernet wasn’t working or the Pi wasn’t receiving an IP address.

#### Steps I took to troubleshoot:
- **Validated Ethernet connection**  
  Plugged in a laptop to confirm the mini router’s LAN port and cable were good.

- **Diagnosed DHCP/gateway issue**  
  Laptop didn’t get internet until I manually requested a DHCP lease (`dhclient`) and confirmed routing was working.

- **Tested mini router wireless**  
  Confirmed internet access via Wi-Fi worked — routing/NAT was functioning properly in Router Mode.

- **Connected to Pi via SSH**  
  Verified the Pi was online and accessible via upstream network, even if not discoverable from the mini router’s LAN.

- **Confirmed upstream isolation**  
  Couldn’t ping the main internet router — learned that the mini router’s NAT/firewall blocks upstream pings by default.

Pi Ethernet now seems fine — issue was likely a mix of DHCP and subnet routing quirks.

**Next:** Set up the Raspberry Pi to reliably connect via Ethernet or Wi-Fi with a static or reserved IP for consistent access during development.

---

