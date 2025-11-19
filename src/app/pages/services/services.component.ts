import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesGridComponent } from '../../components/services-grid/services-grid.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { QuoteComponent } from '../../components/quote/quote.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ServicesGridComponent, FaqComponent, QuoteComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  processSteps = [
    {
      number: '1',
      title: 'Initial Contact',
      description: 'Reach out to us via phone, email, or our online quote form. We\'ll respond promptly to discuss your flooring needs and schedule a convenient consultation.'
    },
    {
      number: '2',
      title: 'Consultation & Site Assessment',
      description: 'Our expert team visits your property to assess the space, understand your requirements, and provide professional recommendations tailored to your needs and budget.'
    },
    {
      number: '3',
      title: 'Quote & Material Selection',
      description: 'Receive a detailed, transparent quote with no hidden costs. We help you select the perfect flooring materials that match your style, lifestyle, and budget.'
    },
    {
      number: '4',
      title: 'Installation',
      description: 'Our skilled craftsmen handle the installation with precision and care. We work efficiently to minimize disruption and ensure your new flooring is installed to the highest standards.'
    },
    {
      number: '5',
      title: 'Final Inspection & Completion',
      description: 'We conduct a thorough final inspection to ensure everything meets our quality standards. Your satisfaction is guaranteed, and we\'re here to address any questions or concerns.'
    }
  ];
  
  onGetQuote() {
    // Navigate to quote section or handle quote action
    // You can add navigation logic here or emit an event
    console.log('Get A Free Quote clicked');
  }
}

