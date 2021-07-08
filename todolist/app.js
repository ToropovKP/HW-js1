let buttonEnter = document.getElementById('enter');
let userInput = document.getElementById('userInput');
let ul = document.querySelector('ul');

function inputLength() {
return userInput.value.length > 0;
}

function createTodo() {
let li = document.createElement("li");
li.appendChild(document.createTextNode(userInput.value));
ul.appendChild(li);
userInput.value = '';

let deleteButton = document.createElement('button');
deleteButton.appendChild(document.createTextNode('X'));
li.appendChild(deleteButton);
deleteButton.addEventListener('click', deleteTodoItem);

li.addEventListener('click', function() {
    li.classList.toggle('done');
})

function deleteTodoItem() {
li.classList.add('delete');
}


}

function changeListAfterKeypress(event) {
if (inputLength() && event.which === 13) {
createTodo();
}
}

function changeAfterButtonPress() {
    if (inputLength()) {
        createTodo()
    } 
}
buttonEnter.addEventListener('click' , changeAfterButtonPress);
userInput.addEventListener('keypress', changeListAfterKeypress);
