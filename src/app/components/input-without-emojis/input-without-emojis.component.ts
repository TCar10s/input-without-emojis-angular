import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { noEmojisValidator } from 'src/app/utils/form-validators';
import { NoEmojisDirective } from 'src/app/directives';

@Component({
  selector: 'app-input-without-emojis',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NoEmojisDirective],
  template: `
    <form [formGroup]="myForm">
      <div class="form-control">
        <label for="myInput">Custom validator to not accept emojis</label>
        <input type="text" formControlName="myInput" id="myInput" />
        <small *ngIf="myForm.get('myInput')?.hasError('noEmojis')">
          No se permiten emojis en este campo.
        </small>
      </div>

      <div class="form-control">
        <label for="myInputDirective"
          >Custom directive to not accept emojis</label
        >
        <input
          type="text"
          formControlName="myInputDirective"
          id="myInputDirective"
          noEmojis
        />
      </div>
    </form>
  `,
  styles: [
    `
      .form-control {
        margin: 1rem;
      }
    `,
  ],
})
export class InputWithoutEmojisComponent {
  myForm = new FormGroup({
    myInput: new FormControl('', [Validators.required, noEmojisValidator]),
    myInputDirective: new FormControl('', [Validators.required]),
  });
}
