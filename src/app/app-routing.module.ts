import { RetrosDetailComponent } from './components/retros/retros-detail/retros-detail.component';
import { RetrosListComponent } from './components/retros/retros-list/retros-list.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: RetrosListComponent
  },
  {
    path: 'retro/:id',
    component: RetrosDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
