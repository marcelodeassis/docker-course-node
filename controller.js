const Person = require("./model.js");

// gambi pra converter o output json pra HTML
toList = (jsonStr) => {
    var out = '';
    jsonStr.forEach(element => {
        out += "<p>" + element.name + " ( ID: "+element.id+")</p>";
    });

    return out;
}


exports.create = (req, res) => {
    console.log("adding: ", req.params.name)

    const person = new Person({
        name: req.params.name,
    });
    Person.create(person, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Person."
          });
        else res.send(data);
    });

};
exports.findAll = (req, res) => {
    console.log(`findAll`);
    Person.getAll( (err, data) => {
        if (err)
            res.status(500).send({
                message:  err.message || "Some error occurred while retrieving Person."
            });
        else{
            //res.send(data);
            res.send(toList(data));
        } 
    });
};