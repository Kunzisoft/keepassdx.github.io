import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.sass']
})
export class DescriptionComponent implements OnInit {

  title = "What is KeePassDX?"
  summary = "KeePassDX is an ethical open source password manager for Android."

  descriptions = [
    {
      icon: faLock,
      title: "Secure",
      description: "Keep your password safe in a secure place, KeePassDX store your database in a single encrypted file and can be copied and moved wherever you want."
    },
    {
      icon: faDesktop,
      title: "Compatible",
      description: "KeePassDX is compatible with other KeePass products, the format is standardized and allows for increased interoperability."
    },
    {
      icon: faGithub,
      title: "Open Source",
      description: "KeePassDX is created by the community and the code is completely open, it allows a better security and a better management of your need."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
