import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {

  constructor( private firestore:Firestore ) {}


  get participantes():Observable<any>{
    const aCollection = collection(this.firestore,'participantes')
    return collectionData(aCollection);
  }
}


