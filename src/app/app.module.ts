import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaindeskComponent } from './maindesk/maindesk.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';
import { MovielistComponent } from './movielist/movielist.component';
import { HttpClientModule } from '@angular/common/http';
import { CconvertorPipe } from './cconvertor.pipe';
import { RouterModule, Route } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MoviespageComponent } from './moviespage/moviespage.component';
import { TelevisionpageComponent } from './televisionpage/televisionpage.component';
import { EventspageComponent } from './eventspage/eventspage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SinguppageComponent } from './singuppage/singuppage.component';
import { OopspageComponent } from './oopspage/oopspage.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { Info1Component } from './info1/info1.component';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { RegionalComponent } from './regional/regional.component';
import { DocumentaryComponent } from './documentary/documentary.component';
/* routing rules */
const routes: Route[] = [
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'movies', component: MoviespageComponent,
    children: [
      { path: 'bollywood', component: BollywoodComponent },
      { path: 'hollywood', component: HollywoodComponent },
      { path: 'regional', component: RegionalComponent },
      { path: 'documentary', component: DocumentaryComponent },
      { path: '**', component: OopspageComponent }
    ]
  },
  { path: 'events', component: EventspageComponent },
  { path: 'tv', component: TelevisionpageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'signup', component: SinguppageComponent },
  { path: '**', component: OopspageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    MaindeskComponent,
    FooterComponent,
    InfoComponent,
    MovielistComponent,
    CconvertorPipe,
    HomepageComponent,
    MoviespageComponent,
    TelevisionpageComponent,
    EventspageComponent,
    LoginpageComponent,
    SinguppageComponent,
    OopspageComponent,
    LoginComponent,
    Info1Component,
    HollywoodComponent,
    BollywoodComponent,
    RegionalComponent,
    DocumentaryComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
