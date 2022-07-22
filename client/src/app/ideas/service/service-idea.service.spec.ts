import { TestBed } from '@angular/core/testing';

import { ServiceIdeaService } from './service-idea.service';

describe('ServiceIdeaService', () => {
  let service: ServiceIdeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceIdeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
