# Vecka 20 Måndag, PostgreSQL

Denna veckan ska vi fördjupa oss mer i SQL tillsammans med databasen Postgres samt kunna publicera en back-end i "molnet"
Vanligt namn istället för postgreSQL är "postgres", detta namnet kommer jag att använda framgent :)
**PostgreSQL** är (likt SQLite) **en SQL-databas** som är öppen källkod och kostnadsfri att använda.
Uppgifterna som krävs för att ansluta till en PostgreSQL-databas kan (ska) läggas in i en .env-fil


# Länkar till nödvändiga filer

Beskrivning hur ni installerar postgreSQL kommer längre ned.

Windows:</br>
[Postgres till Windows](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
</br>
MacOS:</br>
[PostgreSQL installer download page](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

# Länkar till bra dokumentation

[PostgreSQL tutorial](https://www.postgresqltutorial.com/)</br>
[W3Schools SQL tutorial](https://www.w3schools.com/sql/default.asp)</br>


## Hur man installerar postgreSQL till windows:

PostgreSQL utvecklades för UNIX-liknande plattformar, men den var designad för att vara portabel. Det betyder att PostgreSQL även kan köras på andra plattformar som macOS, Solaris och Windows.

Sedan version 8.0 erbjuder PostgreSQL ett installationsprogram för Windows-system som gör installationsprocessen enklare och snabbare. För utvecklingsändamål kommer vi att installera PostgreSQL version 12 på Windows 10.

Det finns tre steg för att slutföra PostgreSQL-installationen:

- Ladda ner PostgreSQL installationsprogram för Windows
- Installera PostgreSQL
- Verifiera installationen

1. Ladda ned:
</br>
[Download PostgreSQL](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Download-PostgreSQL.png)

3. Installera:
För att installera PostgreSQL på Windows måste du ha administratörsbehörighet.

Steg 1. Dubbelklicka på installationsfilen, en installationsguide kommer att dyka upp och guida dig genom flera steg där du kan välja olika alternativ som du vill ha i PostgreSQL.

Steg 2. Klicka på knappen Nästa
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-1.png)
</br>
Steg 3. Ange installationsmapp, välj din egen eller behåll standardmappen som föreslås av PostgreSQL-installationsprogrammet och klicka på knappen Nästa
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-2.png)
</br>
Steg 4. Välj programkomponenter att installera:

PostgreSQL-servern för att installera PostgreSQL-databasservern
pgAdmin 4 för att installera PostgreSQL-databas GUI-hanteringsverktyget.
Kommandoradsverktyg för att installera kommandoradsverktyg som psql, pg_restore, etc. Dessa verktyg låter dig interagera med PostgreSQL-databasservern med hjälp av kommandoradsgränssnittet.
Stack Builder tillhandahåller ett GUI som låter dig ladda ner och installera drivrutiner som fungerar med PostgreSQL.
För handledningen på den här webbplatsen behöver du inte installera Stack Builder så avmarkera den och klicka på Nästa för att välja datakatalogen:
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-3.png)
</br>
Steg 5. Välj databaskatalogen för att lagra data eller acceptera standardmappen. Och klicka på knappen Nästa för att gå till nästa steg:
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-4.png)
</br>
Steg 6. Ange lösenordet för databasens superanvändare (postgres)

PostgreSQL körs som en tjänst i bakgrunden under ett tjänstekonto som heter postgres. Om du redan skapat ett tjänstekonto med namnet postgres måste du ange lösenordet för det kontot i följande fönster.

När du har angett lösenordet måste du skriva in det igen för att bekräfta och klicka på knappen Nästa:
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-5.png)

