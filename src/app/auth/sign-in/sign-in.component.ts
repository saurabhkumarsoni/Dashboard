import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../../auth/auth.component.css']
})
export class SignInComponent implements OnInit {
  
  loginForm!: FormGroup;
  formSubmitAttempt: boolean = false;
  constructor(private fb: FormBuilder, private router: Router, private spinner: NgxSpinnerService,private toastr: ToastrService) { }

  ngOnInit() {
    this.createForm();
    this.spinner.show()
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
   }
   
  isFieldInvalid(field: string) {
    return (
      (!this.loginForm?.get(field)?.valid && this.loginForm?.get(field)?.touched) ||
      (this.loginForm?.get(field)?.untouched && this.formSubmitAttempt)
    );
  }
  createForm(){
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit( formData: FormGroup, loginDirective: FormGroupDirective){
    this.spinner.show()
    if (this.loginForm?.valid) {
    const email = formData.value.email;
    const password = formData.value.password;
    this.router.navigate(['dashboard']);
    this.spinner.show()
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
    }
    this.toastr.success('user logined ')
  }


 

}
