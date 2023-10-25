// app.component.ts
import { Component, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { PasswordService } from 'src/services/passwordStrengthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppComponent),
      multi: true,
    },
    PasswordService,
  ],
})
export class AppComponent implements ControlValueAccessor {
  passwordForm: FormGroup;
  error: string = ''

  constructor(private fb: FormBuilder, private passwordService: PasswordService) {
    this.passwordForm = this.fb.group({
      password: [''],
    });
  }

  getPasswordStrength(): string {
    const password = this.passwordForm.get('password')?.value;
    this.error = this.passwordService.getPasswordStrength(password);
    return this.error
  }

  writeValue(obj: any): void {
    this.passwordForm.setValue({ password: obj }, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.passwordForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.passwordForm.valueChanges.subscribe(fn);
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.passwordForm.disable() : this.passwordForm.enable();
  }
}
