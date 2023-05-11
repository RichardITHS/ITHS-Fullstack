# Vecka 20 Måndag, SQL Repetiton

Som nämnt så skiljer det sig ej mycket mellan de olika SQL databaserna vad gäller SQL syntax.
Ibland kan det dock skilja sig mellan olika namn på data typer etc men det lär man sig ganska fort.

Ett bra sätt att träna sig på detta är använda det material ni fått via avancera men också via andra källor.

## Länkar:

[W3Schools](https://www.w3schools.com/mysql/default.asp)
</br>
[PostgreSQL](https://www.postgresqltutorial.com/)
</br>
[Avancera](https://avancera.app/courses/4b4f84f4-66dd-4c67-9170-6b312c4c2d1f/3da32729-c91d-4e00-915e-8910e418f4ae)

## Vanliga kommandon i postgreSQL:
Fungerar i psql terminalen samt i query tool i pgAdmin
</br>

**Skapa en tabell:**
</br>
Observera nedan att postgres använder serial istället för AUTO INCREMENT
mer om datatyper i postgres kan ni läsa här(viktigt):</br>
[Postgres Datatyper](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-user-defined-data-types/)
</br>

CREATE TABLE Persons (</br>
  id SERIAL PRIMARY KEY,</br>
  LastName varchar(255),</br>
  FirstName varchar(255),</br>
  Address varchar(255),</br>
  City varchar(255)</br>
);</br>
</br>

**Sätta in data:**
</br>
INSERT INTO Persons (LastName, FirstName, Address, City)</br>
VALUES ('Smiths', 'Janes', '456 Elm St', 'Shelbyville');</br>
</br>

**Hämta data:**
</br>
SELECT * FROM public.persons</br>
ORDER BY id ASC </br>
</br>

**Radera en tabell:**</br>
OBS: Om ni testar er fram just nu, gör inte nedan kommando om ni vill</br>
fortsätta testa olika kommandon med den databas som är skapad</br>
</br>
DROP TABLE IF EXISTS persons;</br>
</br>

**Uppdatera data:**
</br>
UPDATE persons</br>
SET LastName = 'Richard'</br>
WHERE id = 2</br>
</br>

**Ta bort data:**
</br>
DELETE FROM persons</br>
WHERE id = 2</br>
</br>

## Hur gör vi med ovan i express?:
När vi arbetar med pg i express så tillkallar vi alltid och använder client.query eller db.query beroende på vad ni valt att kalla variabeln.
</br>
</br>
![](/img/express1.png)
</br>
</br>
Alla olika metoder vi använder är asynkrona.</br>
Vi måste även se till att ha en try and catch metod för errorhantering.</br>
Bra vore även om ni arbetade med att ge tillbaka statuskoderna som ni lärt er tidigare.

**Ett exempel hur ni använder GET och SQL SELECT:**
</br>
</br>
![](/img/express2.png)
</br>
</br>

**Ett exempel hur ni använder POST och SQL INSERT:**
Observer att nedan är ett förutbestämt värde, vid formulär på hos en klient</br>
är det givetvis annorlunda, det får ni lista ut vid grupp projektet
</br>
</br>
![](/img/express3.png)
</br>
</br>

## Relation med flera tabeller:
Att kunna skapa relationer mellan tabeller är en viktig del i arbetet med databaser</br>
och framförallt den starka sidan med SQL</br>
Att ha en relation innebär kort och gott att vi exempelvis kan ha en tabell med användare</br>
som i sin tur har gjort inköp i en webbutik, vars tabell heter "beställningar"</br>
Varje gång en av användare lägger en order kommer denna att arbeta ihop med den andra tabellen</br>
Vi kan därför få en överblick på kunder och deras ordrar och vi brukar som nämnt alltid skapa ER diagram</br>
innan vi planerar hur vår databas ska sättas upp.</br>
</br>
</br>
**Exempel:**
Ett ER-diagram för två tabeller: användare och beställningar.</br>
Ett ER-diagram (Entity-Relationship diagram) är en grafisk representation</br>
av entiteter och deras relationer till varandra. </br>
I det här fallet kan du ha en relation mellan användare och beställningar </br>
där en användare kan ha flera beställningar. </br>
Detta kan representeras med en en-till-många-relation mellan </br>
användartabellen och beställningstabellen.
</br>
</br>

![](/img/express4.png)
</br>
</br>
I det här exemplet har varje användare en unik UserID och varje beställning har en unik OrderID. </br>
En användare kan ha flera beställningar, men varje beställning hör till en enda användare.</br>
Detta representeras med en en-till-många-relation mellan de två tabellerna.</br>
</br>
</br>
För att skapa denna relation i SQL kan du använda följande kod:</br>
</br>
</br>
![](/img/express5.png)
</br>
</br>
Detta skapar två tabeller: Users och Orders. </br>
I Orders-tabellen finns det en kolumn som heter UserID som är en främmande </br>nyckel som refererar till UserID-kolumnen i Users-tabellen. </br>
Detta skapar en relation mellan de två tabellerna där varje rad i </br>Orders-tabellen hör till en enda rad i Users-tabellen.</br>
</br>
</br>

## Få ut data från relationstabeller:
</br>
</br>
För att få ut data från exemplet ovan i Express och SQL så </br>
behöver arbeta med något som kallas för "join", dvs att man</br>
för samman de båda i en query</br>
Läs mer om Joins på de källor som är angivet längst upp i denna fil</br>
</br>
</br>
Här ett exempel på hur vi kan plocka ut alla beställningar som en användare har</br>
 gjort med de tabeller vi gett exempel på ovan med express, sql och joins:</br>
 </br>
 </br>

![](/img/express6.png)

</br>
</br>
Nu har vi gått igenom det viktigaste för er.</br>
Det finns otroligt mycket trevligt man kan göra i SQL</br>
här har vi visat det mest elementära i detta</br>
Det är upp till er att fördjupa er i detta i era självstudier</br>
Grupp Projektet kommer att ge er utmaningar i detta</br>
