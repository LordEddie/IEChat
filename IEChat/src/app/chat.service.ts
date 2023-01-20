import { Injectable } from '@angular/core';
import * as Realm from 'realm';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { 
    const id = 'iechat-mnlpt';
    const config = {
      id,
    };
    const app = new Realm.App(config);
    
  }
   // replace this with your App ID

}
