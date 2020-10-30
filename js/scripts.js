//Business Logic
let input = "6"
let inputArray = parseFloat(input.split());
let outputArray = [];
for (let i = 0; i <= inputArray; i++) {
outputArray.push(i)
}







//User Interface Logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    const input = parseFloat($("#numInput").val());
    
    event.preventDefault();
  });
});