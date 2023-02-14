const http = require('http')
const server = http.createServer((req, res) => {
   if(req.url === '/'){
    res.end('homepage')
    return // must have return or else js will continue running to the next code and try to respond a second time- producing an error.
}

    if(req.url === '/about') {
        res.end('short history')
        return
    }

    res.end(`<h1>404 MOTHA FUKKA!</h1>
    <br/>
    <a href="/">return here yo</a>
    `)

})

server.listen(5000)
