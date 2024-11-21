const fs = require('fs');   // this module use for file 
const path = require('path'); // this module use for path of any file
const readline = require('readline'); // take input from terminal
//  we store file path using __dirname 
const filePath = path.join(__dirname, 'tasks.json');

//to read line input from the terminal  
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function loadTasks() {    
    const data = fs.readFileSync(filePath); // read file contents
    return JSON.parse(data); // 
}

 // ******** add tasks ********
function addTask(task) {
    const tasks = loadTasks();
    tasks.push({ task, completed: false });
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    console.log(`Task added: "${task}"`);
}
// ******** remove tasks ********

function removeTask(index) {
    const tasks = loadTasks(); // lode old data 
    if (index < 1 || index > tasks.length) {
        console.log("Invalid task number.");
        return;
    }
    const removedTask = tasks.splice(index - 1, 1);    // remove task from the task list
    
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));  // write updated tasks in file
    console.log(`Removed task: "${removedTask[0].task}"`);
}

// ******** View  Total tasks in file ********
function viewTasks() {
    const tasks = loadTasks();  // lode data from file
    console.log("Tasks:");
    tasks.forEach((t, index) => {  // lode data from every index ********   
        console.log(`${index + 1}. [${t.completed ? 'X' : ' '}] ${t.task}`);
    });
}

///**************** */ markTask ********************************
function markTaskComplete(index) {
    const tasks = loadTasks();    // fatch data from  the file
    if (index < 1 || index > tasks.length) {
        console.log("Invalid task number.");
        return;
    }
    tasks[index - 1].completed = true;      // marked task
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));  // update our file data
    console.log(`Task marked as complete: "${tasks[index - 1].task}"`);
}



// function saveTasks(tasks) {
//     fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
// }





function showMenu() {
    console.log("\nTask Manager");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Mark Task Complete");
    console.log("4. Remove Task");
    console.log("5. Exit");

    rl.question("Choose an option: ", (option) => {
        switch (option) {
            case '1':
                rl.question("Enter task description: ", (task) => {
                    addTask(task);
                    showMenu();  /// to show manu after task completed
                });
                break;
            case '2':
                viewTasks();
                showMenu();
                break;
            case '3':
                rl.question("Enter task number to mark as complete: ", (num) => {
                    markTaskComplete(parseInt(num));
                    showMenu();
                });
                break;
            case '4':
                rl.question("Enter task number to remove: ", (num) => {
                    removeTask(parseInt(num));
                    showMenu();
                });
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log("Invalid option.");
                showMenu();
        }
    });
}


showMenu();   // call the main funnction 