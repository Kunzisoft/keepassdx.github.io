import { Component, OnInit } from '@angular/core';
import { faAndroid, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.sass']
})
export class SplashComponent implements OnInit {

  faAndroid = faAndroid
  faLinux = faLinux
  faDownload = faDownload

  constructor() { }

  ngOnInit(): void {
  }

}
