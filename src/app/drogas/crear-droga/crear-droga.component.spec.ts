import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDrogaComponent } from './crear-droga.component';

describe('CrearDrogaComponent', () => {
  let component: CrearDrogaComponent;
  let fixture: ComponentFixture<CrearDrogaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearDrogaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDrogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
