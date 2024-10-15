import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarVeterinarioComponent } from './search-bar-veterinario.component';

describe('SearchBarVeterinarioComponent', () => {
  let component: SearchBarVeterinarioComponent;
  let fixture: ComponentFixture<SearchBarVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarVeterinarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
