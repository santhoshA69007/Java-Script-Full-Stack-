const express= require("express");
const app= express();
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/about", (req, res) => {
    res.send("About Page hi iam santhosh with big thing");
});
app.get("/abob", (req, res) => {
    res.send("About Page hi iam santhosh with big bib");
});
app.listen(3000, () => console.log("Server is running on this px"));