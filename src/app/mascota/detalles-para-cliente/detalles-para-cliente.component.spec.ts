import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesParaClienteComponent } from './detalles-para-cliente.component';

describe('DetallesParaClienteComponent', () => {
  let component: DetallesParaClienteComponent;
  let fixture: ComponentFixture<DetallesParaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallesParaClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesParaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
