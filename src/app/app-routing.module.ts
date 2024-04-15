import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ModalImg2Component } from './modal-img-2/modal-img-2.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DasbhoardComponent } from './dasbhoard/dasbhoard.component';


const routes: Routes = [
  {path:'profile',component:MyprofileComponent},
  // {path:'editprofil',component:EditprofileComponent}
  {path:'modal2',component:ModalImg2Component},
  {path:'notif',component:NotificationsComponent},
  {path:'dashboard',component:DasbhoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
