import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { NavbarComponent } from './navbar/navbar.component'
import { FooterComponent } from './footer/footer.component'
import { LoginComponent } from './login/login.component'
import { UserFormComponent } from './user-form/user-form.component'
import { ModalModule } from 'ngx-bootstrap/modal'
import { ImageSliderComponent } from './image-slider/image-slider.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBaby,
  faArrowCircleLeft,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { UserFormService } from './user-form/user-form.service'
import { HttpClientModule } from '@angular/common/http'
import { NgxSpinnerModule } from 'ngx-spinner'

// Add an icon to the library for convenient access in other components
library.add(
  faBaby,
  faArrowCircleLeft,
  faArrowCircleRight,
  faInstagram,
  faFacebook,
  faYoutube
)
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    UserFormComponent,
    ImageSliderComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FontAwesomeModule,
    CollapseModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  entryComponents: [LoginComponent, UserFormComponent],
  providers: [UserFormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
