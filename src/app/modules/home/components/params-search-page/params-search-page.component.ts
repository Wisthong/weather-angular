import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-params-search-page',
  templateUrl: './params-search-page.component.html',
  styleUrls: ['./params-search-page.component.scss'],
})
export class ParamsSearchPageComponent {
  @Output() cityEvent = new EventEmitter<string>();
  weatherForm = this.fb.nonNullable.group({
    city: ['', Validators.required],
  });

  constructor(private readonly fb: FormBuilder) {}

  onSubmit() {
    if (this.weatherForm.valid) {
      const city = this.weatherForm.getRawValue().city;
      this.cityEvent.emit(city);
      this.weatherForm.patchValue({
        city: '',
      });
    }
  }
}
