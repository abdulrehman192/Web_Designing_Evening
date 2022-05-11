let addTodo = document.querySelector(".add"); // data receive from

let todos = document.querySelector(".todos"); // data send to

// insert data to html page

function addData(todo)
{
    let html = 
    `
    <li class="list-group-item justify-content-between d-flex"><b>${todo}</b> <i class="fas fa-trash-alt delete"></i></li>
    `;
    todos.innerHTML += html;
}

// send data to todos list

function send()
{
    // first check data is not null or empty
    let data = addTodo.add.value.trim();
    if(data.length > 0)
    {
        addData(data);
        addTodo.reset();
    }
}

// prevent the reloading of html page on form submit
function handleform(event)
{
    event.preventDefault();
}

addTodo.addEventListener('submit', handleform);

// delete todo from the list

todos.addEventListener('click', (e) => 
{
    if(e.target.classList.contains("delete"))
    {
        
        let dell = confirm("Do you want to delete this item?");
        if(dell)
        {
            e.target.parentElement.remove();
        }
    }

} );