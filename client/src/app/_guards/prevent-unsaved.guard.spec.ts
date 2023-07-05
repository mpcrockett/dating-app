import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { preventUnsavedGuard } from './prevent-unsaved.guard';

describe('preventUnsavedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => preventUnsavedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
