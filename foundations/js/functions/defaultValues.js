function showMessage(from, text = "no text given") {
  console.log(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given

showMessage("Ann", undefined); // Ann: no text given
