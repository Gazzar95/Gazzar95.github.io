---
title: "Logbook"
permalink: /logbook/
layout: single
author_profile: true
---

# Logbook

Short, informal updates and observations as I work through projects and problems.

---

**2025-07-19**  
I spent all weekend (almost 6hrs) trying to get my pi camera to work :(
That's very strange since LiDAR setup worked fine last weekend.

Issues:
1) Couldn't get camera driver v4lw to work. ChatGPT recommended camera_ros which worked perfectly: https://github.com/christianrauch/camera_ros.git

2) My laptop does not see ROS topics from Pi. I already tried:
    - Checked IP-level connection. Pinged from both sides and works fine
    - Verified envi variable. ROS has variables that need to be the same for two devices to talk (Like ROS_DOMAIN_ID)? Still didn't fix it
    - Made sure envi is sourced correctly on both
    - Checked for firewall interference. Made ufw inactive on both machines
    - Re-booted both devices and went through full trouble shoot sequence again
---

