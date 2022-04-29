import { EventEmitter, Injectable, Output } from '@angular/core';
import { CryptoCurrency } from './donation/donation.component';

@Injectable({
  providedIn: 'root'
})
export class CryptocurrencyModalService {

  @Output() onCryptocurrencyModalRequested = new EventEmitter<CryptoCurrency>();

  constructor() { }

  requestCryptocurrencyModal(cryptocurrency: CryptoCurrency) {
    this.onCryptocurrencyModalRequested.emit(cryptocurrency);
  }
}
