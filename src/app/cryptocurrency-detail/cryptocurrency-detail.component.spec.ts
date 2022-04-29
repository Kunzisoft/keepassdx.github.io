import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrencyDetailComponent } from './cryptocurrency-detail.component';

describe('CryptocurrencyDetailComponent', () => {
  let component: CryptocurrencyDetailComponent;
  let fixture: ComponentFixture<CryptocurrencyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptocurrencyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocurrencyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
