import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { Contact } from '../../models/contact'
import { ContactsService } from '../contacts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  contactForm: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private readonly router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }
  addContact(): void {
    const newContact: Contact = {
      id: 0,
      firstname: this.contactForm.value.firstname,
      lastname: this.contactForm.value.lastname,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.contactService.AddContact(newContact);
    this.contactForm.reset();
    this.router.navigate(['/contacts']);
  }
}
