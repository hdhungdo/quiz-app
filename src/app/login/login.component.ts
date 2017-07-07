import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'hd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  error: any;
  user: Observable<firebase.User>;

  constructor(public af: AngularFireAuth, private router: Router) {
    this.user = af.authState;
    this.af.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/members')
      }
    })
  }

  loginFacebook = function () {
    this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((success) => {
      console.log(success);
      this.router.navigate(['/members']);
    }).catch((err) => {
      console.log(err);
      this.error = err;
    })
  }

  loginGoogle = function () {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((success) => {
      console.log(success);
      this.router.navigate(['/members']);
    }).catch((err) => {
      console.log(err);
      this.error = err;
    })
  }

  ngOnInit() {
  }

}
