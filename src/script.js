const newTodo = document.getElementById("newTodo");
const addTodo = document.getElementById("submit");
const TodoList = document.querySelector(".todo-list");
const checkbox = document.querySelectorAll(".checkbox");
const deleteTodo = document.querySelectorAll(".delete-todo");
const amount = document.querySelector(".todos-amount");
const all = document.querySelector("#all");
const active = document.querySelector("#active");
const completed = document.querySelector("#completed");
const clear = document.querySelector(".clear-btn");


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
        console.log(todos);
    };

    const toggleCompleted = () => {
        if (!checkbox.classList.contains("checkbox-checked")) {
            checkbox.classList.add("checkbox-checked");
            // todoContent.classList.add("completed");
            task.classList.add("completed");
            let currentItem = todos.find((obj) => obj.id === currentId);
            currentItem.completed = !currentItem.completed;
        } else {
            checkbox.classList.remove("checkbox-checked");
            // todoContent.classList.remove("completed");
            task.classList.remove("completed");
            let currentItem = todos.find((obj) => obj.id === currentId);
            currentItem.completed = !currentItem.completed;
        }
        console.log(todos);
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
        let taskId = Math.trunc(Math.random() * 10000);
        todos.push({
            id: taskId,
            name: `${newTodo.value}`,
            completed: checkbox.classList.contains("checkbox-checked")
                ? true
                : false,
        });
        task.setAttribute('id', taskId); 
      
        //Reset input value
        newTodo.value = "";
    }
    //Render Task in browser
    todoContent.appendChild(deleteBtn);
    task.appendChild(checkboxContainer);
    task.appendChild(todoContent);
    TodoList.appendChild(task);

    let currentId = todos[todos.length - 1].id;

    checkAmountLeft();
    newTodo.focus();
    console.log(todos);

}

const checkAmountLeft = () => {
    amount.innerText = `${todos.length} item${
        todos.length > 1 ? "s" : ""
    } left`;
}


const filterAll = () => {
    let items = [...TodoList.children];
    items.forEach((item) => {
        item.style.display = "flex";
    });
    completed.classList.remove("active");
    active.classList.remove("active");
    all.classList.add("active");
};

const filterActive = () => {
    let items = [...TodoList.children];
    items.forEach((item) => {
        if (!item.classList.contains("completed")) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
    all.classList.remove("active");
    completed.classList.remove("active");
    active.classList.add("active");
};

const filterCompleted = () => {
    let items = [...TodoList.children];
    items.forEach((item) => {
        if (!item.classList.contains("completed")) {
            item.style.display = "none";
          
        } else {
            item.style.display = "flex";
        }
    });
    all.classList.remove("active");
    active.classList.remove("active");
    completed.classList.add("active");
};

function clearCompleted() {
    let items = [...TodoList.children];
    // let currentId = todos[todos.length - 1].id;
    items.forEach((item) => {
        if (item.classList.contains("completed")) {
                item.remove();
        
        } else {
            return;
        }      
console.log(items);
console.log(todos);
    });

};

all.addEventListener("click", filterAll);
active.addEventListener("click", filterActive);
completed.addEventListener("click", filterCompleted);
clear.addEventListener("click", clearCompleted);


// todos.filter((el) => el.completed !== true);