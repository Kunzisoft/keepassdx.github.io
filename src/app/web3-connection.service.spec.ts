import { TestBed } from '@angular/core/testing';

import { Web3ConnectionService } from './web3-connection.service';

describe('Web3ConnectionService', () => {
  let service: Web3ConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Web3ConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
