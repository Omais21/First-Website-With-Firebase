 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
 import {  getDatabase,get,ref } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDXmtoYMGtEAIdBzWGY8JGRJUfcdRooSn4",
   authDomain: "fire-blog-5d2c9.firebaseapp.com",
   projectId: "fire-blog-5d2c9",
   storageBucket: "fire-blog-5d2c9.appspot.com",
   messagingSenderId: "945078529660",
   appId: "1:945078529660:web:f0b45aaffecccb2daa63f9"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const db = getDatabase(app)




function getPostData (){
    const user_ref = ref(db,'post/');
    get(user_ref).then((snapshot)=>{
        const data = snapshot.val()
       
       let html = "";
       const table = document.querySelector('#main')
        for (const key in data){
          const{title,post_content} = data[key]
  
          console.log(post_content);
         
         
           html+= `
           <div class="post"> 
               <h2>${title}</h2>
               <p>
                 ${post_content}
               </p>
           </div>
          `
  
        }
  table.innerHTML =html
  
    })
  }
  
  getPostData()
  