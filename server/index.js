const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app =  express();


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'moviebooking'
})

app.get('/api/getmovieinfo', (req, res) =>{
    var sql= "SELECT * FROM movie";
    connection.query(sql, function(err, results) {
        if (err) throw err;
        res.json(results);
      });
});

app.post('/api/login', (req, res) =>{
  var sql= "SELECT user_password FROM user where user_userName =?";
  connection.query(sql, [req.body.username], function(err, results) {
      if (err) throw err;
      res.json( ...results );
    });
});

app.post('/api/getmovieTimeId', (req, res) =>{
  var sql= "SELECT schedule_id FROM movie_schedule_seat where movie_id=?";
  connection.query(sql,[red.body.movie_id], function(err, results) {
      if (err) throw err;
      res.json(results);
    });
});



app.listen(3001, () =>{ console.log("running on server 3001")});