const http = require('http')
const fs = require('fs')


const server = http.createServer((request, response) =>
{   
    const data = fs.readFileSync("index.html")
    const styles = fs.readFileSync("style.css")
    const scripts = fs.readFileSync("script.js")

    if(request.method === "GET")
    {
        if(request.url === "/")
        {
            response.writeHead(200, {"Content-type" : "text/html"})
            response.write(data)
            console.log("loading html")
        }
        else if(request.url === "/style.css")
        {
            response.writeHead(200, {"Content-type" : "text/css"})
            response.write(styles)
            console.log("loading css")
        }
        else if(request.url == "/script.js")
        {
            response.writeHead(200, {"Content-type" : "text/javascript"})
            response.write(scripts)
            console.log("loading js")
        }
    }
    
    response.end()
})

server.listen(8080, (err) =>
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("listening on port 8080")
    }
})
