const newTodo = document.querySelector('#addTodo');
const addTodo = document.querySelector('.submit');




function getValue() {
    const value = newTodo.value;
    console.log(value);
}

addTodo.addEventListener('click', getValue);