import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, updateDoc,where,query,doc,getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore:Firestore,
  ){
    
  }

  get users():Observable<any>{
    const aCollection = collection(this.firestore,'users')
    return collectionData(aCollection)
  }

  addUser(user:User):Promise<any>{
    const aCollection=collection(this.firestore,'users');
    return addDoc(aCollection,user);
  }


  async updatePuntos(usercode:number,puntos:number) {
    const users = collection(this.firestore, 'users');
    let q = query(users, where('userCode', '==', usercode));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (userdoc) => {
      const docRef = doc(this.firestore, 'users', userdoc.id);
      await updateDoc(docRef, {['puntos']:puntos });
    });
  }

}
