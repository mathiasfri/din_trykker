import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, TextareaModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  submit() {
    if (this.form.invalid) return;
    // TODO: Hook to Spring API endpoint
    alert('Tak for din besked! (Hook this to backend)');
    this.form.reset();
  }
}
