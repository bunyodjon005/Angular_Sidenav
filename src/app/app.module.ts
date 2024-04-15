import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ModalImg1Component } from './modal-img-1/modal-img-1.component';
import { ModalImg2Component } from './modal-img-2/modal-img-2.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImageComponent } from './image/image.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DasbhoardComponent } from './dasbhoard/dasbhoard.component';
import { CartsFormComponent } from './carts-form/carts-form.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MyprofileComponent,
    ModalImg1Component,
    ModalImg2Component,
    ImageComponent,
    NotificationsComponent,
    DasbhoardComponent,
    CartsFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ImageCropperModule,
    NgbModule,
    ReactiveFormsModule,
    CommonModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
