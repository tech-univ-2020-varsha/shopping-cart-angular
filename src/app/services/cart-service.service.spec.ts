import { TestBed } from '@angular/core/testing';

import { CartDetailService } from './cart-service.service';

describe('CartServiceService', () => {
  let service: CartDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
