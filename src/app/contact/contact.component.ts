import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  success = false;

  onSubmit() {
    console.log('Form Data:', this.formData);
    this.success = true;

    // Reset form
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
