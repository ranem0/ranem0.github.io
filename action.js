function openBook() {
    document.getElementById("page").classList.remove("hidden");
}

function closeBook() {
    document.getElementById("page").classList.add("hidden");
}
function addEvent() {
    const timeInput = document.getElementById("timeInput").value;
    const dayInput = document.getElementById("dayInput").value;
    const eventInput = document.getElementById("eventInput").value;
  
    if (timeInput && dayInput && eventInput) {
      const tableBody = document.getElementById("scheduleBody");
  
      let row = tableBody.querySelector(`tr[data-time="${timeInput}"]`);
  
      if (!row) {
        row = createRow(timeInput, tableBody);
      }
  
      const dayIndex = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].indexOf(dayInput);
      const eventsCell = row.cells[dayIndex + 1];
      eventsCell.innerHTML += eventsCell.innerHTML ? "<br>" + eventInput : eventInput;
    } else {
      alert("Please fill out all fields.");
    }
  }
  
  function createRow(time, tableBody) {
    const newRow = tableBody.insertRow();
    newRow.dataset.time = time;
  
    const timeCell = newRow.insertCell();
    timeCell.textContent = time;
  
    for (let i = 0; i < 7; i++) {
      newRow.insertCell();
    }
  
    return newRow;
  }
  