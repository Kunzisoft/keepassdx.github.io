import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, SecurityContext } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SplashComponent } from './splash/splash.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DescriptionComponent } from './description/description.component';
import { FooterComponent } from './footer/footer.component';
import { DonationComponent } from './donation/donation.component';
import { FaqComponent } from './faq/faq.component';
import { ContributionComponent } from './contribution/contribution.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SelectIconsComponent } from './select-icons/select-icons.component';
import { FilterPipe } from './select-icons/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    NavigationComponent,
    DescriptionComponent,
    FooterComponent,
    DonationComponent,
    FaqComponent,
    ContributionComponent,
    SelectIconsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      }
    })
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// function that returns `MarkedOptions` with renderer override
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  let itemIterator = 0
  let firstLevel2 = true

  renderer.heading = (text: string, level, raw: string, slugger: marked.Slugger) => {

    itemIterator++
    let closeLast = ""
      if (firstLevel2) {
        firstLevel2 = false
      } else {
        closeLast = closeText() + closeAccordion()
      }

    return closeLast + openAccordion(itemIterator) + openTitle(itemIterator) + text + closeTitle() + openText(itemIterator)
  }
  renderer.paragraph = (text: string) => {
    return text + `<br />`
  }

  return {
    renderer: renderer,
    gfm: true,
    breaks: true,
    pedantic: false,
    smartLists: false,
    smartypants: false,
  }
}

function openAccordion(itemIterator: number): string {
  return `<div class="card">`
}

function closeAccordion(): string {
  return `</div>`
}

function openTitle(itemIterator: number): string {
  return `<div id="heading` + itemIterator + `">
  <h2 class="mb-0">
  <button class="btn btn-outline-secondary btn-block" onClick="
    var content = document.getElementById('mdCollapse` + itemIterator + `')
    var isCollapsed = content.getAttribute('md-data-collapsed') === 'true';
    if(isCollapsed) {
      expandSection(content)
    } else {
      collapseSection(content)
    }

    function collapseSection(element) {
      var sectionHeight = element.scrollHeight;
      var elementTransition = element.style.transition;
      element.style.transition = '';
      requestAnimationFrame(function() {
        element.style.height = sectionHeight + 'px';
        element.style.transition = elementTransition;
        requestAnimationFrame(function() {
          element.style.height = 0 + 'px';
        });
      });
      element.setAttribute('md-data-collapsed', 'true');
    }
    
    function expandSection(element) {
      var sectionHeight = element.scrollHeight;
      element.style.height = sectionHeight + 'px';
      element.addEventListener('transitionend', function(e) {
        element.removeEventListener('transitionend', arguments.callee);
      });
      element.setAttribute('md-data-collapsed', 'false');
    }
  ">`
}

function closeTitle(): string {
  return `</button>
  </h2>
  </div>`
}

function openText(itemIterator: number): string {
  return `<div id="mdCollapse` + itemIterator + `" class="markdown-section" md-data-collapsed="true" style="height: 0px">
  <div class="card-body">`
}

function closeText(): string {
  return `</div>
  </div>`
}