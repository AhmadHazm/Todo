const todoList = document.querySelector("#todosList")
const createBar = document.querySelector("#createTodo")
const itemsLeftEl = document.querySelector("#leftTodosNum")

let itemsLeft = 1

const removeIconUrl = "./images/remove.png"



// create todo
createBar.addEventListener("keydown",event=>{
    if(event.key == "Enter" && createBar.value != ""){
        let todoElCode = `
            <input type="checkbox" name="checkbox" class="todoCheckbox">
            <p class="todoText">${createBar.value}</p>
            <img src="${removeIconUrl}" class="removeTodoBtn" alt="remove">`

        const todo = document.createElement("li")
        todo.classList.add("todo")
        todo.innerHTML = todoElCode

        todoList.insertBefore(todo,todoList.childNodes[0])
        createBar.value = ""

        itemsLeft++
        itemsLeftEl.innerHTML = itemsLeft
    }
})


function removeTodo(){}
function clearCompleted(){}
function filter(filter){}