const express = require('express')
const app = express()

const port = 3000

const postRoute = require('./routes/post.route')
const categoryRoute = require('./routes/category.route')


const dataSource = require('./connect').dataSource

app.use(express.json())

app.use('/api/categories', categoryRoute)
app.use('/api/posts', postRoute)

app.listen(port, () => {
    console.log('App is listening on port 3000')
})

