//Connected express and set port to 5000

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
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


    let problem = req.body;

    //Logic for math based on the operator selected

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
});
//DELETE request for /history. Will empty the historyArray when run.
app.delete('/history', (req, res) => {
    console.log('Request for DELETE on /history');
    historyArray.length = 0;
    res.sendStatus(204);
});


app.listen(PORT, () => {
    console.log('Listening on port:', PORT)

})