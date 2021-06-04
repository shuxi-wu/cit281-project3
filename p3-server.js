/* CIT 281 Project 3
Name: Shuxi Wu */

const fs = require('fs')
const fastify = require('fastify')()
const {coinCount, coins} = require('./p3-module')

//create server
fastify.get('/', (reqest, reply) => {
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
        if(err) {
            console.log(err)
            reply
                .code(500)
                .send('Error')
        }else{
            reply
                .code(200)
                .header('Content-Type', 'text/html')
                .send(data)
        }
    })
})

//add coin route
fastify.get('/coin', (request, reply) => {
    let {denom = 0, count = 0} = request.query 
    denom = parseFloat(denom)
    count = parseFloat(count)
    let coinValue = coinCount({denom: denom, count: count})
    reply
        .code(200)
        .header('Content-Type', 'text/html')
        .send(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`)
})

//add coins route
fastify.get('/coins', (request, reply) => {
    let {option} = request.query
    let coinValue
    
    switch(option) {
        case '1':
            coinValue = coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 })
            break
        case '2':
            coinValue = coinCount(...coins)
            break
        case '3':
            coinValue = coinCount(coins)
            break
        default:
            coinValue = 0
            break
    }
    reply
        .code(200)
        .header('Content-Type', 'text/html')
        .send(`<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`)
})

//add listen
const host = 'localhost'
const port = 8080
fastify.listen(port, host, () => {
    console.log(`server running at http://${host}:${port}`)
})
