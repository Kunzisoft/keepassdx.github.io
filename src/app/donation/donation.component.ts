import { Component, OnInit } from '@angular/core';
import { faBitcoin, faEthereum, faGooglePlay, faMonero, faPaypal, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faCreditCard, faHeart } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.sass']
})
export class DonationComponent implements OnInit {

  faHeart = faHeart
  faCoffee = faCoffee
  faBitcoin = faBitcoin
  faEthereum = faEthereum
  faMonero = faMonero
  faGooglePlay = faGooglePlay
  faPaypal = faPaypal
  faCreditCard = faCreditCard

  cryptoCurrencies = [
    {
      name: "Bitcoin",
      icon: faBitcoin,
      webSiteUrl: "https://bitcoin.org/",
      qrImgPath: "assets/img/bitcoin_qr.png",
      walletAddress: "1DSwXCk7Sob24sNsofywNoRQw2f5Qj5t2F",
      walletUrl: "bitcoin:1DSwXCk7Sob24sNsofywNoRQw2f5Qj5t2F"
    },
    {
      name: "Ethereum",
      icon: faEthereum,
      webSiteUrl: "https://www.ethereum.org/",
      qrImgPath: "assets/img/ethereum_qr.png",
      walletAddress: "0x6F5De8c22C4869c4a5D3a48975a42C9498de3CAB",
      walletUrl: "ethereum:0x6F5De8c22C4869c4a5D3a48975a42C9498de3CAB"
    },
    {
      name: "Monero",
      icon: faMonero,
      webSiteUrl: "https://getmonero.org/",
      qrImgPath: "assets/img/monero_qr.png",
      walletAddress: "4BFGwyshAa2YwwXNboQ4r78Vv9hf83cFBCF8vAd8jAQRbUQho187hKSLQpzWBsV7LW2gNXUthvb8W4hHBifTfhdSMKvTDP7",
      walletUrl: "monero:4BFGwyshAa2YwwXNboQ4r78Vv9hf83cFBCF8vAd8jAQRbUQho187hKSLQpzWBsV7LW2gNXUthvb8W4hHBifTfhdSMKvTDP7"
    }
  ]

  constructor(private modalService: NgbModal) {
    
  }
  ngOnInit(): void {
  
  }

  openCryptoCurrencyModal(content: any) {
      this.modalService.open(content).result.then((res) => {

      }, (res) => {

    });
  }

}