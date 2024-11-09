import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDrogaComponent } from './modificar-droga.component';

describe('ModificarDrogaComponent', () => {
  let component: ModificarDrogaComponent;
  let fixture: ComponentFixture<ModificarDrogaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModificarDrogaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarDrogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
