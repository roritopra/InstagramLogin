import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { dataPost } from "../dataPost";

interface dataPostSnapshot extends dataPost {
  data: () => dataPost;
}

const firebaseConfig = {
  apiKey: "AIzaSyAsCCf7Rd3gk0zSvcGJRQY7h4To8P0d0O8",
  authDomain: "test-dca-73288.firebaseapp.com",
  projectId: "test-dca-73288",
  storageBucket: "test-dca-73288.appspot.com",
  messagingSenderId: "167955387446",
  appId: "1:167955387446:web:b0ca41d7351e4c12d9f497",
  measurementId: "G-071V6FT2SZ"
  
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const usersRef = collection(db,"usuarios");

  export const queryUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const q = query(usersRef, where("email", "==", email),where("password","==",password));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);

        querySnapshot.forEach((doc:any) => {
            console.log(doc.id,"=>",doc.data());
        });

           
        return !querySnapshot.empty;
    } catch (error) {
        return false;
    }
  }

  export const addUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const docRef = await addDoc(collection(db,"usuarios"),{
            email,
            password
        });
        return true;
    } catch (error) {
        return false;
    }
  }

  export const addPost = async ({
    username,
    image,
    comment
  }:{
    username: string;
    image: string;
    comment: string;
  }) => {
    try {
        await addDoc(collection(db,"posts"),{
          username,
          image,
          comment,
          viewers: 0,
          comments: 0,
          profileimg: '../imagesPost/perfil.png'
        });
        return true;
    } catch (error) {
        return false;
    }
  }

  export const getPosts = async () => {
    try {
      const posts: dataPost[] = [];
      const querySnapshot = await getDocs(collection(db, 'posts'));
      querySnapshot.forEach((post: dataPostSnapshot) => {
        posts.push(post.data());
        console.log(post);
        
      });
      return posts;
    } catch (error) {
      console.error(error);
      alert('Ocurri?? un error');
    }
  }