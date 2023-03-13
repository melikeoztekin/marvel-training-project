import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atom-button',
  templateUrl: './atom-button.component.html',
  styleUrls: ['./atom-button.component.scss'],
})
export class AtomButtonComponent {
  @Input() buttonColor: string = 'bg-blue';
  @Input() buttonText!: string | undefined;
  @Input() buttonType!: string;
  @Input() isDisabled: boolean = false;
  @Input() icon!: string | null;

  @Output() onClickButton = new EventEmitter<any>();

  onClick(event: Event) {
    this.onClickButton.emit(event);
  }
}
