import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Contact } from '../models/contact';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;

  GetBeerById(id: number): Observable<Contact | undefined> {
    const contact = this.contacts.find((c) => c.id === id);
    return of(contact);
  }
}
