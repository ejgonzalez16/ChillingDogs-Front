import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDrogaComponent } from './form-droga.component';

describe('FormDrogaComponent', () => {
  let component: FormDrogaComponent;
  let fixture: ComponentFixture<FormDrogaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDrogaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDrogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
