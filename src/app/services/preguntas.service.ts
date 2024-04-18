import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, getDoc, getDocs, where,doc,query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  

  constructor( private firestore:Firestore ) {}


  get preguntas():Observable<any>{
    const aCollection = collection(this.firestore,'preguntas')
    return collectionData(aCollection);
  }

  preguntar(user:User):Promise<any>{

    const snapshot = collection(this.firestore,'preguntas');
    if(snapshot){
      console.log("existe coleccion");
    }

    const aCollection=collection(this.firestore,'preguntas');
    return addDoc(aCollection,user);
  }


  async delete(usercode:number){
    const participantes = collection(this.firestore, 'preguntas');
    let q= query(participantes, where('userCode','==',usercode));
    const querysnapshot = await getDocs(q);
    
    querysnapshot.forEach(async(userdoc)=>{
      const participantes = doc(this.firestore, 'preguntas', userdoc.id);
      deleteDoc(participantes);
    })
  }

  

  

}


