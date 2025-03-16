document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskCreater = document.getElementById("create-task-form");
  taskCreater.addEventListener("submit", logging);
});
function logging(event) {
  event.preventDefault(); 

  const input = document.getElementById("new-task-description").value;
  if (!input.trim()) return; 

  const todos = document.getElementById("tasks"); 
  const li = document.createElement("li");
  const btn = document.createElement("button");

  li.textContent = input + " "; 
  btn.textContent = "x";
  btn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(btn);
  todos.appendChild(li); // Append to the correct UL element

  document.getElementById("create-task-form").reset(); // Clear input field
}
