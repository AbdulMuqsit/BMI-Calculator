const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (require, response)  //this is route
{
    // response.send("Hello World!");
    response.sendFile(__dirname + "/index.html");
    // console.log(__dirname);
});



app.post("/", function (request, response) {
    // console.log(request.body);
    var num1 = Number(request.body.num1);
    var num2 = Number(request.body.num2);
    var result = num1 + num2;
    response.send(String(result));
});
app.get("/bmicalculator", function (request, response) {
response.sendFile(__dirname + "/bmicalculator.html");
});
app.post("/bmicalculator", function (request, response) {
    // console.log(request.body);
    var weight = parseFloat(request.body.weight);        //name comes from name
    var height = parseFloat(request.body.height);
    var bmi=weight/(height*height);
    response.send("Your bmi is "+ String(bmi));
});
app.listen(3000, function () {
    console.log("Server is running at port 3000");
})