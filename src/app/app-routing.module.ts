import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BracketComponent } from './bracket/bracket.component';
import { DeveloperToolsComponent } from './developer-tools/developer-tools.component';
import { AboutComponent } from './about/about.component';
import { FinalResultComponent } from './bracket/final-result/final-result.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'bracket', component: BracketComponent },
  { path: 'final-result/:id', component: FinalResultComponent },
  { path: 'about', component: AboutComponent },
  { path: 'developer-tools', component: DeveloperToolsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
