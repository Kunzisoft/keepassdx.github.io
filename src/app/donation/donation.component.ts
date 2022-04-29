import { Component, OnInit } from '@angular/core';
import { faBitcoin, faEthereum, faGooglePlay, faMonero, faPaypal, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faAtom, faCoffee, faCertificate, faCreditCard, faInfinity, faMountain, faHeart, faCircle, faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';
import { CryptocurrencyModalService } from '../cryptocurrency-modal.service';

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
  faAvalanche = faMountain
  faPolygon = faInfinity
  faPolkadot = faCircle
  faTerra = faGlobeAfrica
  faAtom = faAtom
  faCardano = faCertificate
  faMonero = faMonero
  faGooglePlay = faGooglePlay
  faPaypal = faPaypal
  faCreditCard = faCreditCard;

  mainCryptoCurrencies: CryptoCurrency[] = [
    {
      name: "Bitcoin",
      icon: this.faBitcoin,
      currency: "BTC",
      webSiteUrl: "https://bitcoin.org/",
      qrImgPath: "assets/img/bitcoin_qr.png",
      walletAddress: "1DSwXCk7Sob24sNsofywNoRQw2f5Qj5t2F",
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
      explorer: "https://etherchain.org/account/6F5De8c22C4869c4a5D3a48975a42C9498de3CAB",
      highlighted: true
    },
    {
      name: "Monero",
      icon: this.faMonero,
      currency: "XMR",
      webSiteUrl: "https://getmonero.org/",
      qrImgPath: "assets/img/monero_qr.png",
      walletAddress: "4BFGwyshAa2YwwXNboQ4r78Vv9hf83cFBCF8vAd8jAQRbUQho187hKSLQpzWBsV7LW2gNXUthvb8W4hHBifTfhdSMKvTDP7",
      explorer: "",
      highlighted: false
    }
  ];
  altCryptoCurrencies: CryptoCurrency[] = [
    {
      name: "Cosmos",
      icon: this.faAtom,
      currency: "ATOM",
      webSiteUrl: "https://cosmos.network/",
      qrImgPath: "assets/img/cosmos_qr.png",
      walletAddress: "cosmos179txcprxcezldk2smcwj536kj27vuptqun574h",
      explorer: "https://atomscan.com/accounts/cosmos179txcprxcezldk2smcwj536kj27vuptqun574h",
      highlighted: false
    },
    {
      name: "Polkadot",
      icon: this.faPolkadot,
      currency: "DOT",
      webSiteUrl: "https://polkadot.network/",
      qrImgPath: "assets/img/polkadot_qr.png",
      walletAddress: "133zP9mEYnNwEvZbfhuDWSGRYeBqRXVRGQThN4NupejBfYp7",
      explorer: "https://polkadot.subscan.io/account/133zP9mEYnNwEvZbfhuDWSGRYeBqRXVRGQThN4NupejBfYp7",
      highlighted: false
    },
    {
      name: "Avalanche",
      icon: this.faAvalanche,
      currency: "AVAX",
      webSiteUrl: "https://www.avax.network/",
      qrImgPath: "assets/img/ethereum_qr.png",
      walletAddress: "0x6F5De8c22C4869c4a5D3a48975a42C9498de3CAB",
      explorer: "https://snowtrace.io/address/0x6F5De8c22C4869c4a5D3a48975a42C9498de3CAB",
      highlighted: false
    },
    {
      name: "Polygon",
      icon: this.faPolygon,
      currency: "MATIC",
      webSiteUrl: "https://polygon.technology/",
      qrImgPath: "assets/img/ethereum_qr.png",
      walletAddress: "0x6F5De8c22C4869c4a5D3a48975a42C9498de3CAB",
      explorer: "https://polygonscan.com/address/0x6F5De8c22C4869c4a5D3a48975a42C9498de3CAB",
      highlighted: false
    },
    {
      name: "Terra",
      icon: this.faTerra,
      currency: "LUNA",
      webSiteUrl: "https://terra.money/",
      qrImgPath: "assets/img/terra_qr.png",
      walletAddress: "terra1zgsge0ph28kxwq9x8l3yu4t2kge9z3eyhwjan3",
      explorer: "https://finder.terra.money/mainnet/address/terra1zgsge0ph28kxwq9x8l3yu4t2kge9z3eyhwjan3",
      highlighted: false
    },
    {
      name: "Cardano",
      icon: this.faCardano,
      currency: "ADA",
      webSiteUrl: "https://cardano.org/",
      qrImgPath: "assets/img/cardano_qr.png",
      walletAddress: "addr1qxfuczz53wuwa4dqmluptakv2gnkgslqyhf73spq2vvkykcu0tkh8aw9ehfd8xfqdtp6vvz0nnz6xzkltzfxua5uv35qqzm4s0",
      explorer: "https://explorer.cardano.org/en/address.html?address=addr1qxfuczz53wuwa4dqmluptakv2gnkgslqyhf73spq2vvkykcu0tkh8aw9ehfd8xfqdtp6vvz0nnz6xzkltzfxua5uv35qqzm4s0",
      highlighted: false
    }
  ];

  constructor(private cryptocurrencyModalService: CryptocurrencyModalService) {
  }

  ngOnInit(): void {
  }

  requestOpenCryptoCurrencyModal(cryptocurrency: CryptoCurrency) {
      this.cryptocurrencyModalService.requestCryptocurrencyModal(cryptocurrency);
  }
}

export interface CryptoCurrency {
  name: string,
  icon: IconDefinition,
  currency: string,
  webSiteUrl: string,
  qrImgPath: string,
  walletAddress: string,
  explorer: string,
  highlighted: boolean
}
