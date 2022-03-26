import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  token: string = '';
  constructor(private data: DataService, private notification : NotificationService) {
    this.getToken();
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  async getToken(){
    await this.notification.initPush();
    this.token = window.localStorage.getItem('pushToken');
  }
}
