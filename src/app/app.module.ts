import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PhotoComponent } from './components/pages/photo/photo.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './components/pages/contact/contact.component';
import { SearchComponent } from './components/pages/search/search.component';
import { KeysPipe } from './pipes/keys.pipe';
import { TarjetaMasonryComponent } from './/components/shared/tarjeta-masonry/tarjeta-masonry.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    PhotoComponent,
    ContactComponent,
    SearchComponent,
    KeysPipe,
    TarjetaMasonryComponent,
    LoadingComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
