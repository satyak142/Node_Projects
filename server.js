// dependencies
const express = require('express') ;
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient ;
require('dotenv').config();

// monogo connection
let db,
    dbConnectionString = process.env.DB_STRING ,
    dbName = '' ,// add db name
    collection ;

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('connected to Database');
        db = client.db(dbName) ;
        collection = db.collection('')//add collection name
    })

// view  engine setup
app.set('view engine','ejs');
// static files
app.use(express.static('public'));
// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());



// port
app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on port ${PORT}`)
})