# logging-js-errors

This is the simplest logging of js errors on site.

To install add monitor-errors.js using script tag or copy-paste contains of this file just after <head> inside tags script
at template of your site.

To test receiving errorLine, errorMessage and location you can send to /log-js-error.php POST request at https://reqbin.com/

Many sites use cache, your must clean it, after that you should view source for checking that js part is visible in HTML markup. 

Errors will be logging at /logs/js-errors.txt

