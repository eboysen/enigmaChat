import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { UsageComponent } from './usage/usage.component';

const routes: Routes = [
  { path: 'home',component:HomeComponent },
  { path: 'about',component:AboutComponent },
  { path: 'education', component:EducationComponent },
  { path: 'usage', component:UsageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
