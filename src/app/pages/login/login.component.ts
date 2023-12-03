import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";
import {AuthenticationRequest} from "../../services/models/authentication-request";
import {JwtHelperService} from "@auth0/angular-jwt";

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
      next: async (data) => {
        localStorage.setItem('token', data.token as string);
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(data.token as string);
        if (decodedToken.authorities[0].authority === 'ROLE_ADMIN') {
          await this.router.navigate(['admin/dashboard']);
        } else {
          await this.router.navigate(['user/dashboard']);
        }
      },
      error: (err) => {
        console.log(err);
        if (err.error !== null){
          this.errorMessages.push(err.error.errorMessage);
        }
      }
    });
  }

  async register() {
    //this method returns a promise: either then... or async..await
    //register is the route that I already defined in app-routing
    await this.router.navigate(['register']);
  }
}
