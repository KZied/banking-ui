import {Component, OnInit} from '@angular/core';
import {LightInfoInput} from "../../components/light-info/light-info.component";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  accountInfoList: Array<LightInfoInput> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.initializeAccountInfo();
  }

  private initializeAccountInfo() {
    this.accountInfoList = [
      {
        title: 'Account balance',
        amount: 20000,
        infoStyle: 'bg-primary'
      },
      {
        title: 'GHighest transfer',
        amount: 5000,
        infoStyle: 'bg-warning'
      },
      {
        title: 'Highest deposit',
        amount: 8000,
        infoStyle: 'bg-success'
      }
    ];

  }

}