Steg 7. Ange ett portnummer som PostgreSQL-databas servern ska lyssna på. Standardporten för PostgreSQL är 5432. Du måste se till att inga andra applikationer använder denna port.
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-6.png)
</br>
Steg 8. Välj standardspråket som används av PostgreSQL-databasen. Om du lämnar det som standardspråk, kommer PostgreSQL att använda operativsystemets språk. Klicka sedan på knappen Nästa.
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-7.png)
</br>
Steg 9. Installationsguiden visar sammanfattningsinformationen för PostgreSQL. Du måste granska den och klicka på knappen Nästa om allt är korrekt. Annars måste du klicka på Tillbaka-knappen för att ändra konfigurationen därefter.
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-8.png)
</br>
Nu är du redo att installera PostgreSQL på din dator. Klicka på Nästa för att börja installera PostgreSQL.
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-9.png)
</br>
Installationen kan ta några minuter att slutföra.
Steg 10. Klicka på knappen Slutför för att slutföra PostgreSQL-installationen.
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-12-Windows-Step-11.png)
</br>
3. Verifiera installationen

Det finns flera sätt att verifiera PostgreSQL-installationen. Du kan försöka ansluta till PostgreSQL-databasservern från vilken klientapplikation som helst, t.ex. psql och pgAdmin.

Nu är allt klart!

</br>
## Hur man installerar postgreSQL på MacOS
</br>
För att installera PostgreSQL på macOS följer du dessa steg:

Starta först installationsguiden genom att dubbelklicka på installationsfilen:
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-macOS-step-1.png)
</br>
För det andra, välj katalogen där PostgreSQL ska installeras och klicka på knappen Nästa:
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-macOS-step-2.png)
</br>
För det tredje, välj de komponenter som du vill installera, avmarkera Stack Builder och klicka på knappen Nästa:
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-macOS-step-3.png)
</br>
För det fjärde, ange en katalog där PostgreSQL lagrar data och klicka på knappen Nästa:
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-macOS-step-4.png)
</br>
För det femte, ange lösenordet för postgres användarkonto. Du bör anteckna detta lösenord för att logga in på PostgreSQL-databasservern senare. Efter det klickar du på knappen Nästa.
För det femte, ange lösenordet för postgres användarkonto. Du bör anteckna detta lösenord för att logga in på PostgreSQL-databasservern senare. Efter det klickar du på knappen Nästa.
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-macOS-step-5.png)
</br>
För det sjätte, ange portnumret som PostgreSQL-servern ska lyssna på. Som standard använder PostgreSQL portnummer 5432.
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-macOS-step-6.png)
</br>
För det sjunde, välj språket som används av PostgreSQL. Som standard använder PostgreSQL lokal för det aktuella operativsystemet:
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-macOS-step-7.png)
</br>
För det åttonde, granska installationsinformationen. Om allt ser korrekt ut, klicka på Nästa för att påbörja installationen.
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-macOS-step-8.png)
</br>
För det nionde klickar du på Nästa för att börja installera PostgreSQL-databasservern på din dator:
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-macOS-step-9.png)
</br>
Klicka slutligen på knappen Slutför när installationen är klar:
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Install-PostgreSQL-step-11.png)
</br>
## Skapa databas i pgAdmin
</br>
pgAdmin är ett grafiskt program som kan användas som ett alternativ till terminalen/psql.
För mer dokumentation finns deras sida [här](https://www.pgadmin.org/)

Se till att PostgreSQL går att ansluta till via terminalen.

Starta först pgAdmin.
För det andra, ange lösenordet för postgres-användaren.</br>
För det tredje, högerklicka på PostgreSQL 12 och </br>
välj Skapa > Databas.. för att öppna en dialogruta för att skapa en ny databas.</br>
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Restore-Sample-Database-Step-1.png)
</br>
För det fjärde, ange valfritt namn som databas, postgres som ägare och klicka på knappen Spara för att skapa dvdrental-databasen. (**dvd-rental är endast ett exempel i denna beskrivning, ni anger ett eget databasnamn**)
</br>
![](https://www.postgresqltutorial.com/wp-content/uploads/2020/07/Restore-Sample-Database-Step-2.png)
</br>

## Viktigaste att känna till i pgAdmin
</br>
- Skapa en tabell med pgAdmins verktyg</br>
- Skapa en tabell med query tool</br>
- Se tabeller</br>
- Se data i tabeller</br>
- Editera data i tabeller</br>

**Vänligen se inspelad lektion!** 

</br>
## Använda databasen i en backend-applikation
</br>
Först och främst så måste det finnas en mapp som vi förslagsvis kallar "backend".
I denna måste vi i sedvanlig ordning installera de paket som vi önskar att använda.
Repetion men förslagsvis i terminalen efter att skapat ett repo och öppnat med github desktop och sedan i terminalen:
(Obs detta är endast backend och ej frontend, inte typescript eller react osv)
</br>
1.
- mkdir backend (skapar en mapp med namnet backend)</br>
- cd backend</br>
- touch server.js (skapar en server.js fil)</br>
- npm init</br>
- npm i express</br>
- npm i nodemon --save-dev (glöm ej att lägga till startskriptet i package.json, bör </br>ni kunna nu :) ):</br>
 "start": "nodemon server.js"</br>
 - body-parser (validering av json data)</br>
 - npm i cors (hanterar cors)</br>

