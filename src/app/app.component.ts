import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PasswordService } from 'src/services/passwordStrengthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulartask';
  passwordForm: FormGroup;
  error: string = '';

  constructor(private fb: FormBuilder, private passwordService: PasswordService) {
    this.passwordForm = this.fb.group({
      password: [''],
    });
  }

  getPasswordStrength(): string {
    const password = this.passwordForm.get('password')?.value;
    this.error = this.passwordService.getPasswordStrength(password);
    return this.error;
  }
}
