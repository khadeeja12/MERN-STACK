# MERN-STACK
Mongulardb,Express,react,Node js
<h1>React</h1><br> 
rfce<br>
State - store data/info about a component<br>
Props- transfer data from parent(passing values here) to child (gets the value and activate the props here) <br>
when we enter the values in form, event is occur. so to handle the event we use state<br>
So we import useState- we are getting previous value and updated values<br>
The Values inside the state ie, previous values are immutable<br>

<h1>MongoDB</h1><br>
Nosql- unstructured <br>
Here Collections are there - no rows and columns<br>
No datatype, not important to presnt all values<br>

show dbs - to know the the databases<br>
use mydb - we switched to our new database. if exist, it switch and if not exist create and switch to it<br>
db.createCollection("mycollect") - creating new Collection
Inserting Values into Collection:<br>
db.mycollect.insertOne({name:"khadeeja",age:22,profession:"student"}) - For insert one value<br>
For each item inserted we get unique id<br>
mydb> db.mycollect.insertMany([{name:"Nintu",age:21},{name:"Nivya",profession:"CloudEngineer"},{name:"Sahala",age:23,profession:"Associate"}]) - For many Values <br>
db.mycollect.find() - For seeing the all data in Collection<br>
db.mycollect.find({name:"khadeeja"}) - find by name <br>
db.mycollect.find({_id: ObjectId('6729b18d28959604520d8190')}) - find by id <br>
db.mycollect.find({$and : [{name:"khadeeja"},{age:22}]}) - find using And (2 values)<br>
db.mycollect.find({$or : [{name:"khadeeja"},{profession:"student"}]}) - find using or <br>
db.mycollect.find({$and:[{age:{$lt:30}},{age:{$gt:20}}]}) - greaterthan and lessthan <br>
db.mycollect.find({profession:{$ne:"student"}}) - not the profession <br>

 
 

 
