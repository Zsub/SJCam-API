# SJCam-API
This repository will contain documentation on the SJCam WiFi APIs, such as for the SJCam 4000 WiFi and the SJCam 5000x Elite.

The documentation will be written in the [apiDoc](http://apidocjs.com)-system, and hosted through GitHub-pages at http://zsub.github.io/SJCam-API. Despite using a `js` file, there is no 'real' javascript in the repository. The javascript file is simply the container so ApiDocJS can generate the documentation.

# Capturing device traffic
In order to verify that the commands indeed work as intended, or to discover new commands, you can use your iPhone with the sjcam zone app and simply capture the network traffic between the iPhone and the camera. This is done by way of a Remote Virtual Interface. The following steps have been adopted from http://useyourloaf.com/blog/remote-packet-capture-for-ios-devices/.

1. Plug your iDevice in via USB
1. Obtain the UDID via Xcode or iTunes
1. Use this command to create the virtual interface: `rvictl -s <udid>`
1. Start WireShark and start a capture on the newly created interface, probably named something like `rvi0`
1. Use the sjcam zone app on your iDevice to operate your camera and note the HTTP calls that happen, correlating them to your actions

# Create the docs

1. checkout `master`
2. make changes and commit
3. checkout branch `gh-pages`
4. `git show master:api.js > api.js`
5. `git show master:apidoc.json > apidoc.json`
6. `apidoc -f api.js -c apidoc.json -o .`
7. `rm api.js; rm apidoc.json`
8. commit and push to GitHub

Anything under this line will have to be moved to `api.js` eventually. Any info that is described in `api.js` will be removed from here.

---

# Base URL
`http://192.168.1.254`

# Open ports
I used `nmap` to see which ports are open. `8000` and `3333` don't seem to be functional, or at least I don't know how to connect to them (other than `telnet` which only gives me a blank screen).
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
`GET	/	file management panel`

# Configuration options
all options follow the template:
`/?custom=1&cmd={Command}&par={Option}`
Command - setting/mode of the device
Option - usually 0/1, but when more settings are supported theres a few more numbers for different menu items

## Other options
```
1004 Capture Mode ? Doesn't seem to work
1005 Quality ? Haven't been able to get this from the official app
1006 Sharpness
1007 White Balance
1008 Color
1009 ISO
1011 Anti Shake
2004 WDR
2005 Exposure
2006 Motion Detection
2007 Audio
2008 Date Stamp
2010 Live View Size
2015 ? From packet capture
2016 ? From packet capture
2019 Videolapse set time between shot, 0=1s, 1=2s, 2=5s, 3=10s, 4=30s, 5=60s
3001 Switch mode
3003 WiFiName
3004 Password
3008 DV Language
3010 Format
3011 Reset to Defaults
3012 ? From packet capture
3014 List current settings?
3016 Status Mode? (which mode?)
3025 Frequency
3026 Rotate
3027 ? From packet capture
4003 ? From Android sjcam zone app, seems playback related, stream recorded video from cam to phone 
8001 ? From Android sjcam zone app
```

/?custom=1&cmd=3001&par=4 - switch to timeing photo mode  
/?custom=1&cmd=3001&par=3 - switch to timing video (video lapse) mode  
/?custom=1&cmd=3001&par=2 - switch to hdmi mode (probably)  
/?custom=1&cmd=3001&par=1 - switch to video mode  
/?custom=1&cmd=3001&par=0 - switch to photo mode    

## WiFi client mode maybe
http://www.gitup.com/en/blog/24_Git2-Wi-Fi-Client-Mode.html

# More info: 
* http://how-i-did-that.blogspot.com/search/label/SJCAM4000Wifi
* http://www.rcgroups.com/forums/showpost.php?s=bdc0be9f330339f4a44c0f91c4b2d9a7&p=29634969&postcount=3156
* https://github.com/AdamLaurie/sjcam/blob/master/sj4000.py
