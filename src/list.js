class List {
  constructor(title){
    this.title = title
    this.addDiv();
    this.addSelect();
    this.deleteList();
  }

  addDiv(){
    const listsDiv = document.getElementById("lists");
    let newList = document.createElement("div");
    newList.innerHTML =
    `<h2>${this.title}
        <button data-title="${this.title}" class="delete-list">X</button>
    </h2>
    <ul id = "${this.title}">

    </ul>`
    listsDiv.appendChild(newList);
  }

  addSelect(){
    const parentList = document.getElementById("parent-list");
    const option = document.createElement("option");
    option.value = this.title;
    option.innerHTML=`${this.title}`
    parentList.appendChild(option);
  }

  deleteList() {
    const deleteButtonLength = document.getElementsByClassName("delete-list").length
    const deleteButton = document.getElementsByClassName("delete-list")[deleteButtonLength-1]
    deleteButton.addEventListener("click",function(event) {
      event.path[3].removeChild(event.path[2])
      const parentList = document.getElementById("parent-list");
      
      for (let i=0; i<parentList.length; i++){
       if (parentList.options[i].value === this.title)
          parentList.remove(i);
       }

    }.bind(this))

  }
}
