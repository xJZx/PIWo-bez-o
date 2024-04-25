var undoStack = [];
var listCounter = 1;

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    var selectedList = document.getElementById("listSelector").value;

    if (taskText === "") {
        alert("Pole nie może być puste!");
        return;
    }

    var todoList = document.getElementById(selectedList);
    var li = document.createElement("li");
    li.textContent = taskText;

    var dateSpan = document.createElement("span");
    dateSpan.className = "date";
    li.appendChild(dateSpan);

    li.onclick = function() {
        if (li.classList.contains("done")) {
            li.classList.remove("done");
            dateSpan.textContent = "";
        } else {
            li.classList.add("done");
            var date = new Date();
            dateSpan.textContent = " (Wykonane: " + date.toLocaleString() + ")";
        }
    };

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "X";

    deleteButton.onclick = function(event) {
        var taskToDelete = event.target.parentNode;
        document.getElementById("taskToDelete").textContent = taskToDelete.textContent;
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        undoStack.push(taskToDelete.outerHTML);
        taskToDelete.remove();
    };

    li.appendChild(deleteButton);
    todoList.appendChild(li);

    taskInput.value = "";
}

function confirmDelete() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function createNewList() {
    var newListName = prompt("Podaj nazwę nowej listy:");
    if (newListName) {
        var listId = "list-" + listCounter++;
        var listContainer = document.createElement("div");
        listContainer.className = "list";

        var listHeader = document.createElement("h3");
        listHeader.textContent = newListName;
        listHeader.setAttribute("onclick", `toggleList('${listId}')`);

        var list = document.createElement("ul");
        list.id = listId;
        list.className = "todo-list";

        listContainer.appendChild(listHeader);
        listContainer.appendChild(list);

        document.getElementById("lists").appendChild(listContainer);

        var listSelector = document.getElementById("listSelector");
        var newOption = document.createElement("option");
        newOption.value = listId;
        newOption.textContent = newListName;
        listSelector.appendChild(newOption);
    }
}

function toggleList(listId) {
    var list = document.getElementById(listId);
    list.style.display = list.style.display === "none" ? "block" : "none";
}

document.querySelector(".close").onclick = function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
};

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "z") {
        event.preventDefault();
        undoDelete();
    }
});

function undoDelete() {
    if (undoStack.length > 0) {
        var lastDeleted = undoStack.pop();
        var todoLists = document.querySelectorAll(".todo-list");
        if (todoLists.length > 0) {
            todoLists[todoLists.length - 1].innerHTML += lastDeleted;
        }
    }
}