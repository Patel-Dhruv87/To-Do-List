let item = document.querySelector("#item")
let todoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function(event){
      if(event.key == "Enter"){
        addToDo(this.value)
         this.value = ""
      }
    }
)
     
let addToDo = (item) =>{
    let listItem = document.createElement("li");
    listItem.innerHTML = `
        ${item}
       <i class="fas fa-times"></i>                
    `;

    //task finish - blur
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )
    //  remove
    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove()
        }
    )
    todoBox.appendChild(listItem);
}
