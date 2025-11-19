import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from '../../components/quote/quote.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, QuoteComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
}

