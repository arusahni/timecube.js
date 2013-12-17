timecube.js
===========

A JavaScript library that turns an ordinary website into a 4 corner
simultaneous 4 day page.

Demo
-----
[Click here to view a demo](http://arusahni.github.io/timecube.js).

Installation
------------

Reference the timecube.js file on your website.
```html
<script src="timecube.js"></script>
```
Then, invoke it

```javascript
Timecube.timecubify();
```
Configuration
-------------

By default, timecube.js attempts to skin the `<body>` element of a web page, and
applies formatting to all `<p>` blocks.  If you wish to change the default
behavior, invoke the script with two parameters...
```javascript
Timecube.timecubify(rootTag, blockTag); //by default, body and p
```
Disclaimer
----------

This script is in no way affiliated with Timecube.com or its creator. 
