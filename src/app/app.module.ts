import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
