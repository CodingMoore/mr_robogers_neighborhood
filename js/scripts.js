//Business Logic
function mrRobo() {
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
    }
    else if (splitArray[i].includes("1")) {
      outputArray.push("Beep!")
    } else outputArray.push(i)
  }
  const result = outputArray.join(", ")
  return result
}





//User Interface Logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    input = $("#numInput").val();
    mrRobo(input);
    $("#outputText").text(mrRobo());
  });
});

