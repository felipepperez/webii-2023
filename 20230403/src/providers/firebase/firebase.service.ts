import { Injectable } from '@nestjs/common';

import { v4 as uuidv4 } from 'uuid';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set, update, remove } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyx3q-JFwzzcxg6ozmuVVLFNSH1MS7Vhw",
  authDomain: "webiii-91f77.firebaseapp.com",
  projectId: "webiii-91f77",
  storageBucket: "webiii-91f77.appspot.com",
  messagingSenderId: "510418098807",
  appId: "1:510418098807:web:70534e5b9b86fbbf7bc472"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const dbRef = ref(getDatabase());

@Injectable()
export class FirebaseService {
  async getProducts(): Promise<any> {
    return await get(child(dbRef, 'produtos/')).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return { erro: true, msg: "No data avaliable" }
      }
    })
  }

  async createProduct(body): Promise<any> {
    const id = uuidv4();
    return await set(child(dbRef, 'produtos/' + id), body);
  }

  async updateProduct(body): Promise<any> {
    const { id, ...postData } = body;
    return await update(child(dbRef, 'produtos/' + id), body);
  }

  async deleteProduct(body): Promise<any> {
    return await remove(child(dbRef, 'produtos/' + body.id));
  }
}
