function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDate = document.getElementById("taskDate");
    const taskDay = document.getElementById("taskDay");
  
    if (taskInput.value === "" || taskDate.value === "" || taskDay.value === "") {
      return;
    }
  
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
    });
  
    const spanDate = document.createElement("span");
    spanDate.textContent = taskDate.value;
  
    const spanDay = document.createElement("span");
    spanDay.textContent = taskDay.value;
  
    const spanText = document.createElement("span");
    spanText.textContent = taskInput.value;
  
    li.appendChild(checkbox);
    li.appendChild(spanDate);
    li.appendChild(spanDay);
    li.appendChild(spanText);
    taskList.appendChild(li);
  
    taskInput.value = "";
    taskDate.value = "";
    taskDay.value = "";
  }
  