2.
Nu installera dotenv och pg:</br>
- npm i dotenv pg</br>

3.
Skapa en .env-fil i backend-mappen med följande innehåll:
HOST=localhost</br>
USER=postgres</br>
PASSWORD=</br>
DATABASE=postgres</br>
PORT=5432</br>
(På Windows ska PASSWORD vara lösenordet som sattes under installationen av PostgreSQL.)

4.
Lägg in .env-filen i .gitignore så att .env-filens innehåll inte registreras i Git .gitignore skulle till exempel kunna se ut så här:</br>
.env</br>
node_modules</br>

5.
Öppna server.js och importera från dotenv och pg:</br>
const dotenv =  require('dotenv'),</br>
{ Client }  =  require('pg')</br>

**Vid ES6 använd:**</br>
import * as dotenv from 'dotenv'</br>
import pkg from 'pg'</br>
const { Client } = pkg</br>

6.
Anropa dotenv.config(), vilket placerar de så kallade miljövariablerna från .env i det inbyggda process.env-objektet:

dotenv.config()

7.
Vi kan nu ansluta till PostgreSQL:

**OBS: "client" kan även heta db eller valfritt namn**</br>
const client =  new  Client({</br>

database: process.env.DATABASE,</br>
host: process.env.HOST,</br>
password: process.env.PASSWORD,</br>
port: process.env.PORT,</br>
user: process.env.USER</br>

})

och lägg till errorfunktion</br>
client.connect(function (err) {</br>
    if (err) throw err</br>
    console.log('Database Connected')</br>
})


8.
skriv npm start i terminalen och se att loggen visar: Database connected
</br>
## Använda express
</br>
Nu ska vi implementera express och övriga paket/middlewares

I server.js:

***Importera:***

Importera enligt nedan:
</br>
import express from 'express'
</br>
import cors from 'cors'
</br>
import bodyParser from 'body-parser'
</br>

***Använda:***
Implementerar express tillsammans med "app":
const app = express()
</br>
Middlewares:
</br>
app.use(bodyParser.json())
</br>
app.use(
</br>
    bodyParser.urlencoded({
        extended: true
    })
)
</br>
app.use(cors())
</br>
app.use(express.json())
</br>
app.use((request, response, next) => {</br>
    response.header('Access-Control-Allow-Origin', '*')</br>
    response.header('Access-Control-Allow-Headers', 'Content-Type')</br>
    next()</br>
})
</br>
***Rutter:***
</br>
//Get anrop
</br>
app.get('/', (req, res) => {</br>
    res.json('Hejsan svejsan')</br>
})
</br>
//Get , alla personer
app.get('/persons', async (req, res) => {</br>
    try {</br>
        const allPersons = await client.query('SELECT * FROM persons')</br>
        res.json(allPersons.rows)</br>
    } catch (err) {</br>
      
  console.log(err.message)
    }
})

***Starta server:***
OBS:Valfri port men använd ej använda portar och den reserverade frontend porten: 3000

app.listen(8800, () => {
    console.log('Server is running')
})

KLART!
Nu ska ni själva arbeta med att lägga till post, put och delete av personer (eller annat) i er databas.





