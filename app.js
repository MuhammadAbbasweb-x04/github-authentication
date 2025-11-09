import {signInWithPopup, 
GithubAuthProvider } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth, githubAuthProvider} from "./auth.js";

let btn = document.querySelector(".gh-btn");
btn.addEventListener("click", (event)=>{
  event.preventDefault();
signInWithPopup(auth, githubAuthProvider)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
    window.location = "home.html"
    
  }).catch((error) => {
    const errorCode = error.code;
        const email = error.customData.email;
    const credential = GithubAuthProvider.credentialFromError(error);
    const errorMessage = error.message;
console.log(errorMessage);
  });
})
