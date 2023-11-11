import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserDto} from "../../services/models/user-dto";
import {AuthenticationService} from "../../services/services/authentication.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userDto: UserDto = {
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  };
  errorMessages: Array<String> = [];

  constructor(private router:Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  async login() {
    await this.router.navigate(['login']);
  }


  register() {
    this.errorMessages = [];
    this.authenticationService.register(
      {body: this.userDto}
    ).subscribe({
      next: async (data) => {
        console.log(data);
        await this.router.navigate(['confirm-register']);
      },
      error: (err) => {
        this.errorMessages = err.error.validationErrors
      }
    });
  }
}
