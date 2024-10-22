import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarClienteComponent } from './search-bar-cliente.component';

describe('SearchBarClienteComponent', () => {
  let component: SearchBarClienteComponent;
  let fixture: ComponentFixture<SearchBarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
