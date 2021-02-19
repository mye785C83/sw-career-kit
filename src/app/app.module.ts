import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WebtoonsComponent } from './webtoons/webtoons.component';
import { WebtoonCutComponent } from './webtoons/webtoon-cut/webtoon-cut.component';
import { ContentsComponent } from './contents/contents.component';
import { ContentsItemComponent } from './contents/contents-item/contents-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WebtoonsComponent,
    WebtoonCutComponent,
    ContentsComponent,
    ContentsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(faAngleUp, faAngleDown);
  }
}
