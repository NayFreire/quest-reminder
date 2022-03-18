const express = require('express')
const app = express()
const sequelize = require('sequelize')

app.get('/', (req, res) => {
    res.send('aaa')
})

app.listen(3333, () => {
    console.log('O PAI TÁ ON')
})