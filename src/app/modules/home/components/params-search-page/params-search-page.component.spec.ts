import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsSearchPageComponent } from './params-search-page.component';

describe('ParamsSearchPageComponent', () => {
  let component: ParamsSearchPageComponent;
  let fixture: ComponentFixture<ParamsSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamsSearchPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParamsSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
