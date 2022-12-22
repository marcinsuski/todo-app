const newTodo = document.getElementById("newTodo");
const addTodo = document.getElementById("submit");
const TodoList = document.querySelector(".todo-list");
const checkbox = document.querySelectorAll(".checkbox");
const deleteTodo = document.querySelectorAll(".delete-todo");
const amount = document.querySelector(".todos-amount");
const all = document.querySelector("#all");
const active = document.querySelector("#active");
const completed = document.querySelector("#completed");
const clear = document.querySelector("#clear-btn");

const todos = [];

//Adding Todos
addTodo.addEventListener("click", createTodo);

function createTodo(e) {
    e.preventDefault();

    const deleteTask = () => {
        deleteBtn.parentElement.parentElement.remove();
        todos.filter((el) => el.id !== currentId);
        amount.innerText = `${todos.length} item${
            todos.length > 1 ? "s" : ""
        } left`;
    };

    const toggleCompleted = () => {
        if (!checkbox.classList.contains("checkbox-checked")) {
            checkbox.classList.add("checkbox-checked");
            todoContent.classList.add("completed");
            let currentItem = todos.find((obj) => obj.id === currentId);
            currentItem.completed = !currentItem.completed;
        } else {
            checkbox.classList.remove("checkbox-checked");
            todoContent.classList.remove("completed");
            let currentItem = todos.find((obj) => obj.id === currentId);
            currentItem.completed = !currentItem.completed;

        }

    };    

    let task = document.createElement("div");
    task.classList.add("todo-item");

    let checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("checkbox-container");

    let checkbox = document.createElement("button");
    checkbox.classList.add("checkbox");
    checkboxContainer.appendChild(checkbox);
    checkbox.addEventListener("click", toggleCompleted);

    let todoContent = document.createElement("div");
    todoContent.classList.add("todo-content");

    let content = document.createElement("span");
    content.innerText = `${newTodo.value}`;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-todo");
    deleteBtn.innerHTML = `<img src="./src/images/icon-cross.svg" alt="delete-todo" />`;
    deleteBtn.addEventListener("click", deleteTask);

    //Check if string is not empty. If so --> alert. If not, add todo to array of objects and push to website
    if (!newTodo.value) {
        alert("Please Enter a Task");
        return;
    } else {
        todoContent.appendChild(content);
        todos.push({
            id: Math.random() * 1000,
            name: `${newTodo.value}`,
            completed: checkbox.classList.contains("checkbox-checked")
                ? true
                : false,
        });

        //Reset input value
        newTodo.value = "";
    }
    //Render Task in browser
    todoContent.appendChild(deleteBtn);
    task.appendChild(checkboxContainer);
    task.appendChild(todoContent);
    TodoList.appendChild(task);

    let currentId = todos[todos.length - 1].id;

    amount.innerText = `${todos.length} item${
        todos.length > 1 ? "s" : ""
    } left`;


    console.log(todos);
}


 

const filterActive = () => {
    const tasks = document.querySelectorAll('todo-item');
    const todoContent = document.querySelectorAll('todo-content');
   checkbox.forEach(box => !box.classList.contains('checkbox-checked') ? box.parentElement.parentElement.style.display = 'none' : box.parentElement.parentElement.style.display = 'flex')
console.log(checkbox);
   
   };
   const filterCompleted = () => {
//        const tasks = document.querySelectorAll('todo-item');
//        const todoContent = document.querySelectorAll('todo-content');
//    tasks.forEach(task => !todoContent.classList.contains('completed') ? todoContent.style.display = "none" : task.todoContent.display = "flex")
   let items = TodoList.children;
 
    items.forEach(item => {
        if(!item.children[1].classList.contains("completed")) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
   };

   

   active.addEventListener('click', filterActive);
   completed.addEventListener('click', filterCompleted);
