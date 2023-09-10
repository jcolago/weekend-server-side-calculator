$(() => {
console.log('js and jq');
clickHandlers();
})

let operator = '';

function postProblem(){
    console.log('Incoming problem');
}

function clickHandlers(){
    $('#addButton').on('click', addButton);
    $('#subButton').on('click', subButton);
    $('#multButton').on('click', multButton);
    $('#divButton').on('click', divButton);
    $('#equals').on('click', postProblem);
    $('#clear').on('click', clearInputs);
}

function addButton(){
    operator = '+';
    console.log(operator)
}
function subButton(){
    operator = '-';
    console.log(operator)
}
function multButton(){
    operator = '*';
    console.log(operator)
}
function divButton(){
    operator = '/';
    console.log(operator)
}
function clearInputs(){
    $('#numInput1').val('');
    $('#numInput2').val('');
    console.log('Cleared inputs');
}