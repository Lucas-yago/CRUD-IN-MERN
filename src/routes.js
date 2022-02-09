const express = require("express");
const routes = express.Router()

const Users = require("./controllers/users.controller")
const Products = require("./controllers/products.controller");

routes.get("/", (req, res)=>{
    res.send("Server On!")
})

//User routes
routes.post("/api/v1/users", Users.create);

routes.get("/api/v1/users", Users.index);

routes.get("/api/v1/users/:_id", Users.details);

routes.delete("/api/v1/users/:_id", Users.delete);

routes.put("/api/v1/users", Users.update);

routes.post("/api/v1/users/login", Users.login);


//Product routes
routes.post("/api/v1/products", Products.create);

routes.get("/api/v1/products", Products.index);

routes.get("/api/v1/products/:_id", Products.details);

routes.delete("/api/v1/products/:_id", Products.delete);

routes.put("/api/v1/products", Products.update);

module.exports = routes;