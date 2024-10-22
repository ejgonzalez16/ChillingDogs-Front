import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarTratamientoComponent } from './search-bar-tratamiento.component';

describe('SearchBarTratamientoComponent', () => {
  let component: SearchBarTratamientoComponent;
  let fixture: ComponentFixture<SearchBarTratamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarTratamientoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
