import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  public get messageService(): MessageService {
    return this._messageService;
  }
  public set messageService(value: MessageService) {
    this._messageService = value;
  }

  constructor( private _messageService: MessageService) { }

  ngOnInit() {
  }

}
