let textArea = document.getElementById("textarea");
let totalCharArea = document.getElementById("totalChar");
let charLeftArea = document.getElementById("charLeft");
let charLeft = 50;
let totalChar = 0;

textArea.addEventListener("input", (e) => {
  if (e.target.value.length >= 50) {
    alert("Max character length reached");
    return;
  } else {
    totalChar = e.target.value.length;
    totalCharArea.innerHTML = totalChar;
    charLeft = 50 - e.target.value.length;
    charLeftArea.innerHTML = charLeft;
  }
});
