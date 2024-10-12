import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDsComponent } from './cruds.component';

describe('CRUDsComponent', () => {
  let component: CRUDsComponent;
  let fixture: ComponentFixture<CRUDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CRUDsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
