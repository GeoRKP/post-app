const typeorm = require("typeorm")
require("dotenv").config

const CategoryEntity = require('./model/Category').CategoryEntity
const PostEntity = require('./model/Post').PostEntity

const dataSource = new typeorm.DataSource({
    type: "mariadb",
    host: "83.212.120.95",
    port: 3306,
    username: "cf4",
    password: "cf42023",
    database: "codingfactory4",
    entities: [CategoryEntity, PostEntity],
    synchronize: true
})

dataSource
    .initialize()
    .then(function() {
        console.log('Connected to database')
    })
    .catch(function(err) {
        console.log('Problem in connecting to database ', err)
    })

module.exports = {dataSource}


