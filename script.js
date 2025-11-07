const habitInput = document.getElementById("habitInput");
const addBtn = document.getElementById("addBtn");
const habitList = document.getElementById("habitList");

addBtn.addEventListener("click", addHabit);

function addHabit() {
  const text = habitInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${text}</span>
    <button class="deleteBtn">X</button>
  `;
  habitList.appendChild(li);
  habitInput.value = "";

  li.querySelector(".deleteBtn").addEventListener("click", () => {
    li.remove();
  });
}
