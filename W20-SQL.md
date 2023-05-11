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
UPDATE persons</br>
SET LastName = 'Richard'</br>
WHERE id = 2</br>
</br>
