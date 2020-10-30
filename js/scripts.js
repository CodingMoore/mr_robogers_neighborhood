//Business Logic
let input = "14"
let inputNum = parseFloat(input);
let outputArray = [];
let inputArray = [];
let inputString = [];
let splitArray = [];
for (let i = 0; i <= inputNum; i++) {
  inputArray.push(i);
  inputString = inputArray.join(" ");
  splitArray = inputString.split(" ");
  if (splitArray[i].includes("3")) {
    outputArray.push("Won't you be my neighbor?")
  }
  else if (splitArray[i].includes("2")) {
    outputArray.push("Boop!")
  } else outputArray.push(i)}
console.log(outputArray);  

  
  //numberString = inputArray.join(" ");
  
  // if (stringArray[i].includes(3)){
  //   outputArray.push("Won't you be my neighbor?")
  // } else outputArray.push(i)
  // console.log(outputArray);
 


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