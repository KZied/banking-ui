import {Component, Input, OnInit} from '@angular/core';

export interface LightInfoInput {
  // ? means that the attribute is optional
  title?: string;
  amount?: number;
  infoStyle?: 'bg-primary' | 'bg-success' | 'bg-warning' | 'bg-danger';
}

@Component({
  selector: 'app-light-info',
  templateUrl: './light-info.component.html',
  styleUrls: ['./light-info.component.scss']
})
export class LightInfoComponent implements OnInit{

  @Input() lightInfoInput :  LightInfoInput = {};

  constructor() {
  }

  ngOnInit(): void {
  }

}
