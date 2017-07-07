import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HDComponent } from './hd.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { MembersComponent } from './members/members.component';

import { AuthService } from './auth.service';
import { routes } from './hd.routes';

export const firebaseConfig = {
  apiKey: 'AIzaSyCAeQuhmBQoxMwphc-ueQpz_mQlA21ee_k',
  authDomain: 'quizapp-46bb4.firebaseapp.com',
  databaseURL: 'https://quizapp-46bb4.firebaseio.com',
  projectId: 'quizapp-46bb4',
  storageBucket: '',
  messagingSenderId: '974231110171'
};

@NgModule({
  declarations: [
    HDComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routes
  ],
  providers: [AuthService],
  bootstrap: [HDComponent]
})
export class HDModule { }
