import { Component } from '@angular/core';
import { Contact } from '../../models/contact'
import { ContactsService } from '../contacts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contacts: Contact[] = [];
  constructor(private readonly contactService: ContactsService){
    this.contacts = this.contactService.contacts;
  }
}
