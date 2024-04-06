let myTaskList = document.getElementById("taskitem");
let i;
for (i = 0; i < myTaskList.length; i++) {
    let btn = document.createElement("button");
    let txt = document.createTextNode("Edit");    
    btn.className = "edit";
    btn.appendChild(txt);
    myTaskList[i].appendChild(btn); 
    }
let j;

for (j = 0; j < myTaskList.length; j++) {
    let btn = document.createElement("button");
    let txt = document.createTextNode("Delete");
    btn.className = "delete";
    btn.appendChild(txt);
    myTaskList[j].appendChild(btn);
    }
    
document.getElementsByClassName("addTask").addEventListener('click', function() {
    const tInput = document.getElementById('taskinput');
    const dInput = document.getElementById('descinput');
    const task = tInput.value;
    const desc = descinput.value;
    if (task) {
        const taskslist = document.getElementById('tasklist');
        const newtask = document.createElement('li').setAttribute("id","taskitem");
        const dt = document.createElement('p').setAttribute("id","hidehover");
        newtask.textContext = task;
        dt.textContext = desc;
        taskslist.appendChild(newtask);
        tasklist.appendChild(desc);
        tInput.value="";
        dInput.value="";
    }
});





