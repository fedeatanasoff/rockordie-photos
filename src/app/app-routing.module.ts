import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PhotoComponent } from './components/pages/photo/photo.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { SearchComponent } from './components/pages/search/search.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

const APP_ROUTES: Routes = [
  { path: 'inicio', component: PortfolioComponent },
  // { path: 'sobre-mi', component: AboutComponent },
  { path: 'photo/:id', component: PhotoComponent },
  { path: 'buscar/:termino', component: SearchComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
