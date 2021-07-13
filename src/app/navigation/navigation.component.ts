import { Component, OnInit } from '@angular/core';
import { faCode, faDownload, faHandHoldingHeart, faIcons, faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  faHelp = faQuestion
  faIcons = faIcons
  faContact = faCode
  faDonation = faHandHoldingHeart
  faDownload = faDownload

  ngOnInit(): void {
  }

}
