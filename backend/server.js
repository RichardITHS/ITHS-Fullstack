import { config } from 'dotenv'
import pkg from 'pg';
const { Client } = pkg;

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
config()

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(cors())
app.use(express.json())
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

const client =  new  Client({

    database: process.env.DATABASE,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    user: process.env.USER

    })

    client.connect(function (err) {
        if (err) throw err
        console.log('Database Connected')
    })

 //Rutter
 //Get anrop
app.get('/', (req, res) => {
    res.json('Hejsan svejsan')
})

//Get , alla personer
app.get('/persons', async (req, res) => {
    try {
        const allPersons = await client.query('SELECT * FROM persons')
        res.json(allPersons.rows)
    } catch (err) {
        console.log(err.message)
    }
})

app.listen(8800, () => {
    console.log('Server is running')
})
