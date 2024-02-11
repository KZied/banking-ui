import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/services/user.service";
import {UserDto} from "../../services/models/user-dto";

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  customers: Array<UserDto> = [];
  showInactiveCustomers = false;
  display = "none";
  customerIdToUpdate: number | undefined = -1;
  customerStatusToUpdate: undefined | boolean = false;

  constructor(
    private userService:UserService
  ) {
  }

  ngOnInit(): void {
    this.findAllCustomers();
  }

  private findAllCustomers() {
    this.userService.findAll()
      .subscribe({
        next: (data) =>{
          this.customers = data;
        }
      })
  }

  filterCustomers() {
    if (this.showInactiveCustomers){
      this.customers = this.customers.filter(c => !c.active)
    }
    else {
      this.findAllCustomers();
    }
  }

  changeCustomerStatus(active: boolean | undefined, id: number | undefined) {
    this.customerIdToUpdate = id as number;
    this.customerStatusToUpdate = active as boolean;
    this.closeModal();
    this.updateCustomerStatus();
  }

  updateCustomerStatus() {
    if (this.customerStatusToUpdate) {
      this.userService.validateAccount({
        'user-id': this.customerIdToUpdate as number
      }).subscribe({
        next: () => {this.findAllCustomers();}
      });
    }
    else {
      this.userService.invalidateAccount({
        'user-id': this.customerIdToUpdate as number
      }).subscribe({
        next: () => {this.findAllCustomers();}
      });
    }
  }

  openModal() {
    this.display = "block";
  }
  closeModal() {
    this.display = "none";
    this.findAllCustomers();
  }


}
