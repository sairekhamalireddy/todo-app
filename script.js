function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerText = task;

    li.onclick = function() {
        li.style.textDecoration = "line-through";
    };

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}