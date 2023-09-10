const express = require("express");
const app = express();
const PORT = 5000;
const historyArray = require('./modules/history');



app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));


app.get('/history', (req, res) => {
    res.send(historyArray);
    console.log(historyArray);
})

app.post('/history', (req, res) => {

    if ( !req.body.num1 || !req.body.operator || !req.body.num2) {
        res.status(400).send("Please enter 2 numbers and select an operator");
        return;
    }
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
    historyArray.push({num1: problem.num1, operator: problem.operator, num2: problem.num2, solution: problem.solution});
    console.log('POST request for /history');
    res.sendStatus(200);
})



app.listen(PORT, () => {
    console.log('Listening on port:', PORT)
})