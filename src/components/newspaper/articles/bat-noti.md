# Bat-Noti: A Battery Notification Script for i3

*It is October my dudes*

## Introduction

i3 is a tiling window manager for Linux distributions that removes some of the simplicity which is expected from Desktop Environments such as KDE & GNOME in return for a high amount of configuration and usability. As such, there's some functionality you'd expect which is left out.

One such thing is an alert for a low battery. After shopping around a bit, I couldn't find one that exactly suited my needs and after my computer running out of battery for the 10th time while watching YouTube I decided to create my own.

## Criteria

The main functionality I was missing was that my Lenovo T480 has 2 batteries and I wanted a separate notification for each one rather than one notification for both, as the external battery depleted much faster than the internal. I also thought to have my own quirk on it and use the LEDs under my keyboard to flash to add to the alert. A custom image for the notification was also a desire so that it didn't look like the rest of my notifications.

I wanted to be able to configure the percentage at which the notifications would occur for the batteries, an option to toggle the LED functionality, and the ability to change the frequency at which the script checks the battery.

## Result

I made the Bat-Noti bash script which is available on my Github: [lukepgleeson/bat-noti](https://github.com/lukepgleeson/bat-noti). It is created under an MIT License in order to promote open source collaboration. It provides a guide for installation and configuration. It is able to leverage `notify-send` and `brightness-ctl` to do most of the heavy lifting for the alert.

## Conclusion

I believe I have created a competent script which conforms to the criteria which I had defined above. Some possible improvements have also been left on the Github for future work. At the time of writing, these are the following:

1. If the laptop has received the alert, is put to sleep and plugged in to charge over the charge of the alert threshold, then removed from the charger before awakening again, the alert will not go off after reaching the threshold again.
2. More configuration needed for allowing 2 threshold alerts (one low-alert and one critical).
3. Only supports the case of 2 batteries currently.
4. Configurable labels for the batteries would be useful.
5. More error handling needed.
