import { TestBed } from '@angular/core/testing';

import { ApiProjectService } from './api-project.service';

describe('ProjectService', () => {
  let service: ApiProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
