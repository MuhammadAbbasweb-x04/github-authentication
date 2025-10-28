import {signInWithPopup, GithubAuthProvider ,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth, githubAuthProvider} from "/config.js";

let btn = document.querySelector(".gh-btn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("user loggdin uid" , uid );
  } else {
window.location = "home.html";
  }
});
btn.addEventListener("click", ()=>{
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
