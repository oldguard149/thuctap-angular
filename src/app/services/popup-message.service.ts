import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class PopupMessageService {
  constructor(private message: NzMessageService) {}
  createMessage(
    content: string,
    type: 'success' | 'error' | 'warning',
    duration = 4000
  ): void {
    this.message.create(type, content, { nzDuration: duration });
  }
}
