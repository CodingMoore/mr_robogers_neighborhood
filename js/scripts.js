//Business Logic
const input = parseFloat($("#numInput").val());
console.log(input);






//User Interface Logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    
    event.preventDefault();
  });
});