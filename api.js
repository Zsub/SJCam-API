/**
 * @api {get} /?custom=1&cmd=1001 Take a photo
 * @apiName TakePhoto
 * @apiGroup Photos
 */

/**
 * @api {get} /?custom=1&cmd=1002 Set photo resolution
 * @apiName SetPhotoResolution
 * @apiParam {number=0,1,2,3,4,5,7,6,8} par where 0=12M_4032x3024, 1=10M_3648x2736,
 * 														2=8M_3264x2448, 3=5M_2592x1944,
 * 														4=3M_2048x1536, 5=2MHD_1920x1080,
 * 														6=1.3M_1280x960, 7=VGA_640x480,
 * 														8=14M. Note that the sjcam zone app
 * 														actually thinks 1.3M and VGA are switched.
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
 * @api {get} /?custom=1&cmd=3019 Keep alive
 * @apiName KeepAlive
 * @apiGroup System
 */
