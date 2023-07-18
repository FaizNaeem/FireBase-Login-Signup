import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore ,collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword ,sendEmailVerification} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCarN6h6FPkS3raGOKAScjMJcdp_r0kHWU",
  authDomain: "smitproject-39703.firebaseapp.com",
  projectId: "smitproject-39703",
  storageBucket: "smitproject-39703.appspot.com",
  messagingSenderId: "849520424684",
  appId: "1:849520424684:web:2a1feca7190271ea5557c9",
  measurementId: "G-LKLK8SZ6EX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 const db = getFirestore(app);
document.getElementById("btn").addEventListener("click", () => {
  let email = document.getElementById("text").value
  let pass = document.getElementById("pass").value
  let name = document.getElementById("name").value
  let phoneNumber = document.getElementById("number").value
  console.log(email,pass,name,phoneNumber);
  createUserWithEmailAndPassword(auth, email, pass)
  .then(async(userCredential) => {
    
    const user = userCredential.user
    try {
      const docRef = await addDoc(collection(db, "signup",user.uid), {
        first: name,
        phoneNumber: phoneNumber,
        email:  email,
        password:pass,
        user:user.uid
        // createdOn: new Date.now()
      });
      console.log("Document written with ID: ", user.uid);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    
      // Signed in 
      sendEmailVerification(auth.currentUser)
      .then((res)=>{
        // alert("email send")
       
          
            Swal.fire(
              'CONGRULATION',
              'Singup SUCCES And Email Send',
              'success'
              )
              // setTimeout(()=>{
              //     window.location.href="./login.html"
              //   }, 2000)
        
     
      })
      console.log(user);

    //   // console.log(user);
    //   // ...
    })
    .catch((error) => {
      // alert("hello")
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'corect fil',
      })
      console.log(errorCode, errorMessage);
    });
})
