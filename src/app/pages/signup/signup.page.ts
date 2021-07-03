import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

  siginup(){

  }
    // Easy access for form fields
    get email() {
      return this.credentials.get('email');
    }
    
    get password() {
      return this.credentials.get('password');
    }
    get confirmpassword(){
      return this.credentials.get('confirmpassword');

    }
  
    

}
