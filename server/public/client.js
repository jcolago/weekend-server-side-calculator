//Running console.log test and clickHandlers when page is 
//ready
$(() => {
    console.log('js and jq');
    clickHandlers();
})


//Global variable for the operators
let operator = '';

//Function to send POST to server when equals button is 
//clicked
function postProblem(){
    //Grabs number values from inputs
    const firstNumber = $('#numInput1').val();
     const secondNumber = $('#numInput2').val();
     let solution = 0
   //Clears inputs after click 
$('#numInput1').val("");
$('#numInput2').val("");

//ajax post to send data package to server side
    $.ajax({
        method: 'POST',
        url: '/history',
        data: {
            num1: firstNumber,
            operator: operator,
            num2: secondNumber,
            solution: solution,
    }
    //Refreshes history after each problem is submitted
    }).then(function (response){
        getHistory();
    }).catch(function(err){
        alert(err);
    });
}

//GET function to get the history array and append lists
function getHistory(){
    $.ajax({
        method: 'GET',
        url: '/history'
    }).then(function (response){
        appendHistory(response);
        appendSolution(response);
    });
}

function appendHistory(response) {
//Loops through the response from the getHistory function and appends the history list
    $('#history').empty();
    for (let i=0; i<response.length; i++){
        let math = response[i];
        $('#history').append(`
        <li>${math.num1} ${math.operator} ${math.num2} = ${math.solution}</li>
        `)
        $('#numInput').val('');
    }
}
//Appends the solution to the DOM for the most recent problem
function appendSolution(response){
    let x = (response.length - 1);
    $('#result').text(response[x].solution)

}
//The click handlers for the buttons on DOM
function clickHandlers() {
    $('#addButton').on('click', addButton);
    $('#subButton').on('click', subButton);
    $('#multButton').on('click', multButton);
    $('#divButton').on('click', divButton);
    $('#equals').on('click', postProblem);
    $('#clear').on('click', clearInputs);
}
//Functions that run on the click of the button
function addButton() {
    operator = `+`;
    console.log(operator)
}
function subButton() {
    operator = '-';
    console.log(operator)
}
function multButton() {
    operator = '*';
    console.log(operator)
}
function divButton() {
    operator = '/';
    console.log(operator)
}
//Clears inputs on click
function clearInputs() {
    $('#numInput1').val('');
    $('#numInput2').val('');
    console.log('Cleared inputs');
}