import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientosVeterinarioComponent } from './tratamientos-veterinario.component';

describe('TratamientosVeterinarioComponent', () => {
  let component: TratamientosVeterinarioComponent;
  let fixture: ComponentFixture<TratamientosVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TratamientosVeterinarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratamientosVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
