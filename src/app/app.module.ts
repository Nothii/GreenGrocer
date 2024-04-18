import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ForgotYourPasswordComponent } from './forgot-your-password/forgot-your-password.component';
import { NotRegisteredSignInComponent } from './not-registered-sign-in/not-registered-sign-in.component';
import { LoginComponent } from './login/login.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { TestimonialComponent } from './testimonials/testimonials.component';
import { TestimonialsService } from './testimonials.service'; 

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestimonialComponent,
    ForgotYourPasswordComponent,
    NotRegisteredSignInComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    WhoAreWeComponent,
    StarRatingComponent
  ],
  imports: [
    CarouselModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    FontAwesomeModule,
    MatSlideToggleModule,
    FormsModule
  ],
  providers: [
    ProductService,
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
