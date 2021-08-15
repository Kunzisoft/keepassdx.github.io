import { Component, OnInit } from '@angular/core';
import { faBitcoin, faEthereum, faGooglePlay, faMonero, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faCertificate, faCreditCard, faHeart } from '@fortawesome/free-solid-svg-icons';
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
  faCardano = faCertificate
  faMonero = faMonero
  faGooglePlay = faGooglePlay
  faPaypal = faPaypal
  faCreditCard = faCreditCard

  cryptoCurrencies = [
    {
      name: "Bitcoin",
      icon: this.faBitcoin,
      currency: "BTC",
      webSiteUrl: "https://bitcoin.org/",
      qrImgPath: "assets/img/bitcoin_qr.png",
      walletAddress: "1DSwXCk7Sob24sNsofywNoRQw2f5Qj5t2F",
      walletUrl: "bitcoin:1DSwXCk7Sob24sNsofywNoRQw2f5Qj5t2F",
      explorer: "https://blockstream.info/address/1DSwXCk7Sob24sNsofywNoRQw2f5Qj5t2F",
      highlighted: false
    },
    {
      name: "Ethereum",
      icon: this.faEthereum,
      currency: "ETH",
      webSiteUrl: "https://www.ethereum.org/",
      qrImgPath: "assets/img/ethereum_qr.png",
      walletAddress: "0x6F5De8c22C4869c4a5D3a48975a42C9498de3CAB",
      walletUrl: "ethereum:0x6F5De8c22C4869c4a5D3a48975a42C9498de3CAB",
      explorer: "https://etherchain.org/account/6F5De8c22C4869c4a5D3a48975a42C9498de3CAB",
      highlighted: true
    },
    {
      name: "Cardano",
      icon: this.faCardano,
      currency: "ADA",
      webSiteUrl: "https://cardano.org/",
      qrImgPath: "assets/img/cardano_qr.png",
      walletAddress: "addr1qxfuczz53wuwa4dqmluptakv2gnkgslqyhf73spq2vvkykcu0tkh8aw9ehfd8xfqdtp6vvz0nnz6xzkltzfxua5uv35qqzm4s0",
      walletUrl: "cardano:addr1qxfuczz53wuwa4dqmluptakv2gnkgslqyhf73spq2vvkykcu0tkh8aw9ehfd8xfqdtp6vvz0nnz6xzkltzfxua5uv35qqzm4s0",
      explorer: "https://explorer.cardano.org/en/address.html?address=addr1qxfuczz53wuwa4dqmluptakv2gnkgslqyhf73spq2vvkykcu0tkh8aw9ehfd8xfqdtp6vvz0nnz6xzkltzfxua5uv35qqzm4s0",
      highlighted: false
    },
    {
      name: "Monero",
      icon: this.faMonero,
      currency: "XMR",
      webSiteUrl: "https://getmonero.org/",
      qrImgPath: "assets/img/monero_qr.png",
      walletAddress: "4BFGwyshAa2YwwXNboQ4r78Vv9hf83cFBCF8vAd8jAQRbUQho187hKSLQpzWBsV7LW2gNXUthvb8W4hHBifTfhdSMKvTDP7",
      walletUrl: "monero:4BFGwyshAa2YwwXNboQ4r78Vv9hf83cFBCF8vAd8jAQRbUQho187hKSLQpzWBsV7LW2gNXUthvb8W4hHBifTfhdSMKvTDP7",
      explorer: "",
      highlighted: false
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