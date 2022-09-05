const sql = require("./db.js");
// constructor
const Person = function(person) {
  this.name = person.name;
};
Person.create = (person, result) => {
  sql.query("INSERT INTO persons SET ?", person, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created person: ", { id: res.insertId, ...person });
    result(null, { id: res.insertId, ...person });
  });
};

Person.getAll = result => {
  let query = "SELECT * FROM persons";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("persons: ", res);
    result(null, res);
  });
};

module.exports = Person;
