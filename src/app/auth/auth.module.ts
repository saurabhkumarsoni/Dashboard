import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  MatInputModule,
  MatButtonModule,
  ReactiveFormsModule,
  MatCheckboxModule,
  AppRoutingModule,
  MatDividerModule

  ],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule { 
  constructor(){
    console.log('Auth Module Called')
  }
}
