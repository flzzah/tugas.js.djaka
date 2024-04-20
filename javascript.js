
const showHiddenPass = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass),
    iconEye = document.getElementById(loginEye);

  iconEye.addEventListener("click", () => {
    
    if (input.type === "password") {

      input.type = "text";

      // Icon change
      iconEye.classList.add("ri-eye-line");
      iconEye.classList.remove("ri-eye-off-line");
    } else {
      // Change to password
      input.type = "password";

      // Icon change
      iconEye.classList.remove("ri-eye-line");
      iconEye.classList.add("ri-eye-off-line");
    }
  });
};

let usernameinput = document.getElementById('login-email');
let passwordinput = document.getElementById('login-pass')

function onlogin() {
  console.log("tombol di klik");
  console.log(passwordinput.value);
  console.log(usernameinput.value);

  if(usernameinput.value == "admin" && passwordinput.value == "12345") {
  window.location.href = 'https://flzzah.github.io/jasa.servis/'
  } else {
    alert('login gagal')
  }
}

showHiddenPass("login-pass", "login-eye");
