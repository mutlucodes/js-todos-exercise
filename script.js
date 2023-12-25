document.addEventListener('DOMContentLoaded', (event) => {
    const selectForm = document.querySelector("#submitTodo");
    const todoList = document.querySelector("#todoList")

    selectForm.addEventListener("submit", function(e) {
        e.preventDefault()

        const inputVal = document.querySelector('#todoInput').value;

        const newTodo = document.createElement("li")
        newTodo.innerText = inputVal

        const removeButton = document.createElement("button")
        removeButton.innerText = "Remove Todo"
        removeButton.style.cursor = 'pointer'

        newTodo.appendChild(removeButton)
        todoList.appendChild(newTodo)

        newTodo.addEventListener("click", function() {
            newTodo.style.textDecoration = "line-through"
        })
    
        removeButton.addEventListener("click", function() {
            removeButton.parentElement.remove()
        })

        document.querySelector('#todoInput').value = ""

    })


});
