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
/* app.get('/persons', async (req, res) => {
    try {
        const allPersons = await client.query('SELECT * FROM persons')
        res.json(allPersons.rows)
    } catch (err) {
        console.log(err.message)
    }
}) */

app.get('/persons', async (req, res) => {
    try {
      const result = await client.query('SELECT * FROM persons');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });



//POST , så att vi kan skapa personer (Nedan är ett kodat exempel, om det är ett formulär
//är det givetvis annorlunda)
/* app.post('/person', async (req, res) => {
    const { LastName, FirstName, Address, City } = req.body
    const values = [LastName, FirstName, Address, City]
    await db.query(
        'INSERT INTO persons(Smiths, Janes, 456 Elm St, Shelbyvilles) VALUES($1, $2, $3, $4)',
        values
    )
    res.send('Person Added')
})
 */
app.post('/persons/submit-form', async (req, res) => {
    const { FirstName, LastName, Address, City } = req.body;
    try {
      await client.query(
        'INSERT INTO persons (FirstName, LastName, Address, City) VALUES ($1, $2, $3, $4)',
        [FirstName, LastName, Address, City]
      );
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });


//Exempel på joins
/* app.get('/orders/:userId', async (req, res) => {
    const userId = req.params.userId;
    const query = `
      SELECT *
      FROM Orders
      JOIN Users
      ON Orders.UserID = Users.UserID
      WHERE Users.UserID = $1
    `;
    const values = [userId];
    try {
      const result = await pool.query(query, values);
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('An error occurred');
    }
  }); */

app.listen(8800, () => {
    console.log('Server is running')
})
