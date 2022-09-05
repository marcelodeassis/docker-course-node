const express = require("express");
const cors = require("cors");
const app = express();
const Person = require("./model.js");

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect('/api/person')
  //res.send("<b>Node API started!</b><br><ul><li>List persons (GET): <a href='/api/person'>/api/person</a></li><li>Add person (GET): <a href='/api/person/add/NAME'>/api/person/add/NAME</a></li></ul>");
});
require("./routes.js")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

Person.create(new Person({
  name: "Full Cycle Rocks!",
}), (err, data) => {})
