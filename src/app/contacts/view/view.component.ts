import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';

import { Contact } from 'src/app/models/contact';
import { ContactsService } from '../contacts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  contact: Contact | null = null;
  contactId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactsService
  ) {}

  ngOnInit(): void {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));
    this.contactService.GetBeerById(this.contactId).subscribe((data) => {
      this.contact = data!;
    });
  }
}
