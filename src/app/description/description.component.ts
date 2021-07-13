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
  summary = "KeePassDX is a free open source password manager for Android, which helps you to manage your passwords in a secure way."

  descriptions = [
    {
      icon: faLock,
      title: "Secure",
      description: "Keep your password safe in a secure place, KeePassDX store your database locally in an encrypted file."
    },
    {
      icon: faDesktop,
      title: "Compatible",
      description: "KeePassDX is compatible with other KeePass products, you can also export your data easily over all the devices."
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