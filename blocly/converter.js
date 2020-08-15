var express = require('express');
var app = express();
var code = "from microbit import *\n" +
    "\n" +
 "a = 5\n" +
    "b = 20\n" +
    "x = a+b\n" +
    "display.scroll(x)";

    var file_path = "myfiles/button_presed.py";
    var spawn = require("child_process").spawn;

    function callCode(code) {
    var process = spawn('python', ["./codeBasedConveter.py", code]);
     process.stdout.on('data', function(data) {
         console.log(data.toString());
        res.send(data.toString());
        } )

    }

