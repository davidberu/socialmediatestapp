import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Username: string=""
  Password: string=""

  constructor() { }

  ngOnInit() {
  }

  login(){
    const ("Username","Password") = this
  }

}
