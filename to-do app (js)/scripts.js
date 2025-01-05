const todoForm = document.querySelector("form");
const todoInput = document.getElementById("inputt");
const todoListUL = document.getElementById("todo-list");

let allTodos = getTodos();
updateTodoList();

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText.length > 0) {
    const todoObject = {
      text: todoText,
      completed: false,
    };
    allTodos.push(todoObject);
    updateTodoList();
    saveTodos();
    todoInput.value = "";
  }
}
function updateTodoList() {
  todoListUL.innerHTML = "";
  allTodos.forEach((todo, todoIndex) => {
    todoItem = createTodoItem(todo, todoIndex);
    todoListUL.append(todoItem);
  });
}

function createTodoItem(todo, todoIndex) {
  const todoId = "todo-" + todoIndex;
  const todoLI = document.createElement("li");
  const todoText = todo.text;
  todoLI.className = "todo";

  todoLI.innerHTML = `
          <input type="checkbox" id="${todoId}">
          <label class="custom-checkbox" for="${todoId}">
              <svg fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
          </label>
          <label for="${todoId}" class="todo-text" data-todo="${todoIndex}">
              ${todoText}
          </label>
          
          <!-- Add Edit Button Here -->
         <button class="edit-button">
            <svg fill="none" stroke="var(--secondary-color)" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M16.288 2.709a2.828 2.828 0 0 0-4.000 0l-1.287 1.287 4.000 4.000 1.287-1.287a2.828 2.828 0 0 0 0-4.000zm-1.287 4.000L4 16.000v3.000h3.000L19.000 6.000z"/>
            </svg>
        </button>

  
          <!-- Add Delete Button -->
          <button class="delete-button">
              <svg fill="var(--secondary-color)" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
          </button>
      `;

  const deleteButton = todoLI.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    deleteTodoItem(todoIndex);
  });

  const editButton = todoLI.querySelector(".edit-button");
  editButton.addEventListener("click", () => {
    editTodoItem(todoIndex);
  });

  const checkbox = todoLI.querySelector("input");
  checkbox.addEventListener("change", () => {
    allTodos[todoIndex].completed = checkbox.checked;
    saveTodos();
  });

  checkbox.checked = todo.completed;

  return todoLI;
}

function editTodoItem(todoIndex) {
  const todoItem = document.querySelector(`[data-todo="${todoIndex}"]`);
  const currentText = allTodos[todoIndex].text;

  const inputField = document.createElement("input");
  inputField.value = currentText;
  inputField.className = "edit-input"; 
  todoItem.innerHTML = "";
  todoItem.appendChild(inputField);

  inputField.focus();

  inputField.addEventListener("blur", () => {
    const newText = inputField.value.trim();
    if (newText) {
      allTodos[todoIndex].text = newText; 
      saveTodos();
      updateTodoList();
    } else {
      updateTodoList();
    }
  });

  inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const newText = inputField.value.trim();
      if (newText) {
        allTodos[todoIndex].text = newText;
        saveTodos();
        updateTodoList();
      }
    }
  });
}

function deleteTodoItem(todoIndex) {
  allTodos = allTodos.filter((_, i) => i !== todoIndex);
  saveTodos();
  updateTodoList();
}

function saveTodos() {
  const todosJson = JSON.stringify(allTodos);
  localStorage.setItem("todos", todosJson);
}

function getTodos() {
  const todos = localStorage.getItem("todos") || "[]";
  return JSON.parse(todos);
}
