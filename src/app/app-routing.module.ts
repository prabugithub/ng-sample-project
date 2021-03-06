import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  { path: 'detail/:id', component: HeroDetailsComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
]

@NgModule({
   exports: [
    RouterModule
   ],
   imports: [
     RouterModule.forRoot(routes)
   ]
})
export class AppRoutingModule { }
