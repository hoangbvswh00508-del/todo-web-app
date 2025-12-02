
function hello() {
    console.log("to-do List app installed succesfully")
}

function sum(a, b) {
    let result = a + b;
    return result;
}

hello();
let sum2num = sum(2, 1);
console.log("Sum 2 and 1 are: " + sum2num);

function inMauSo() {
    for ( let i = 1; i <= 5; i++) {
        if (i % 2 === 0) {
            console.log(`[Done] The work number ${i}: Check the code.`);
        } else {
            console.log(`[Done] The work number ${i}: write the document`);
        }
    }
}
inMauSo();
//get input to users to add their tasks
const inputField = document.getElementById('todo-input');
//create add button 
const addButton = document.getElementById('add-button');
//get list <ul> to put head on
const todolist = document.getElementById('todo-list');
//Check get result
console.log("InPut Element: ", inputField);
console.log("Button Element: ", addButton);

// the function will be call when the add button appear
function handleAddTodo() {
// get value from input
    const todoText = inputField.value;
// check value input
    if (todoText.trim() !== "") {
        console.log("My Task Need: " + todoText);
        // delete input value after submit
        inputField.value = '';
    } else {
        console.log("Please Input The Task!!!");
    }
}

addButton.addEventListener('click', handleAddTodo);