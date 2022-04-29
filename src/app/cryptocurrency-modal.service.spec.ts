import { TestBed } from '@angular/core/testing';

import { CryptocurrencyModalService } from './cryptocurrency-modal.service';

describe('CryptocurrencyModalService', () => {
  let service: CryptocurrencyModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptocurrencyModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
