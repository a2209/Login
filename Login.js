// Code for "Remember me" checkbox
var rememberMe = document.getElementById("remember-me");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rememberMe.setAttribute("checked", "checked");
  email.value = localStorage.email;
  password.value = localStorage.password;
} else {
  rememberMe.removeAttribute("checked");
  email.value = "";
  password.value = "";
}

rememberMe.addEventListener("change", function(e) {
  if (rememberMe.checked && email.value !== "") {
    localStorage.email = email.value;
    localStorage.password = password.value;
    localStorage.checkbox = rememberMe.value;
  } else {
    localStorage.email = "";
    localStorage.password = "";
    localStorage.checkbox = "";
  }
});
