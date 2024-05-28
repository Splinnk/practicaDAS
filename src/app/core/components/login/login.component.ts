import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'gst-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  togglePassword = true
  group: FormGroup
  constructor() {
    this.group = new FormGroup(
      {
        mail: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required)
      })
  }
  login() { }
}
