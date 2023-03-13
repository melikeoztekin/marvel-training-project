import { Component, Input } from '@angular/core';

@Component({
  selector: 'error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss'],
})
export class ErrorMessagesComponent {
  @Input() formSubmit: boolean = false;
  @Input() errors: any;
  @Input() min: boolean = false;
}
