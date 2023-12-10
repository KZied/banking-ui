import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../services/services/contact.service";
import {ContactDto} from "../../services/models/contact-dto";
import {HelperService} from "../../services/helper/helper.service";

@Component({
  selector: 'app-my-contact-list',
  templateUrl: './my-contact-list.component.html',
  styleUrls: ['./my-contact-list.component.scss']
})
export class MyContactListComponent implements OnInit {

  contacts: Array<ContactDto> = [];

  constructor(
    private contactService: ContactService,
    private helperService: HelperService
  ) {
  }

  ngOnInit(): void {
    this.contactService.findByUserId1({
      'user-id': this.helperService.userId
    }).subscribe({
      next: (data) => {
        this.contacts = data;
      }
    });
  }

}
