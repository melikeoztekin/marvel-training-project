import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-header',
  templateUrl: './atom-header.component.html',
  styleUrls: ['./atom-header.component.scss'],
})
export class AtomHeaderComponent {
  @Input() headerText: string = ' ';
  @Input() fontSize!: string;
  @Input() color!: string;
  @Input() fontWeight!: string;
}
