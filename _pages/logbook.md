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
---

