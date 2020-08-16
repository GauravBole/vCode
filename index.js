
var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function (req, resp) {

var fs = require('fs');

    // console.log(req.method, "requested method", req.url)
    if (req.url === "/") {


        fs.readFile(__dirname+"/micro.html",  'utf-8', function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
            resp.end();
        });
   }
   else if(req.url.match("\.js")) {
        var cssPath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        resp.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(resp);
    }
   else if(req.url.match("\.png")){
       let logopath = path.join(__dirname, req.url)
        // console.log(logopath)

        let fileToLoad = fs.readFileSync(logopath);
    resp.writeHead(200, {'Content-Type':  'image/png' });
    resp.end(fileToLoad, 'binary');

    }

   else if(req.url === "/run_code/" && req.method === 'POST'){

        console.log("...............> in post method");
        var body = '';
        req.on('data', function (data) {
            body += data;
        var spawn = require("child_process").spawn;
        var process = spawn('python', ["./codeBasedConveter.py", data.toString()]);
        process.stdout.on('data', function(data) {
        console.log((data.toString()))
        resp.setHeader('Content-Type', 'application/json');
        resp.end((data.toString()));
        } )
        })

    }
   else if(req.url === "/download_hex/"){
        const file = `${__dirname}/micro_bit/my_hex.hex`;
          resp.setHeader('Content-disposition', 'attachment; filename=' + "my_hex.hex");
        resp.setHeader('Content-type', "application/x-binary", 'attachment; filename=dramaticpenguin.hext');

      var filestream = fs.createReadStream(file);
      filestream.pipe(resp);
    }

    else {

        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<h1>Try http://localhost:5050/index</h1><br /><br />' + req.url +' Url not found');
        resp.end();
    }

});



server.listen(5050);

console.log('Server Started listening on 5050 try to run http://localhost:5050/index');
