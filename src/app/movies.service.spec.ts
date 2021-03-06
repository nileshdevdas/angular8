import { TestBed, inject } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';
import { DocumentaryComponent } from './documentary/documentary.component';
import { RegionalComponent } from './regional/regional.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { Info1Component } from './info1/info1.component';
import { LoginComponent } from './login/login.component';
import { OopspageComponent } from './oopspage/oopspage.component';
import { SinguppageComponent } from './singuppage/singuppage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TelevisionpageComponent } from './televisionpage/televisionpage.component';
import { EventspageComponent } from './eventspage/eventspage.component';
import { MoviespageComponent } from './moviespage/moviespage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CconvertorPipe } from './cconvertor.pipe';
import { MovielistComponent } from './movielist/movielist.component';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { MaindeskComponent } from './maindesk/maindesk.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HelloComponent } from './hello/hello.component';
import { AppComponent } from './app.component';
import { routes } from './app.module';
import { async } from 'q';
import {
  HttpClient,
} from '@angular/common/http';

describe('MoviesService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        DocumentaryComponent,
        HighlightDirective
      ],

      imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        FormsModule
      ],
    }).compileComponents();
  }));

  it(
    'should get users',
    inject(
      [HttpClient],
      (
        http: HttpClient,
      ) => {
        const service: MoviesService = TestBed.get(MoviesService);
        expect(service).toBeTruthy();
      }
    )
  );
});