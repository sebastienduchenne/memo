var mysql = require('mysql');

//https://www.developper-jeux-video.com/acces-mysql-nodejs/

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "events"
});
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

let events = ""

exports.list = (req, res) => {
    console.log("exports.list")
    const sql = "SELECT * FROM events"
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result[0]['titre']);
        events = result[0]['titre']
    });

    res.status(200).send(events);
};

exports.getById = (req, res) => {
    console.log("exports.getById")

    //console.log(events)

    res.status(200).send("getById");
};

exports.create = (req, res) => {
    console.log("exports.create")

    res.status(200).send("create");
};

exports.updateById = (req, res) => {
    console.log("exports.updateById")

    res.status(200).send("update");
};

exports.removeById = (req, res) => {
    console.log("exports.removeById")

    res.status(200).send("remove");
};
