import { TestBed } from '@angular/core/testing';

import { CoronaServiceService } from './corona-service.service';

describe('CoronaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoronaServiceService = TestBed.get(CoronaServiceService);
    expect(service).toBeTruthy();
  });
});
