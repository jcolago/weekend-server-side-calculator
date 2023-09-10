$(() => {
    console.log('js and jq');
    clickHandlers();
})



let operator = '';




function postProblem(){
    const firstNumber = $('#numInput1').val();
     const secondNumber = $('#numInput2').val();
     let solution = 0
    
$('#numInput1').val("");
$('#numInput2').val("");

    $.ajax({
        method: 'POST',
        url: '/history',
        data: {
            num1: firstNumber,
            operator: operator,
            num2: secondNumber,
            solution: solution,
    }
    }).then(function (response){
        getHistory();
    }).catch(function(err){
        alert(err.responseText);
    });
}

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

    $('#history').empty();
    for (let i=0; i<response.length; i++){
        let math = response[i];
        $('#history').append(`
        <li>${math.num1} ${math.operator} ${math.num2} = ${math.solution}</li>
        `)
        $('#numInput').val('');
    }
}

function appendSolution(response){
    let x = (response.length - 1);
    $('#result').text(response[x].solution)

}
function clickHandlers() {
    $('#addButton').on('click', addButton);
    $('#subButton').on('click', subButton);
    $('#multButton').on('click', multButton);
    $('#divButton').on('click', divButton);
    $('#equals').on('click', postProblem);
    $('#clear').on('click', clearInputs);
}

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
function clearInputs() {
    $('#numInput1').val('');
    $('#numInput2').val('');
    console.log('Cleared inputs');
}