import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  getPasswordStrength(password: string): string {
    const lengthCondition = password.length >= 8;
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!lengthCondition && password.trim().length) {
      return 'short';
    }

    if (hasLetters && hasDigits && hasSymbols) {
      return 'strong';
    } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
      return 'medium';
    } else if (hasLetters || hasDigits || hasSymbols) {
      return 'easy';
    }

    return '';
  }
}