import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(public chatService: ChatService) {}
  ngOnInit(): void {
    const app = Realm.App.getApp('iechat-mnlpt'); // replace this with your App ID
    // throw new Error('Method not implemented.');
  }
}
