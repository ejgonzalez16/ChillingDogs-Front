import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientosMascotaComponent } from './tratamientos-mascota.component';

describe('TratamientosMascotaComponent', () => {
  let component: TratamientosMascotaComponent;
  let fixture: ComponentFixture<TratamientosMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TratamientosMascotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratamientosMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
