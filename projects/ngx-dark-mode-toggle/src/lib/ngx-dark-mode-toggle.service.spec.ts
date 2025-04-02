import { TestBed } from '@angular/core/testing';

import { NgxDarkModeToggleService } from './ngx-dark-mode-toggle.service';

describe('NgxDarkModeToggleService', () => {
  let service: NgxDarkModeToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDarkModeToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
