import { Injectable } from '@angular/core';
import  Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})

export class SocketService {

  // ---------------- GET INFO  ----------------
  pushUpdates = new Pusher('f7197ae049dc6b20241a', {
    cluster: 'us2'
  });

  // ---------------- Get publish  ----------------
  pushMyReports = new Pusher('0febf3ed7b1be9eb8cac', {
    cluster: 'us2'
  });


  constructor() { }   
}
