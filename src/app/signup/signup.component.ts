import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'hd-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;
  email: any;
  password: any;
  constructor(public af: AngularFireAuth, private router: Router) {
  }

  onSubmit(formData) {
    if (formData.valid) {
      this.email = formData.value.email;
      this.password = formData.value.password;
      this.af.auth.createUserWithEmailAndPassword(this.email, this.password).then((success) => {
        this.router.navigate(['/login'])
      }).catch((err) => {
        this.error = err;
      })
    }
  }

  ngOnInit() {
  }

}
