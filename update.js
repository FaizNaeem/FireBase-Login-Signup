import { doc, updateDoc } from  "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { auth ,db} from "./config.mjs";

// const db = getFirestore(app);
// const btn = document.getElementById("btn").addEventListener("click",async()=>{
// })
const btn_u = document.getElementById("btnu").addEventListener("click",async()=>{
    
    const name= document.getElementById("text") 
    const email= document.getElementById("email") 
    const password= document.getElementById("password") 
    const number= document.getElementById("number") 
    const store_uid= (auth.currentUser.uid)
        const washingtonRef = doc(db, "signup",store_uid );
    
        await updateDoc(washingtonRef, {
    name:name.value,
    email:email.value,
    password:password.value,
    number:number.value,
        });
})