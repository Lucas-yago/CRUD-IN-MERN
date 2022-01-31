const express = require("express");
const routes = express.Router()

const Users = require("./controllers/users.controller")

routes.get("/", (req, res)=>{
    res.send("Sever On!")
})

//user routes
routes.post("/api/users", Users.create);

routes.get("/api/users", Users.index);

routes.get("/api/users/:id", Users.details);

routes.delete("/api/users/:id", Users.delete);

routes.put("/api/users", Users.update);


module.exports = routes;