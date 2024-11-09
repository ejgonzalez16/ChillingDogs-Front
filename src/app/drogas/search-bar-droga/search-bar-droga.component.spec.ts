import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarDrogaComponent } from './search-bar-droga.component';

describe('SearchBarDrogaComponent', () => {
  let component: SearchBarDrogaComponent;
  let fixture: ComponentFixture<SearchBarDrogaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarDrogaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarDrogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
