document.addEventListener('DOMContentLoaded', (event) => {
    const selectForm = document.querySelector("#submitTodo");
    const todoList = document.querySelector("#todoList")

    // Get saved todos items if not create a empty array
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || []

    // Load data from Local Storage
    for (let i in savedTodos) {
        let newTodo = document.createElement("li")
        newTodo.innerText = savedTodos[i].task
        newTodo.isCompleted = savedTodos[i].isCompleted
                
        if (newTodo.isCompleted) {
            newTodo.style.textDecoration = "line-through"
        }

        todoList.appendChild(newTodo)

        newTodo.addEventListener("click", function() {
            newTodo.style.textDecoration = "line-through"
        })
    }

    // Todo Form
    selectForm.addEventListener("submit", function(e) {
        e.preventDefault()

        const newTodo = document.createElement("li")
        newTodo.innerText = selectForm.elements.todo.value

        selectForm.reset()

        // Save new todos to the local storage
        savedTodos.push({ task: newTodo.innerText, isCompleted: false})
        localStorage.setItem("todos", JSON.stringify(savedTodos))

        todoList.appendChild(newTodo)
    })

    // Todo List
    todoList.addEventListener("click", function(event) {
        let todoDone = event.target

        if(!todoDone.isCompleted) {
            todoDone.style.textDecoration = "line-through"
            todoDone.isCompleted = true
        } else if(todoDone.isCompleted) {
            todoDone.style.textDecoration = "none"
            todoDone.isCompleted = false
        }

        for(let i = 0; i < savedTodos.length; i++) {
            if (savedTodos[i].task === todoDone.innerText) {
                savedTodos[i].isCompleted = !savedTodos[i].isCompleted
                localStorage.setItem("todos", JSON.stringify(savedTodos))
            }
            console.log(todoDone.innerText)

        }

    })
});
