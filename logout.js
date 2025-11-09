import {signOut,
onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth } from "auth.js";
let logout = document.querySelector(".logout-btn");
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(`User logged in : ${uid}`);   
  }
else{
window.location = "index.html";
}
});

logout.addEventListener("click" , () =>{
signOut(auth)
.then(() => {
window.location = "index.html"
console.log("response");

}).catch((error) => {
console.log(error, "error");

}); 
} )


