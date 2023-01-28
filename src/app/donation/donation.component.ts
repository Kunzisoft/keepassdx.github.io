import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faBitcoin, faEthereum, faGooglePlay, faMonero, faPaypal, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faAtom, faCoffee, faCertificate, faCreditCard, faInfinity, faMountain, faHeart, faQrcode, faCircle, faGlobeAfrica, faChessKnight, faWallet } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CryptocurrencyModalService } from '../cryptocurrency-modal.service';
import { Web3ConnectionService } from '../web3-connection.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.sass']
})

export class DonationComponent implements OnInit {

  @ViewChild("modalCryptoSendCallback") modalCryptoSendCallback!: ElementRef;

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
  faTreasure = faChessKnight
  faCreditCard = faCreditCard
  faWallet = faWallet
  faQrcode = faQrcode

  rewards = ["NFT0.png", "NFT1.png", "NFT2.png", "NFT3.png"];

  lastTransactionHash: {cryptocurrency: CryptoCurrency, hash: string} | null = null;

  walletConnectedArray = new Map<CryptoCurrency, boolean>()

  mainCryptoCurrencies: MainCryptoCurrency[] = [
    {
      name: "Bitcoin",
      icon: this.faBitcoin,
      currency: "BTC",
      webSiteUrl: "https://bitcoin.org/",
      qrImgPath: "assets/img/bitcoin_qr.png",
      walletAddress: "1DSwXCk7Sob24sNsofywNoRQw2f5Qj5t2F",
      explorer: "https://blockstream.info/address/1DSwXCk7Sob24sNsofywNoRQw2f5Qj5t2F",
      highlighted: false,
      defaultValue: 0.002
    },
    {
      name: "Ethereum",
      icon: this.faEthereum,
      currency: "ETH",
      webSiteUrl: "https://www.ethereum.org/",
      qrImgPath: "assets/img/ethereum_qr.png",
      walletAddress: "0x6F5De8c22C4869c4a5D3a48975a42C9498de3CAB",
      explorer: "https://etherchain.org/account/6F5De8c22C4869c4a5D3a48975a42C9498de3CAB",
      highlighted: true,
      defaultValue: 0.02
    },
    {
      name: "Monero",
      icon: this.faMonero,
      currency: "XMR",
      webSiteUrl: "https://getmonero.org/",
      qrImgPath: "assets/img/monero_qr.png",
      walletAddress: "4BFGwyshAa2YwwXNboQ4r78Vv9hf83cFBCF8vAd8jAQRbUQho187hKSLQpzWBsV7LW2gNXUthvb8W4hHBifTfhdSMKvTDP7",
      explorer: "",
      highlighted: false,
      defaultValue: 0.2
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
    }
  ];

  constructor(private cryptocurrencyModalService: CryptocurrencyModalService,
              private web3ConnectionService: Web3ConnectionService,
              private ngbModalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  requestOpenCryptoCurrencyModal(cryptocurrency: CryptoCurrency) {
    this.cryptocurrencyModalService.requestCryptocurrencyModal(cryptocurrency);
  }

  walletConnected(cryptocurrency: CryptoCurrency) {
    return this.walletConnectedArray.get(cryptocurrency)
  }

  walletAvailable(cryptocurrency: CryptoCurrency) {
    switch(cryptocurrency.name) {
      case "Ethereum": {
        return this.web3ConnectionService.isETHAccountAvailable()
      }
    }
    return false;
  }

  connectWallet(cryptocurrency: CryptoCurrency) {
    switch(cryptocurrency.name) {
      case "Ethereum": {
        this.web3ConnectionService.connectETHAccount().then( connected => 
          this.walletConnectedArray.set(cryptocurrency, connected)
        );
        break;
      }
      // TODO Other web3 wallet connection
    }
  }

  send(cryptocurrency: CryptoCurrency, form: NgForm) {
    switch(cryptocurrency.name) {
      case "Ethereum": {
        this.web3ConnectionService.sendEth(
          this.mainCryptoCurrencies[1].walletAddress,
          Number(form.value.amount),
          (err: any, transactionHash: any) => {
            if (err) { 
              this.lastTransactionHash = null
            } else {
              this.lastTransactionHash = {cryptocurrency: cryptocurrency, hash: transactionHash}
              this.ngbModalService.open(this.modalCryptoSendCallback)
            }
          }
        )
        break;
      }
      // TODO Other web3 wallet connection
    }
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

export interface MainCryptoCurrency extends CryptoCurrency {
  defaultValue: number | undefined
}
