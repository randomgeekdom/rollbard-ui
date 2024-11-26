import { TestBed } from '@angular/core/testing';

import { CharacterLoaderService } from './character-loader.service';

describe('CharacterLoaderService', () => {
  let service: CharacterLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
