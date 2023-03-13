import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-frame',
  templateUrl: './atom-frame.component.html',
  styleUrls: ['./atom-frame.component.scss'],
})
export class AtomFrameComponent {
  @Input() borderColor: string = 'transparent';
  @Input() backgroundColor: string = 'transparent';
  @Input() padding: string = '26px 52px 26px 52px';
  @Input() margin: string = '0';
  @Input() width: string = '100%';
}
