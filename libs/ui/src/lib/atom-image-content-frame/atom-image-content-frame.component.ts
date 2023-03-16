import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-image-content-frame',
  templateUrl: './atom-image-content-frame.component.html',
  styleUrls: ['./atom-image-content-frame.component.scss'],
})
export class AtomImageContentFrameComponent {
  @Input() imageSrc: string = './assets/image-placeholder.jpg';
  @Input() width: string = '';
  @Input() height: string = 'auto';
}
