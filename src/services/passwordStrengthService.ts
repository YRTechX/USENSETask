import { Injectable } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PasswordService implements ControlValueAccessor {

    private onChange: (value: any) => void = () => {}
    private onTouch: () => void = () => {}
  
    writeValue(obj: any): void {}
  
    registerOnChange(fn: any): void {
      this.onChange = fn
    }
  
    registerOnTouched(fn: any): void {
      this.onTouch = fn
    }
  
    setDisabledState?(isDisabled: boolean): void {}

    getPasswordStrength(password: string): string {
        const lengthCondition = password.length >= 8
        const hasLetters = /[a-zA-Z]/.test(password)
        const hasDigits = /\d/.test(password)
        const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password)

        if (!lengthCondition && password.trim().length) {
        return 'short'
        }

        if (hasLetters && hasDigits && hasSymbols) {
        return 'strong'
        } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        return 'medium'
        } else if (hasLetters || hasDigits || hasSymbols) {
        return 'easy'
        }

        return ''
    }
}