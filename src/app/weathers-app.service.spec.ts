import { TestBed } from '@angular/core/testing';

import { WeathersAppService } from './weathers-app.service';

describe('WeathersAppService', () => {
  let service: WeathersAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeathersAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
