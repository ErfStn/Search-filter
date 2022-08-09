const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filteroption = document.querySelector(".filter-todos");

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", checkRemove);
filteroption.addEventListener("click", filterTodos);
document.addEventListener("DOMContentLoaded", getLocalTodos());

function addTodo(e) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = `<li>${todoInput.value}</li>
    <span><li class="far fa-check-square"></li></span>
    <span></span>
    <span><li class="far fa-trash-alt"></li></span>`;

  todoDiv.innerHTML = newTodo;
  todoList.appendChild(todoDiv);
  saveLocalTodos(todoInput.value);
  todoInput.value = "";
}
function checkRemove(e) {
  const classList = [...e.target.classList];
  const item = e.target;
  if (classList[1] === "fa-check-square") {
    const todo = item.parentElement.parentElement;
    todo.classList.toggle("completed");
  } else if (classList[1] === "fa-trash-alt") {
    const todo = item.parentElement.parentElement;
    removeLocal(todo);
    todo.remove();
  }
}
function filterTodos(e) {
  //   console.log(e.target.value);
  // console.log(todoList.childNodes);
  const todos = [...todoList.childNodes];
  // console.log(todos);
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
function saveLocalTodos(todo) {
  // 1 localStorage.getItem("todos");
  // 2 localStorage.setItem("todos",JSON.stringify("todos"))
  let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  savedTodos.push(todo);
  localStorage.setItem("todos", JSON.stringify(savedTodos));
}
function getLocalTodos() {
  let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  savedTodos.forEach((todos) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = `<li>${todos}</li>
    <span><li class="far fa-check-square"></li></span>
    <span></span>
    <span><li class="far fa-trash-alt"></li></span>`;

    todoDiv.innerHTML = newTodo;
    todoList.appendChild(todoDiv);
  });
}
function removeLocal(todo) {
  // console.log(todo.children[0].innerText); texto peyda kardim
  let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  const removeData = savedTodos.filter((t)=>t != todo.children[0].innerText)
    localStorage.setItem("todos",JSON.stringify(removeData))
}
