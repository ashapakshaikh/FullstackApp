var express = require('express')
var app = express()
var cors = require('cors')


var posts = [
    {message: 'hello'},
    {message: 'hi'}

]

app.use(cors())

app.get('/posts', (req,res) => {

	res.send(posts)
})

app.listen(4000);