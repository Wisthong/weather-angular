import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsWeatherPageComponent } from './details-weather-page.component';

describe('DetailsWeatherPageComponent', () => {
  let component: DetailsWeatherPageComponent;
  let fixture: ComponentFixture<DetailsWeatherPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsWeatherPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsWeatherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
