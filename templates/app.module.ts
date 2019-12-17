import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { TesterLoginFormComponent } from './tester-login-form/tester-login-form.component';
import { OptionSelectComponent } from './option-select/option-select.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { ComedianLoginFormComponent } from './comedian-login-form/comedian-login-form.component';
import {Routes,RouterModule} from '@angular/router';
import { UserVideosComponent } from './user-videos/user-videos.component';
import { PendingVideosComponent } from './pending-videos/pending-videos.component';
import { MachineLearningComponentComponent } from './machine-learning-component/machine-learning-component.component';


const appRoutes : Routes = [{path:'uLogin',component:UserLoginFormComponent},
{path:'cLogin',component:ComedianLoginFormComponent},
{path:'tLogin',component:TesterLoginFormComponent},
{path:'forgotPWcomedian',component:ForgotPasswordComponent},
{path:'forgotPWuser',component:ForgotPasswordComponent},
{path:'about',component:AboutUsComponent},
{path:'home',component:OptionSelectComponent},
{path : '',component:HomePageComponent},
{path : 'testerWork',component : PendingVideosComponent}];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    FooterComponent,
    HomePageComponent,
    HeaderComponent,
    TesterLoginFormComponent,
    OptionSelectComponent,
    ForgotPasswordComponent,
    UserLoginFormComponent,
    ComedianLoginFormComponent,
    UserVideosComponent,
    PendingVideosComponent,
    MachineLearningComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
