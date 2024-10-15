import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVeterinarioComponent } from './form-veterinario.component';

describe('FormVeterinarioComponent', () => {
  let component: FormVeterinarioComponent;
  let fixture: ComponentFixture<FormVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormVeterinarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
