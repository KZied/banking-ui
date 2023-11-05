import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  urlParam = 'Not yet defined';
  queryParam = 'Not available yet';

  //Inject the router service
  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute);
    // get param from URL
    this.urlParam = this.activatedRoute.snapshot.params['someText'];
    this.queryParam = this.activatedRoute.snapshot.queryParams['x'];
  }

  ngOnInit(): void {
  }

  async register() {
    //this method returns a promise: either then... or async..await
    // register is the route that I already defined in app-routing
    await this.router.navigate(['register']);
  }
}
