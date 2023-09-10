//Connected express and set port to 5000

const express = require("express");
const app = express();
const PORT = 5000;
const historyArray = require('./modules/history');


//Connected static files and POSTMAN
app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));

//GET request to get the historyArray data from module
app.get('/history', (req, res) => {
    res.send(historyArray);
    //Test of get route
    console.log(historyArray);
})
//POST logic for when the equals button is clicked
app.post('/history', (req, res) => {

    //Error message if one of the inputs is missing
    if (!req.body.num1 || !req.body.operator || !req.body.num2) {
        res.status(400).send("Please enter 2 numbers and select an operator");
        return;
    }

    //Logic for math based on the operator selected
    let problem = req.body;
    if (problem.operator === "+") {
        problem.solution = Number(problem.num1) + Number(problem.num2)
    } else if (problem.operator === "-") {
        problem.solution = Number(problem.num1) - Number(problem.num2)
    } else if (problem.operator === "*") {
        problem.solution = Number(problem.num1) * Number(problem.num2)
    } else if (problem.operator === "/") {
        problem.solution = Number(problem.num1) / Number(problem.num2)
    }

    //Push to the history array
    historyArray.push({ num1: problem.num1, operator: problem.operator, num2: problem.num2, solution: problem.solution });
    //Test for POST route
    console.log('POST request for /history');
    res.sendStatus(200);
})


app.listen(PORT, () => {
    console.log('Listening on port:', PORT)
})