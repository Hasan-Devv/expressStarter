const express = require('express')
const app = express()
const PORT = 52980

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("hello world")
} )

app.get('/about', (req, res) => {
    res.send("about page")
})

app.get('/users', (req, res, next) => {
    res.send("users page")
    next()
})

app.get('/products', (req, res) => {
    res.send("products page")
})

app.post('/users', (req, res, next) => {
    res.send("user posted")
    next()
})

app.put('/users', (req, res, next) => {
    res.send('user updated')
    next()
})

app.delete('/users', (req, res, next) => {
    res.send('user deleted')
})

// query params
app.get('/users', (req, res, next) => {
    let reqQueryPage = req.query.page
    console.log(reqQueryPage)
    next()
})

app.get('/users/:id', (req, res, next) => {
    let id = req.params["id"]
    res.send(id)
    next()

    })

