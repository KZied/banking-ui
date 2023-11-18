import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";
import {AuthenticationRequest} from "../../services/models/authentication-request";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authenticationRequest:AuthenticationRequest = {};
  errorMessages: Array<String> = [];

  constructor(
    private router:Router,
    private authenticationService:AuthenticationService) {
  }

  ngOnInit(): void {
  }

  login(){
    this.errorMessages = [];
    this.authenticationService.authenticate({
      body: this.authenticationRequest
    }).subscribe({
      next: (data) => {
        console.log(data);
        // localStorage.setItem('token',data.token as string);
      },
      error: (err) => {
        console.log(err);
        this.errorMessages.push(err.error.errorMessage);
      }
    })
  }

  async register() {
    //this method returns a promise: either then... or async..await
    //register is the route that I already defined in app-routing
    await this.router.navigate(['register']);
  }
}
