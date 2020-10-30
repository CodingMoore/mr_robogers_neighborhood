//Business Logic
let input = "5"
let inputArray = parseFloat(input.split());
let outputArray = [];
for (let i = 0; i < inputArray.length; i++)
outputArray = inputArray.push()
return outputArray;






//User Interface Logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    const input = parseFloat($("#numInput").val());
    
    event.preventDefault();
  });
});