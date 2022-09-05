const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "db",  //container name no docker compose
  //host: "localhost",  //local
  user: "root",
  password: "root",
  database: "testdb"
});

connection.connect(error => {
  console.log("DB trying to connect...");
  if (error) throw error;
  console.log("DB connected!");
});
module.exports = connection;
