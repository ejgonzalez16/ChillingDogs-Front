import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDrogaComponent } from './detalles-droga.component';

describe('DetallesDrogaComponent', () => {
  let component: DetallesDrogaComponent;
  let fixture: ComponentFixture<DetallesDrogaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallesDrogaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesDrogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
