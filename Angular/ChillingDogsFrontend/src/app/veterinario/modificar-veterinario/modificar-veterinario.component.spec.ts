import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarVeterinarioComponent } from './modificar-veterinario.component';

describe('ModificarVeterinarioComponent', () => {
  let component: ModificarVeterinarioComponent;
  let fixture: ComponentFixture<ModificarVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarVeterinarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
