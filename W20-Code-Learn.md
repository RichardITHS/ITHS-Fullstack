# Vecka 20 Måndag, Övningar

Nu ska ni öva på de moment vi gått igenom.
För att allt ska kunna utföras så krävs det att ni har installerat postgrSQL som anvisat.


## Övning 1
<br>
Skapa en databas med pgAdmin(valfritt namn)<br>
<br>
<br>

## Övning 2
<br>
Skapa 2st tabeller som har en relation till varandra..<br>
<br>

**Första** tabellen ska heta orders och innehålla:<br>
- order_id (som per automatik räknar uppåt..., se vad vi har gjort tidigare)<br>

- customer_id<br>

- order_date<br>
<br>
<br>

**Andra** tabellen ska heta order_items och innehålla:<br>
- order_item_id (som per automatik räknar uppåt..., se vad vi har gjort tidigare)<br>

- order_id<br>

- product_id<br>

- quantity<br>
<br>
TIPS: Glöm ej att sista tabellen ska ha en foreign key och en referens.
<br>
<br>
Ovan går att skapa med terminalen eller med pgAdmin´s query-tool
<br>
<br>

## Övning 3
<br>
Gör en query som får ut ALLA ordrar som finns<br>
För att underlätta...mata in information först i dessa tabeller..<br>
<br>
<br>
<br>

## Övning 4
<br>
Öpnna en tom mapp och skapa en backend mapp<br>
Skapa en anslutning till din postgres databas<br>
Kika på det vi gått igenom:

[Postgres genomgång](./W20-Postgres.md)<br>

<br>
Få ut meddelandet i terminalen att Databas och server är igång
 </br>

![](/img/express7.png)

</br>
<br>
<br>
