const newTodo = document.getElementById("newTodo");
const addTodo = document.getElementById("submit");
const TodoList = document.querySelector(".todo-list");
const todoStatus = document.querySelectorAll(".todo-content");
const checkbox = document.querySelectorAll(".checkbox");
const checked = document.querySelector('.checkmark::after');

const todos = [];

//Adding Todos

addTodo.addEventListener("click", createTodo);

function createTodo(e) {
    e.preventDefault();

    let task = document.createElement("div");
    task.classList.add("todo-item");

    let todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");

    let checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checkbox");
    checkbox.setAttribute("checked", '');

    let checkmark = document.createElement("span");
    checkmark.classList.add("checkmark");

    todoContainer.appendChild(checkbox);
    todoContainer.appendChild(checkmark);

    let todoContent = document.createElement("div");
    todoContent.classList.add("todo-content");

    let content = document.createElement("span");
    content.innerText = `${newTodo.value}`;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-todo");
    deleteBtn.innerHTML = `<img src="./src/images/icon-cross.svg" alt="delete-todo" />`;

    //Check if string is not empty. If so --> alert. If not, add todo to array of objects and push to website
    if (!newTodo.value) {
        alert("Please Enter a Task");
        return;
    } else {
        todoContent.appendChild(content);
        todos.push({
            id: Math.random() * 1000,
            name: `${newTodo.value}`,
            completed: false,
        });

        console.log(todos);
        //Reset value
        newTodo.value = "";
    }

    todoContent.appendChild(deleteBtn);
    task.appendChild(todoContainer);
    task.appendChild(todoContent);
    TodoList.appendChild(task);
}

//Toggle status of completed todos

// checkbox.forEach((box) => {
//     box.addEventListener(
//         "click",
//         () => box.getAttribute("checked") === "checked"
//         ? document.querySelector(".todo-content").classList.add("completed")
//         : document.querySelector(".todo-content").classList.add("")
// )});
