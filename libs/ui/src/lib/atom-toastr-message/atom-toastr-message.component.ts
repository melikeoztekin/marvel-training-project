import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'atom-toastr-message',
  templateUrl: './atom-toastr-message.component.html',
  styleUrls: ['./atom-toastr-message.component.scss'],
})
export class AtomToastrMessageComponent {
  @Input() toastrHeader: string = '';
  @Input() toastrContent: string = '';

  constructor(private _toastrService: ToastrService) {}
  showSuccess() {
    this._toastrService.success(this.toastrHeader, this.toastrContent);
  }
  showWarning() {
    this._toastrService.warning(this.toastrHeader, this.toastrContent);
  }
  showInfo() {
    this._toastrService.info(this.toastrHeader, this.toastrContent);
  }
  showError() {
    this._toastrService.error(this.toastrHeader, this.toastrContent);
  }
}
