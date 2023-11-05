import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //Inject the router service
  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  async register() {
    //this method returns a promise: either then... or async..await
    // register is the route that I already defined in app-routing
    await this.router.navigate(['register']);
  }
}
