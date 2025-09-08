import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
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
