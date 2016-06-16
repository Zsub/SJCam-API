# SJCam-API
This repository will contain documentation on the SJCam WiFi APIs, such as for the SJCam 4000 WiFi and the SJCam 5000x Elite.

The documentation will be written in the [apiDoc](http://apidocjs.com)-system, and hopefully hosted through GitHub-pages. Anything under this line will have to be moved to `api.js`.

---

# Base URL
`http://192.168.1.254`

# Open ports
I used nmap to see which ports are open. `8000` and `3333` don't seem to be functional, or at least I don't know how to connect to them (other than `telnet` which only gives me a blank screen).
```
PORT     STATE SERVICE
80/tcp   open  http
554/tcp  open  rtsp
3333/tcp open  dec-notes
8000/tcp open  http-alt
```

# Live preview
`rtsp://192.168.1.254/xxx.mov`

# File Management Panel 
`GET   /                           file management panel`

# Configuration options
all options follow the template:
`/?custom=1&cmd={Command}&par={Option}`
Command - setting/mode of the device
Option - usually 0/1, but when more settings are supported theres a few more numbers for different menu items

# WARNING: Thee settings don't seem to take effect until you either start recording, or you turn the camera on/off.

## Recording
```
GET   /?custom=1&cmd=2001&par=1   start recording
GET   /?custom=1&cmd=2001&par=0   stop recording
```

## Other options
```
2002 Resolution
2003 Cyclic Record
2004 WDR
2006 Motion Detection
2007 Audio
2008 Date Stamp
2010 Live View Size
1004 Capture Mode
1002 Image Size
1005 Quality
1006 Sharpness
1007 White Balance
1008 Color
1009 ISO
2005 Exposure
1011 Anti Shake
3025 Frequency
3026 Rotate
3011 Reset to Defaults
3010 Format
3007 Auto Power Off
3003 WiFiName
3004 Password
3005 Set date (&str=YYYY-MM-DD)
3006 Set time (&str=HH:MM:SS)
3008 DV Language
3019 Keepalive?
3014 List current settings?
3001 Switch mode
```

/?custom=1&cmd=3001&par=4 - switch to timeing photo mode  
/?custom=1&cmd=3001&par=3 - switch to timing video (video lapse) mode  
/?custom=1&cmd=3001&par=2 - switch to hdmi mode (probably)  
/?custom=1&cmd=3001&par=1 - switch to video mode  
/?custom=1&cmd=3001&par=0 - switch to photo mode  
/?custom=1&cmd=1001 - take photo in photo mode  

## WiFi client mode maybe
http://www.gitup.com/en/blog/24_Git2-Wi-Fi-Client-Mode.html

More info: 
* [http://how-i-did-that.blogspot.com/search/label/SJCAM4000Wifi]
* [http://www.rcgroups.com/forums/showpost.php?s=bdc0be9f330339f4a44c0f91c4b2d9a7&p=29634969&postcount=3156]
