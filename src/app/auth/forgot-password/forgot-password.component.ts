import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../../auth/auth.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: any = FormGroup;
  fieldRequired: string = "This field is required"
  constructor() { }

  ngOnInit() {
    this.createForm();
  }
  createForm(){
      let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.forgotForm = new FormGroup(
      {
      'email': new FormControl(null,[Validators.required, Validators.pattern(emailregex)]),
     }
    )
  }
  checkValidation(input: string){
    const validation = this.forgotForm.get(input).invalid && (this.forgotForm.get(input).dirty || this.forgotForm.get(input).touched)
    return validation;
  }
  emaiErrors() {
    return this.forgotForm?.get('email').hasError('required') ? 'This field is required' :
      this.forgotForm?.get('email').hasError('pattern') ? 'Not a valid emailaddress' :''
  }
  onSubmit(formData: FormGroup, formDirective: FormGroupDirective): void {
   
    const email = formData.value.email;
    const password = formData.value.password;
    const username = formData.value.username;
    // this.auth.registerUSer(email, password, username);
     formDirective.resetForm();
    this.forgotForm.reset();
}

}
