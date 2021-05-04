const express = require('express')
const cors = require('cors')
const app = express() 

var bcrypt = require('bcryptjs')
const fetch = require('node-fetch')




app.use(cors())
app.use(express.json())



app.get('/search/:searchparam', (req, res) => {
    
    const searchparam = req.params.searchparam
    console.log(req.params)
    const api_key = "fa6e60c3ff202a27cf95244140fd6775aacefc7cbc7cfe793b5713edd612e893"
    const engine = "google"
    fetch(`https://serpapi.com/search.json?engine=${engine}&q=${searchparam}&safe=active&api_key=${api_key}`)
    .then(res => res.json())
    .then(text => 
        res.json(text))

})

app.get('/news/:searchparam', (req, res) => {
    
    const searchparam = req.params.searchparam
    console.log(req.params)
    const api_key = "fa6e60c3ff202a27cf95244140fd6775aacefc7cbc7cfe793b5713edd612e893"
    
    fetch(`https://serpapi.com/search.json?&tbm=nws&q=${searchparam}&safe=active&api_key=${api_key}`)
    .then(res => res.json())
    .then(text => 
        res.json(text))

})


app.get('/image/:searchparam', (req, res) => {
    
    const searchparam = req.params.searchparam
    console.log(req.params)
    const api_key = "fa6e60c3ff202a27cf95244140fd6775aacefc7cbc7cfe793b5713edd612e893"
    
    fetch(`https://serpapi.com/search.json?&tbm=isch&q=${searchparam}&safe=active&api_key=${api_key}`)
    .then(res => res.json())
    .then(text => 
        res.json(text))

})


app.get('/video/:searchparam', (req, res) => {
    
    const searchparam = req.params.searchparam
    console.log(req.params)
    const api_key = "fa6e60c3ff202a27cf95244140fd6775aacefc7cbc7cfe793b5713edd612e893"
    
    fetch(`https://serpapi.com/search.json?&tbm=vid&q=${searchparam}&safe=active&hl=en&gl=us&api_key=${api_key}`)
    .then(res => res.json())
    .then(text => 
        res.json(text))

})

app.listen(8081, () => {
    console.log('Server is running...')
})