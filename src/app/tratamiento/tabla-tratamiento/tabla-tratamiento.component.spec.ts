import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTratamientoComponent } from './tabla-tratamiento.component';

describe('TablaTratamientoComponent', () => {
  let component: TablaTratamientoComponent;
  let fixture: ComponentFixture<TablaTratamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaTratamientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
