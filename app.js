const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs"
});
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        console.log(result[0]);
      });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post("/ras",(req,res)=>{
    let data={
        'message' :"Found!",
        'code' : req.body.code
    };
    console.log(req.body);
    res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})