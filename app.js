import {signInWithPopup, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";


let btn = document.querySelector(".gh-btn")


btn.addEventListener("click", ()=>{
// const auth = getAuth();
signInWithPopup(auth,GithubAuthProvider)
  .then((result) => {
    

    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    
    console.log(errorMessage);
  });
})
