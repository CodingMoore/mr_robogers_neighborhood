//Business Logic
let input = "14"
let inputNum = parseFloat(input);
let outputArray = [];
let inputArray = [];
for (let i = 1; i <= inputNum; i++) {
inputArray.push(i);
stringArray = inputArray.join(" ");
}
  if (stringArray[i].includes(3)){
    outputArray.push("Won't you be my neighbor?")
  } else outputArray.push(i)
  console.log(outputArray);
} 


  // }
  // else if (i.contains(2)) {
  //   outputArray.push("Boop!")
  // }
  // else if (i.contains(1)) {
  //   outputArray.push("Beep!")
  
const result = outputArray.join(" ")





//User Interface Logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    const input = parseFloat($("#numInput").val());
    $("#outputText").text(result);
    event.preventDefault();
  });
});