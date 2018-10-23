import { Component, OnInit } from '@angular/core';
import * as blockstack from 'blockstack';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dapp';
  userIsSignedIn: boolean;
  bs = blockstack;

  constructor() {
    this.userIsSignedIn = false;
  }

  ngOnInit() {
    //this.userIsSignedIn = true; 
  }

  signIn(event) {
    this.bs.redirectToSignIn()
  }

  signOut(event) {
    this.bs.signOut()
  }
}
