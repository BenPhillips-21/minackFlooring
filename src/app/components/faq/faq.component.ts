import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqs: FaqItem[] = [
    {
      question: 'What types of flooring do you offer?',
      answer: 'We offer a comprehensive range of flooring solutions including carpet, timber, European Oak, laminate, hybrid flooring, parquetry, chevron, vinyl plank, and carpet tiles. Each option is carefully selected to meet different style preferences, budgets, and functional requirements.',
      isOpen: false
    },
    {
      question: 'How long does installation typically take?',
      answer: 'Installation time varies depending on the type of flooring and the size of the area. Generally, most residential projects can be completed within 1-3 days. We provide a detailed timeline during the consultation process so you know exactly what to expect.',
      isOpen: false
    },
    {
      question: 'Do you provide free quotes?',
      answer: 'Yes, we offer free, no-obligation quotes for all our flooring services. Simply fill out our quote form or contact us directly, and we\'ll arrange a convenient time to assess your space and provide a detailed estimate.',
      isOpen: false
    },
    {
      question: 'What areas do you service?',
      answer: 'We are based in Melbourne and service the greater Melbourne metropolitan area. We also provide services to surrounding regions. Please contact us to confirm if we service your specific location.',
      isOpen: false
    },
    {
      question: 'Can you help me choose the right flooring for my space?',
      answer: 'Absolutely! Our expert team provides personalized advice to help you select the perfect flooring solution. We consider factors such as your lifestyle, room usage, budget, and design preferences to recommend the best options for your needs.',
      isOpen: false
    },
    {
      question: 'Do you offer custom design services?',
      answer: 'Yes, we specialize in custom designs for intricate flooring styles such as parquetry and chevron patterns. Our skilled craftsmen can create unique, one-of-a-kind flooring designs that perfectly match your vision and space requirements.',
      isOpen: false
    },
    {
      question: 'What is your warranty policy?',
      answer: 'We stand behind our work with comprehensive warranties on both materials and installation. Warranty terms vary by product type, and we provide full details during the consultation. Our commitment is to ensure your complete satisfaction with your new flooring.',
      isOpen: false
    },
    {
      question: 'Do you offer eco-friendly flooring options?',
      answer: 'Yes, we offer a range of eco-friendly and sustainable flooring options that cater to both residential and commercial needs. We can help you choose environmentally conscious materials that don\'t compromise on style or durability.',
      isOpen: false
    }
  ];
  
  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}

