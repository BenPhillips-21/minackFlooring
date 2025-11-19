import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastComponent],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {
  @ViewChild('quoteForm') quoteForm!: NgForm;
  
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  
  showToast: boolean = false;
  toastMessage: string = '';
  
  onSubmitQuote(form: NgForm) {
    if (form.valid) {
      // Handle form submission
      console.log('Quote form submitted:', this.formData);
      
      // Show success toast
      this.toastMessage = 'Thank you! Your quote request has been submitted successfully. We\'ll get back to you soon.';
      this.showToast = true;
      
      // Hide toast after 5 seconds
      setTimeout(() => {
        this.showToast = false;
      }, 5000);
      
      // Reset form
      form.resetForm();
      this.formData = {
        name: '',
        email: '',
        phone: '',
        message: ''
      };
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
    }
  }
  
  getFieldError(form: NgForm, fieldName: string): string {
    const control = form.controls[fieldName];
    if (control && control.errors && control.touched) {
      if (control.errors['required']) {
        return `${this.getFieldLabel(fieldName)} is required`;
      }
      if (control.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (control.errors['minlength']) {
        return `${this.getFieldLabel(fieldName)} is too short`;
      }
    }
    return '';
  }
  
  getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      'name': 'Name',
      'email': 'Email',
      'phone': 'Phone',
      'message': 'Message'
    };
    return labels[fieldName] || fieldName;
  }
  
  isFieldInvalid(form: NgForm, fieldName: string): boolean {
    const control = form.controls[fieldName];
    return !!(control && control.invalid && control.touched);
  }
}

