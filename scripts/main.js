
let inputNewTask = document.querySelector('#contentItem')
let btnAddTask = document.querySelector('#addButton')
let listTask = document.querySelector('.items')






inputNewTask.addEventListener('keypress', (e) => {

    if (e.keyCode == 13) {


        if (inputNewTask.value.length <= 45 && inputNewTask.value.length != 0) {
            let task = {

                name: inputNewTask.value,
                id: generateId(),
            }

            addTask(task)
        } else {
            alert("Coloque um valor de 1 a 45 caracteres")
        }
    }

})


btnAddTask.addEventListener('click', () => {

    if (inputNewTask.value.length <= 45 && inputNewTask.value.length != 0) {
        let task = {

            name: inputNewTask.value,
            id: generateId(),
        }

        addTask(task)
    } else {
        alert("Coloque um valor de 1 a 45 caracteres")
    }


})

function generateId() {

    return Math.floor(Math.random() * 3000);
}

function addTask(task) {

    let li = createTagLi(task)
    listTask.appendChild(li)
    inputNewTask.value = ''

}

function createTagLi(task) {

    let li = document.createElement('li')
    li.classList.add('item')
    li.id = task.id

    let p = document.createElement('p')
    p.innerHTML = task.name

    let div = document.createElement('div')
    div.classList.add('desItem')
    div.appendChild(p)

    let btnDelete = document.createElement('button')
    btnDelete.classList.add('delete')
    btnDelete.innerHTML = '<img src="./img/Group 4.png" alt="Deletar">'
    btnDelete.setAttribute('onclick', 'deleteTask(' + task.id + ')')

    li.appendChild(div)
    li.appendChild(btnDelete)

    return li
}


function deleteTask(idTask) {

    let confirm = window.confirm('Tem certeza que deseja excluir?')

    if (confirm) {

        let li = document.getElementById('' + idTask + '')

        if (li) {

            listTask.removeChild(li)
        }
    }
}