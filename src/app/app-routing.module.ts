import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DonateComponent } from './donate/donate.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'tutorials', component: TutorialComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'donate', component: DonateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
