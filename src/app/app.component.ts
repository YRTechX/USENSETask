import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulartask'
  password: string = ''
  error = ''

  getPasswordStrength(): string {
    const lengthCondition = this.password.length >= 8
    const hasLetters = /[a-zA-Z]/.test(this.password)
    const hasDigits = /\d/.test(this.password)
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password)
    if(!lengthCondition && this.password.trim().length){
      this.error = 'The password is too short'
      return 'short'
    } 
     if (hasLetters && hasDigits && hasSymbols) {
      this.error = 'The password is strong'
      return 'strong'
    } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
      this.error = 'The password is medium'
      return 'medium'
    } else if (hasLetters || hasDigits || hasSymbols) {
      this.error = 'The password is easy'
      return 'easy'
    }
    this.error = 'The password is empty'
    return ''
  }
}
