/*const http = require('http')

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})

    let content = `
    <html>
        <body>
            <h1 id="scramble">Default</h1>
        </body>
    </html>
    `
    res.write(content)
    res.end()
})

server.listen(8080, () => {
    console.log('Node.js server is ready, listening on http://localhost:8080')
})*/
const http = require('http')
const scrambo = require('scrambo')
var threebythree = new scrambo()

var server = http.createServer(function (request, response) {
    switch (request.url) {
        case "/AppClientStyle.css" :
            response.writeHead(200, {"Content-Type": "text/css"});
            response.write(`p.normal {
                font-weight: normal;
              }
              
              p.thick {
                font-weight: bold;
              }`);
            break;
        default :    
            let generatedTimes = []
            response.writeHead(200, {"Content-Type": "text/html"});
            for(i=0; i < 10000; i++){
                generatedTimes[i] = threebythree.get(1)
                response.write(`<h1 style="font-size:7.5vw; class="sansserif";">` + generatedTimes[i] + `</h1>`);
                //response.write(`<input type="text" name="FirstName" value=""><br>`)
            }
    }
    response.end();
})

server.listen(3000);


console.log("Server running at http://127.0.0.1:3000/");