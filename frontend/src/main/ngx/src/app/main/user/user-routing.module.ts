import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from "./user-home/user-home.component";
import { UserNewComponent } from './user-new/user-new.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [{
  path : '',
  component: UserHomeComponent
},
{
  path : 'new',
  component: UserNewComponent
},
{
  path : ':USER_',
  component: UserDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
