import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore:Firestore){
    
  }

  get users():Observable<any>{
    const aCollection = collection(this.firestore,'users')
    return collectionData(aCollection);
  }

}
