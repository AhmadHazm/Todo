const todoListEl = document.querySelector("#todosList")
const createBar = document.querySelector("#createTodo")
const itemsLeftEl = document.querySelector("#leftTodosNum")

let itemsLeft = 0

// resit left items
function resitLeftItems(num){
    itemsLeft += num
    itemsLeftEl.innerHTML = itemsLeft
}

// create todo class
class Todo{
    constructor(value, container, classes, id){
        this.value = value
        this.container = container
        this.classes = classes
        this.removeIconUrl = "./images/remove.png"
        this.id = id

        this.todoElCode = `
            <input type="checkbox" name="checkbox" class="todoCheckbox">
            <p class="todoText">${this.value}</p>
            <img id="_${this.id}" src="${this.removeIconUrl}" class="removeTodoBtn" alt="remove">`
    }
    createTodo(){
        this.todoEl = document.createElement("li")

        this.todoEl.classList.add(this.classes)
        this.todoEl.innerHTML = this.todoElCode

        this.container.insertBefore(this.todoEl, todoListEl.childNodes[0])
        
        document.querySelector(`#_${this.id}`).addEventListener("click",()=>{
            this.removeTodo()
        })
    }
    removeTodo(){
        this.todoEl.remove()
        resitLeftItems(-1)
    }
}

// create todo when enter
let TodoItemsArr = []
createBar.addEventListener("keydown",event=>{
    if(event.key == "Enter" && createBar.value != ""){
        // increse the left items
        resitLeftItems(1)

        // create a new todo and add it to the list(array) so we can filter them later
        let todo = new Todo(createBar.value, todoListEl, "todo", itemsLeft)
        TodoItemsArr.push(todo)
        todo.createTodo()

        // clear the bar
        createBar.value = ""
    }
})

// clear all todo Items
function clearCompleted(){
    let checkBox = document.querySelectorAll(".todoCheckbox")
    checkBox.forEach(e=>{
        if(e.checked){
            e.parentElement.remove()
            resitLeftItems(-1)
        }
    })
}

// filter
function filter(filter){
    let checkBox = document.querySelectorAll(".todoCheckbox")

    if(filter == "completed"){
        checkBox.forEach(e=>{
            if(e.checked){
                e.parentElement.style.display = ""
            } else{
                e.parentElement.style.display = "none"
            }
        })
    }

    else if(filter == "active"){
        checkBox.forEach(e=>{
            if(e.checked){
                e.parentElement.style.display = "none"
            } else{
                e.parentElement.style.display = ""
            }
        })
    }
 
    else{
        checkBox.forEach(e=>{
                e.parentElement.style.display = ""
        })
    }
}