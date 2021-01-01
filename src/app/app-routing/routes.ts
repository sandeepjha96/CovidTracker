import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import {DistrictComponent} from '../district/district.component';
import { FaqComponent } from '../faq/faq.component';
import { HelplineComponent } from '../helpline/helpline.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'faq',  component: FaqComponent },
  { path: 'helpline',  component: HelplineComponent },
  { path: 'contact',  component: ContactComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];