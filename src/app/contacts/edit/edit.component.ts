import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from '../contacts.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  contact: Contact | null = null;
  contactId: number | null = null;
  contactForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactsService,

    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {
    this.contactForm = this.formBuilder.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required],
      });
  }

  ngOnInit(): void {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));
    this.contactService.GetContactById(this.contactId).subscribe((data) => {
      if (data) {
            this.contact = data;
            this.contactForm.patchValue({
              firstname: data.firstname,
              lastname: data.lastname,
              street: data.street,
              city: data.city
            });
      }
    });
  }

  editContact(): void {
    const updatedContact: Contact = {
      id: this.contactId,
      firstname: this.contactForm.value.firstname,
      lastname: this.contactForm.value.lastname,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.contactService.EditContact(updatedContact);
    this.contactForm.reset();
    this.router.navigate(['/contacts/', this.contactId]);
  }
}
