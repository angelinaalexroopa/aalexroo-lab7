import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent {
  @Output() submitSurvey = new EventEmitter<any>();
  surveyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.surveyForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      feedback: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.surveyForm.valid) {
      this.submitSurvey.emit(this.surveyForm.value);
      this.surveyForm.reset();
    }
  }
}

