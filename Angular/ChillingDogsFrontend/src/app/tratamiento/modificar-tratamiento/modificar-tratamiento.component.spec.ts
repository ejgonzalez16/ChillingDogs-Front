import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTratamientoComponent } from './modificar-tratamiento.component';

describe('ModificarTratamientoComponent', () => {
  let component: ModificarTratamientoComponent;
  let fixture: ComponentFixture<ModificarTratamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarTratamientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
