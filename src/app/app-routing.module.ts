import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { PhotoComponent } from './pages/photo/photo.component';
import { ContactComponent } from './pages/contact/contact.component';

const APP_ROUTES: Routes = [
  { path: 'inicio', component: PortfolioComponent },
  { path: 'sobre-mi', component: AboutComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
