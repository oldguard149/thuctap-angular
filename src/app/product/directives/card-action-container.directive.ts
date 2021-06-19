import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCardActionContainer]'
})
export class CardActionContainerDirective {

  // product card is vertical, a fix height will make sure card action has enough space when display
  @HostBinding('style.height') height: string = 'calc(30px + 1.25rem)';
}
