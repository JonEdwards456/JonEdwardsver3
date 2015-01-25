// Problem: Create an interactive to do list app

//Solution: add interactivity so the user can manage daily tasks

//DECLARE VARS

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks");//incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//new task list item
var createNewTaskElement = function(taskString){
    //Create list item
        var listItem = document.createElement("li");
    
        //input checkbox
        var checkbox = document.createElement("input"); //checkbox
        //label
        var label = document.createElement("label")
        //input (text)
        var editInput = document.createElement("input"); //text
        //button.edit
        var editButton = document.createElement("button");
        //button.delete
        var deleteButton = document.createElement("button");
        //each element needs modifying 
    
        checkbox.type = "checkbox";
        editInput.type = "text";
        
        editButton.innerText = "Edit";
        editButton.className = "edit";
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete";
        
        label.innerText = taskString;
        
        
        //each element needs appending
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(editInput);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
    
        return listItem;
}

//FUNCTIONS

//add a new task
var addTask = function() {
    console.log("Add innngdss task...");
    //create a new list item with the text from the #new-task:
        
   var listItem =  createNewTaskElement(taskInput.value);
    //append list item to the incompleteTasksHolder
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
     
    taskInput.value = "";
}

//edit an existing task

var editTask = function () {
    console.log("Edit task...");
        //when the edit button is pressed OLD COMMENT DELETE
    
        var listItem = this.parentNode;
        
        var editInput = listItem.querySelector("input[type=text]");
        var label  = listItem.querySelector("label");
        //if the class of the parent is .editMode
        
        var containsClass = listItem.classList.contains("editMode");
    
        if(containsClass) {
            
            //switch from .editMode
            //label text becomes the input's value
            label.innerText = editInput.value;
            
        } else {
        //else
            //switch to .editMode
            //input value becomes the label's text
          editInput.value = label.innerText;
        }

        //toggle .editMode on the parent
        listItem.classList.toggle ("editMode");
}


//delete an existing class

var deleteTask = function () {
    console.log("Delete task...");
    //when the delete button is pressed OLD COMMENT DELETE
        var listItem = this. parentNode;
        var ul = listItem.parentNode;
     //remove the parent list item from the ul
        ul.removeChild(listItem);
}    

//mark a task as complete
var taskCompleted = function () {
    console.log("Task complete...");
    //when the checkbox is checked OLD COMMENT DELETE
        //append the task list item to the #completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

//mark a task as incomplete
var taskIncomplete = function () {
    console.log("Task incomplete...");
        //append the task list item to the #incomplete-tasks
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
    
  console.log("Bind list item events");
        //select taskListItem's childeren OLD COMMENT DELETED?
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");
            //bind editTask to edit button
    editButton.onclick = editTask;
            //bind deleteTask to delete button
    deleteButton.onclick = deleteTask;
            //bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;

}

var ajaxRequest = function () {
        console.log("AJAX request");
}

// "WIRING"

//Set the click handler to the addTask function

addButton.addEventListener ("click", addTask);
addButton.addEventListener ("click", ajaxRequest);

//cycle over incompleteTasksHolder ul list items
//instead of index many use i 
for (var index = 0; index < incompleteTasksHolder.children.length; index++) {
    
    //for each list item
        //bind events to list item's children(taskCompleted)
    
    bindTaskEvents(incompleteTasksHolder.children[index], taskCompleted);
    
}
//cycle over completedTasksHolder ul list items

for (var index = 0; index < completedTasksHolder.children.length; index++) {
    //for each list item
    bindTaskEvents(completedTasksHolder.children[index], taskIncomplete);
       //bind events to list item's children(taskIncomplete)
}













