import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class MessageService {

  messages: string[] = [];

  addMessage(message: string): void {
    this.messages.push(message);
  }

  clearMessages(): void {
    this.messages = [];
  }

  constructor() { }
}
