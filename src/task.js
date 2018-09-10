let taskId=0;
class Task {
  // your code
  constructor(taskName, priorityLevel) {
    this.id = ++taskId;
    this.taskName = document.getElementById("new-task-description").value;
    this.priorityLevel = document.getElementById("new-task-priority").value;
    this.create();
    this.deleteItem();
  }



  create(){
    let listName = document.getElementById("parent-list").value;
    let ul = document.getElementById(`${listName}`)
    // console.log(ul)
    let li = document.createElement("li");
    li.innerHTML =
    `
      Task: ${this.taskName}
      <button data-list-title="${listName}" data-task-name="${this.taskName}" class="delete-task">
        X
      </button>
      <br>
      Priority: ${this.priorityLevel}
    `
    ul.appendChild(li);
  }

  deleteItem(){
    let listName = document.getElementById("parent-list").value;
    let ul = document.getElementById(`${listName}`)
    let deleteButtonLength = ul.getElementsByClassName("delete-task").length;
    let deleteButton = ul.getElementsByClassName("delete-task")[deleteButtonLength-1];

    deleteButton.addEventListener("click", function(event) {
      event.preventDefault();
      event.path[2].removeChild(event.path[1])
    });
  }

}
