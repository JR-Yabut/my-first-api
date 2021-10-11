const expess = require("express");
const app = expess();
const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/hello-world", (req, res) => {
    res.send("Hello World!?");
});

app. listen(8888, () => {
    console.log("App is listening to http://localhost:8888");
});
