import { TestBed } from '@angular/core/testing';

import { LightModeServiceService } from './light-mode-service.service';

describe('LightModeServiceService', () => {
  let service: LightModeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightModeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
