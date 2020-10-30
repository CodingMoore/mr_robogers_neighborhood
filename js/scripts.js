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
tooHigh = "Lets not crash our browser, neighbor.  Try picking a number no larger than 10000."
wholeNum = "Decimals are for the birds, not for the neighborhood.  Lets use whole numbers here."
negativeNum = "Negative numbers are for negative neighbors. Lets use postive numbers here."
zero = "'zero' isn't neighborly. Try something larger."


$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    input = $("#numInput").val();
    if (input > 10000) {
      $(".outputError").text(tooHigh);
      $(".outputError").show();
      $(".outputText").hide();
    }
    else if (input < 0) {
      $(".outputError").text(negativeNum);
      $(".outputError").show();
      $(".outputText").hide();
    }
    else if (input == 0) {
      $(".outputError").text(zero);
      $(".outputError").show();
      $(".outputText").hide();
    } else {
    $(".outputText").text(mrRobo());
    $(".outputText").show();
    $(".outputError").hide();
    }
  });
});
