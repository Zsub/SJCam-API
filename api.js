/**
 * @api {get} /?custom=1&cmd=1001 1001 Take a photo
 * @apiName TakePhoto
 * @apiGroup Photos
 */

/**
 * @api {get} /?custom=1&cmd=1002 1002 Set photo resolution
 * @apiName SetPhotoResolution
 * @apiParam {number=0,1,2,3,4,5,7,6,8} par `0`=12M_4032x3024    
 * `1`=10M_3648x2736  
 * `2`=8M_3264x2448  
 * `3`=5M_2592x1944  
 * `4`=3M_2048x1536  
 * `5`=2MHD_1920x1080  
 * `6`=1.3M_1280x960  
 * `7`=VGA_640x480  
 * `8`=14M.
 * 
 * Note that the sjcam zone app actually thinks 1.3M and VGA are switched.
 * @apiGroup Photos
 * @apiSuccess {number} Cmd the command number
 * @apiSuccess {number} Status the number 0
 * @apiSuccessExample {xml} Success-Response:
 * &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; standalone=&quot;yes&quot;?&gt;
 * &lt;Function&gt;
 *     &lt;Cmd&gt;1002&lt;/Cmd&gt;
 *     &lt;Status&gt;0&lt;/Status&gt;
 * &lt;/Function&gt;
 */

/**
 * @api {get} /?custom=1&cmd=2001 2001 Start/stop video recording
 * @apiName StartStopVideo
 * @apiParam {number=0,1} par `1` is start, `0` is stop.
 * @apiGroup Video
 * @apiSuccess {number} Cmd the command number
 * @apiSuccess {number} Status the number 0
 * @apiSuccessExample {xml} Success-Response:
 * &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
 * &lt;Function&gt;
 * &lt;Cmd&gt;2001&lt;/Cmd&gt;
 * &lt;Status&gt;0&lt;/Status&gt;
 * &lt;/Function&gt;
 */

/**
 * @api {get} /?custom=1&cmd=2002 2002 Set video resolution
 * @apiDescription There doesn't seem to be a way to set the camera to its
 * highest possible video resolution, 4k24i (interlaced), via WiFi. 
 * @apiName SetVideoResolution
 * @apiParam {number=0,1,2,3,4,5,6,7} par `0`=1080p60  
 * `1`=1080p30  
 * `2`=720p120  
 * `3`=720p60  
 * `4`=720p30  
 * `5`=2k30  
 * `6`=720p30  
 * `7`=vga240
 * @apiGroup Video
 * @apiSuccess {number} Cmd the command number
 * @apiSuccess {number} Status the number 0
 * @apiSuccessExample {xml} Success-Response:
 * &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
 * &lt;Function&gt;
 * &lt;Cmd&gt;2002&lt;/Cmd&gt;
 * &lt;Status&gt;0&lt;/Status&gt;
 * &lt;/Function&gt;
 */

/**
 * @api {get} /?custom=1&cmd=2003 2003 Set cyclic record
 * @apiDescription This function allows the camera to create a single recording
 * with a fixed length. So after the set amount of time, it will start to record
 * over the first part again.
 * 
 * The camera only saves the last 3, 5, or 10 minutes, if this function is
 * enabled.
 * @apiName SetCyclicRecord
 * @apiParam {number=0,1,2,3} par `0`=off  
 * `1`=3m  
 * `2`=5m  
 * `3`=10m
 * @apiGroup Video
 * @apiSuccess {number} Cmd the command number
 * @apiSuccess {number} Status the number 0
 * @apiSuccessExample {xml} Success-Response:
 * &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
 * &lt;Function&gt;
 * &lt;Cmd&gt;2003&lt;/Cmd&gt;
 * &lt;Status&gt;0&lt;/Status&gt;
 * &lt;/Function&gt;
 */

/**
 * @api {get} /?custom=1&cmd=3005 3005 Set date
 * @apiName SetDate
 * @apiParam {date} str The date to set as `YYYY-MM-DD`.
 * @apiGroup System
 * @apiSuccess {number} Cmd the command number
 * @apiSuccess {number} Status the number 0
 * @apiSuccessExample {xml} Success-Response:
 * &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
 * &lt;Function&gt;
 * &lt;Cmd&gt;3005&lt;/Cmd&gt;
 * &lt;Status&gt;0&lt;/Status&gt;
 * &lt;/Function&gt;
 */

/**
 * @api {get} /?custom=1&cmd=3006 3006 Set time
 * @apiName SetTime
 * @apiParam {time} str The time to set as `hh:mm:ss`, in 24h notation.
 * @apiGroup System
 * @apiSuccess {number} Cmd the command number
 * @apiSuccess {number} Status the number 0
 * @apiSuccessExample {xml} Success-Response:
 * &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
 * &lt;Function&gt;
 * &lt;Cmd&gt;3006&lt;/Cmd&gt;
 * &lt;Status&gt;0&lt;/Status&gt;
 * &lt;/Function&gt;
 */

/**
 * @api {get} /?custom=1&cmd=3007 3007 Set power-off
 * @apiName SetPowerOff
 * @apiParam {number=0,1,2,3,4} par `0` disable auto-poweroff  
 * `1` set auto-poweroff to 3 minutes  
 * `2` set auto-poweroff to 5 minutes  
 * `3` set auto-poweroff to 10 minutes  
 * `4` poweroff now
 * @apiGroup System
 * @apiSuccess {number} Cmd the command number
 * @apiSuccess {number} Status the number 0
 * @apiSuccessExample {xml} Success-Response:
 * &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
 * &lt;Function&gt;
 * &lt;Cmd&gt;3007&lt;/Cmd&gt;
 * &lt;Status&gt;0&lt;/Status&gt;
 * &lt;/Function&gt;
 */

/**
 * @api {get} /?custom=1&cmd=3019 3019 Keep alive
 * @apiDescription It is possible this does something else, but the frequency
 * of requests plus the fact that the same response comes back every time makes
 * me think this is a keepalive.
 * @apiName KeepAlive
 * @apiGroup System
 */
