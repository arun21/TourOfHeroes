import { TestBed } from '@angular/core/testing';

import { TourofheroesLibService } from './tourofheroes-lib.service';

describe('TourofheroesLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TourofheroesLibService = TestBed.get(TourofheroesLibService);
    expect(service).toBeTruthy();
  });
});
