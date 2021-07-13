import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBug, faCode, faComment, faGlobe, faLanguage, faMailBulk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.sass']
})
export class ContributionComponent implements OnInit {

  faGlobe = faGlobe
  faLanguage = faLanguage
  faComment = faComment
  faBug = faBug
  faEmail = faMailBulk
  faCode = faCode
  faGithub = faGithub

  constructor() { }

  ngOnInit(): void {
  }

}
