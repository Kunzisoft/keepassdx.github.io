import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CryptocurrencyModalService } from '../cryptocurrency-modal.service';
import { CryptoCurrency } from '../donation/donation.component';

@Component({
  selector: 'app-cryptocurrency-detail',
  templateUrl: './cryptocurrency-detail.component.html',
  styleUrls: ['./cryptocurrency-detail.component.sass']
})
export class CryptocurrencyDetailComponent implements OnInit {

  @Input() cryptocurrency?: CryptoCurrency;
  @ViewChild("modalCryptoCurrency") modalElement!: ElementRef;
  
  faCopy = faCopy
  showDetails: CryptoCurrency | null = null

  constructor(private modalService: NgbModal,
              private cryptocurrencyModalService: CryptocurrencyModalService) {
  }

  ngOnInit(): void {
    this.cryptocurrencyModalService.onCryptocurrencyModalRequested.subscribe((crypto:CryptoCurrency) => {
      if (this.cryptocurrency == crypto) {
        this.openCryptoCurrencyModal(this.modalElement)
      }
    })
  }

  openCryptoCurrencyModal(content: ElementRef) {
    this.modalService.open(content, { });
  }

  copyCurrencyToClipboard(content: CryptoCurrency) {
    navigator.clipboard.writeText(content.walletAddress).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }
}