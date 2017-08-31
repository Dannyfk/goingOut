// Validate the textbox
var checkbox = document.getElementById("goingOut");
var textfield = document.getElementById("location");
checkbox.addEventListener("click", function () {
     if (checkbox.checked) {
          textfield.readOnly = false;
     } else {
          textfield.readOnly = true;
     }
});
textfield.addEventListener("focus", function (evt) {
     // Checkbox must be checked before data can be entered into textbox
     if (checkbox.checked) {
          this.readOnly = false;
     } else {
          this.readOnly = true;
     }
});