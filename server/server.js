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
    fetch(`https://serpapi.com/search.json?engine=${engine}&q=${searchparam}&api_key=${api_key}`)
    .then(res => res.json())
    .then(text => 
        res.json(text))

})


app.listen(8081, () => {
    console.log('Server is running...')
})