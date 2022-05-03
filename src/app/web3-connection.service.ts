import { Injectable } from '@angular/core';
import Web3 from "web3";
import Web3Modal from "web3modal";
import { Subject } from 'rxjs';

interface TransactionCallback {
  (err: any, transactionHash: any): void;
}

@Injectable({
  providedIn: 'root'
})
export class Web3ConnectionService {

  private accountStatusSource = new Subject<any>();
  accountStatus$ = this.accountStatusSource.asObservable();

  constructor() { 
  }

  isETHAccountAvailable() {
    return window.ethereum != null
  }

  async connectETHAccount() {
    // EIP-1102 : https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1102.md
    // EIP-1193 : https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md
    if (window.ethereum != null) {
      try {
        await window.ethereum.request({method: 'eth_requestAccounts'});
        window.web3 = new Web3(window.ethereum)
        console.log("Connected to ETH wallet")
        return true
      } catch (error) {
        console.log("Not connected")
      }
    }
      return false
    // this.accountStatusSource.next(this.accounts)
    // web3.eth.getBalance(address [, defaultBlock] [, callback])
  }

  sendEth(destination: string,
          amount: number,
          callback: TransactionCallback) {

    window.web3.eth.getAccounts().then( (accounts: string[]) => {

      let mainAccount = accounts[0]
      if (mainAccount != null) {
        // Main account exists
        window.web3.eth.sendTransaction({
          from: accounts[0],
          to: destination,
          value: Web3.utils.toWei(amount.toString(), "ether") 
        }, function(err: any, transactionHash: any) {
          if (err) { 
              console.log("Transaction not successful") 
          } else {
              console.log("Transaction successful : Hash -> " + transactionHash)
          }
          callback(err, transactionHash)
        })
      } else {
        // Try a reconnection
        this.connectETHAccount().then(connected => {
            if (connected) {
              this.sendEth(destination, amount, callback)
            }
          }
        )
      }

    })
  }

  signTransaction() {
    // TODO window.web3.eth.accounts.signTransaction(tx, privateKey [, callback]);
  }
}
