const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => users_db = json)

app.post("/api/fill", (req, res) => {
    res.send(users_db);
});

app.post("/api/users", (req, res) => {
    res.send(users_db.map(obj =>
        `Name:${obj.name}, 
        Email:${obj.email}, 
        Address:${obj.address.street}, ${obj.address.suite}, ${obj.address.city}, Zip:${obj.address.zipcode}, ${obj.address.geo.lat}, ${obj.address.geo.lng}`));
});

app.get("/api/users", (req, res) => {
    res.send(users_db.map(obj =>
        `${obj.id}.
        Name:${obj.name}, 
        Email:${obj.email}, 
        Address:${obj.address.street}, ${obj.address.suite}, ${obj.address.city}, Zip:${obj.address.zipcode}, ${obj.address.geo.lat}, ${obj.address.geo.lng}`));
});

app.get("/api/users/names", (req, res) => {
    res.send(users_db.map(obj =>
        `${obj.id}. Name: "${obj.name}"`))
});

app.get("/api/users/emails", (req, res) => {
    res.send(users_db.map(obj =>
        `${obj.id}. Name: "${obj.name}", email: "${obj.email}"`))
});

app.get("/api/users/address", (req, res) => {
    res.send(users_db.map(obj =>
        `${obj.id}. Name: "${obj.name}", Address: "${obj.address.street}, ${obj.address.suite}, ${obj.address.city}, Zip:${obj.address.zipcode}, ${obj.address.geo.lat}, ${obj.address.geo.lng}"`))
});

app.listen(port, () => {
    console.log(`server is runing on the ${port} port`)
})