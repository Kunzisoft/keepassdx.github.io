import { Component, OnInit } from '@angular/core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent implements OnInit {

  faQuestion = faQuestion
  wikiUrl = "https://github.com/Kunzisoft/KeePassDX/wiki"
  markdownUrl = "https://raw.githubusercontent.com/wiki/Kunzisoft/KeePassDX/FAQ.md"

  constructor() { }

  ngOnInit(): void {
  }

}