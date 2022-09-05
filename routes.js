module.exports = app => {
    const controller = require("./controller.js");
    var router = require("express").Router();
    //router.post("/person", controller.create);
    router.get("/person", controller.findAll);
    router.get("/person/add/:name", controller.create);
    
    app.use('/api', router);
  };