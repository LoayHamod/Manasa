const formSignup = {
  firstname: document.querySelector("#signup-firstname"),
  secondname: document.querySelector("#signup-secondname"),
  username: document.querySelector("#signup-username"),
  email: document.querySelector("#signup-email"),
  password: document.querySelector("#signup-password"),
  accepted: document.querySelector("#signup-accepted"),
  submit: document.querySelector("#signup-btn-submit"),
};

let buttonSignup = formSignup.submit.addEventListener("click", (e) => {
  e.preventDefault();
  const Signup = "https://localhost:8080/api/auth/signup";
  fetch(Signup, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname: formSignup.firstname.value,
      secondname: formSignup.secondname.value,
      username: formSignup.username.value,
      email: formSignup.email.value,
      password: formSignup.password.value,
      accepted: formSignup.accepted.checked,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      window.open(".html"); /*opens the target page while Id & password matches*/
    })
    .catch((err) => {
      console.log(err);
    });
});

const formSignin = {
  username: document.querySelector("#signin-username"),
  email: document.querySelector("#signin-email"),
  password: document.querySelector("#signin-password"),
  submit: document.querySelector("#signin-btn-submit"),
};

let buttonSignin = formSignin.submit.addEventListener("click", (e) => {
  e.preventDefault();
  const Signin = "https://page-login.onrender.com/api/auth/signin";
  fetch(Signin, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: formSignin.username.value,
      email: formSignin.email.value,
      password: formSignin.password.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.error) {
        alert("Error Password or Email"); /*displays error message*/
      } else {
        window.open(".html"); /*opens the target page while Id & password matches*/
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
