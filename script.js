// User inputs for Task 1
// declaractions
let task1Title = prompt("Enter the title for the first task:");
let task1Description = prompt("Enter a description for the first task:");
let task1Status = prompt(
  "Enter the status for the first task (todo, doing, done):"
);

// Convert status to lowercase and validate
while (
  task1Status.toLowerCase() !== "todo" && // Ensure status is one of the allowed values
  task1Status.toLowerCase() !== "doing" &&
  task1Status.toLowerCase() !== "done"
) {
  task1Status = prompt(
    "Invalid status! Please enter 'todo', 'doing', or 'done':" // Re-prompt user for valid status if input is invalid
  );
}

// User inputs for Task 2
let task2Title = prompt("Enter the title for the second task:"); // Prompt user for the title of Task 2
let task2Description = prompt("Enter a description for the second task:"); // Prompt user for the description of Task 2
let task2Status = prompt(
  "Enter the status for the second task (todo, doing, done):" // Prompt user for the status of Task 2
);

// Convert status to lowercase and validate
while (
  task2Status.toLowerCase() !== "todo" && // Ensure status is one of the allowed values
  task2Status.toLowerCase() !== "doing" &&
  task2Status.toLowerCase() !== "done"
) {
  task2Status = prompt(
    "Invalid status! Please enter 'todo', 'doing', or 'done':" // Re-prompt user for valid status if input is invalid
  );
}

// Display completed tasks or motivational message
if (
  task1Status.toLowerCase() === "done" || // Check if any task has "done" status
  task2Status.toLowerCase() === "done"
) {
  console.log("Completed tasks:"); // Display the titles of completed tasks
  if (task1Status.toLowerCase() === "done") {
    console.log("Task 1: " + task1Title); // Display Task 1 if its status is "done"
  }
  if (task2Status.toLowerCase() === "done") {
    console.log("Task 2: " + task2Title); // Display Task 2 if its status is "done"
  }
} else {
  console.log("No tasks completed, let's get to work!"); // Display motivational message if no tasks are completed
}
