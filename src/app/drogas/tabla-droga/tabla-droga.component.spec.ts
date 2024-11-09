import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDrogaComponent } from './tabla-droga.component';

describe('TablaDrogaComponent', () => {
  let component: TablaDrogaComponent;
  let fixture: ComponentFixture<TablaDrogaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaDrogaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaDrogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
