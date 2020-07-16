document.getElementById("addItem").onclick = function (){
      var todoInput = document.getElementById("todo-input");
      var itemList = document.getElementById("item-list");
      var newItem = document.createElement('li');
      var doneButton = document.createElement('button');
      newItem.textContent = todoInput.value;
      itemList.appendChild(newItem);
      doneButton.className = "done";
      doneButton.onclick = function(e) {
        e.currentTarget.parentNode.remove();
      };
      doneButton.textContent = "Done";
      newItem.appendChild(doneButton);
    }
