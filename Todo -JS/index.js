let todoList = document.querySelector(".todos");
let addBtn = document.querySelector("#add-btn");
let todoInput = document.querySelector("#todo-input");
let todos = [];

function renderTodo() {
  todoList.innerHTML = "";
  todos.forEach((item, i) => {
    const li = document.createElement("li");
    li.className = "todo-card";
    const span = document.createElement("span");
    span.innerHTML = item;
    span.className = "todo-data";

    const delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    delBtn.className = "delete-btn";
    delBtn.addEventListener("click", () => {
      delTodo(i);
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
  });
}

let addTodo = () => {
  let todoVal = todoInput.value;
  if (todoVal.trim() === "") {
    alert("Todo can't be empty");
    return;
  }
  todos.push(todoVal);
  renderTodo();
  todoInput.value = "";
  //console.log(todos);
};
addBtn.addEventListener("click", addTodo);

const delTodo = (i) => {
  todos.splice(i, 1);
  renderTodo();
};

todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
