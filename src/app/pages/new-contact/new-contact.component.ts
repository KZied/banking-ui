import {Component, OnInit} from '@angular/core';
import {HelperService} from "../../services/helper/helper.service";
import {ContactService} from "../../services/services/contact.service";
import {ContactDto} from "../../services/models/contact-dto";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  contact: ContactDto = {};
  errorMessages: Array<String> = [];

  constructor(
    private contactService: ContactService,
    private helperService: HelperService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const contactId = this.activatedRoute.snapshot.params['idContact'];
    if (contactId){
      this.contactService.findById2({
        'contact-id': contactId
      }).subscribe({
        next: (data) => {
          this.contact = data;
        }
      })
    }
  }

  save() {
    this.errorMessages = [];
    this.contact.userId = this.helperService.userId;
    this.contactService.save2({
      body: this.contact
    }).subscribe({
      next: async (data) => {
        await this.router.navigate(['user/my-contact-list']);
      },
      error: (err) => {
        if (err.error !== null){
          this.errorMessages = err.error.validationErrors;
        }
        else {
          this.errorMessages.push("All the fields are empty !");
        }
      }
    });
  }

  async cancel() {
    await this.router.navigate(['user/my-contact-list']);
  }
}
