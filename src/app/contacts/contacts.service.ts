import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Contact } from '../models/contact';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;

  public AddContact(contact: Contact): void {
    this.contacts.push(contact);
  }
  
  public EditContact(updatedContact: Contact): void {
    const index = this.contacts.findIndex(c => c.id === updatedContact.id);
    if (index !== -1) {
      this.contacts[index] = updatedContact;
    }
  }

  GetContactById(id: number): Observable<Contact | undefined> {
    const contact = this.contacts.find((c) => c.id === id);
    return of(contact);
  }
}
