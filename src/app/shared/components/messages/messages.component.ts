import { Component, Input } from '@angular/core';
import { ResponseMessage } from 'src/app/models/response.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  @Input() messages: ResponseMessage[];

}
