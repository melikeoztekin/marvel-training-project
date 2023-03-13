import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'marvel-training-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ui-kit';
  // Button gereksinimleri
  isButtonDisabled: boolean = true;
  textClickButton() {
    console.log('Click buton çalıştı');
  }
  // Input gereksinimleri
  requiredControl: boolean = true;
  inputSetDisabled: boolean = true;
  formGroupName!: FormGroup;

  checkIsValid() {
    if (this.formGroupName.invalid) {
      console.log('form valid');
    } else {
      console.log('form valid değil');
    }
  }
  //   Select gereksinimleri
  options: string[] = ['option 1', 'option 2', 'option 3'];
}
