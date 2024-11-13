import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.scss'
})
  export class ReactiveformComponent {
    myForm: FormGroup;
  
    constructor(private fb: FormBuilder) {
      this.myForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Validates only numbers
        city: ['', Validators.required],
        address: ['', Validators.required]
      });
    }
  
    onSubmit() {
      if (this.myForm.valid) {
        console.log('Form submitted:', this.myForm.value);
      }
    }
  }