import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarMascotaComponent } from './search-bar-mascota.component';

describe('SearchBarMascotaComponent', () => {
  let component: SearchBarMascotaComponent;
  let fixture: ComponentFixture<SearchBarMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarMascotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
