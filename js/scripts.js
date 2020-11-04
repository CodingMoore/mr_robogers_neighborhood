function mrRobo() {
  let outputArray = [];
  let inputArray = [];
  let inputString = [];
  let splitArray = [];
  for (let i = 0; i <= input; i++) {
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
const tooHigh = "Lets not crash our browser, neighbor.  Try picking a number no larger than 10000."
const wholeNum = "Decimals are for the birds, not for the neighborhood.  Lets use whole numbers here."
const negativeNum = "Negative numbers are for negative neighbors. Lets use postive numbers here."
const zero = "'Zero' isn't neighborly. Try something larger."


$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    const input = $("#numInput").val();
    if (input > 10000) {
      $(".outputError").text(tooHigh);
      $("#errorBox").show();
      $("#outputBox").hide();
    }
    else if (input < 0) {
      $(".outputError").text(negativeNum);
      $("#errorBox").show();
      $("#outputBox").hide();
    }
    else if (input == 0) {
      $(".outputError").text(zero);
      $("#errorBox").show();
      $("#outputBox").hide();
    } else {
    $(".outputText").text(mrRobo(input));
    $("#errorBox").hide();
    $("#outputBox").show();
    }
  });
});
