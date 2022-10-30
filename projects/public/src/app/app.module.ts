import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 

 

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; 
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { NgWizardConfig, NgWizardModule, THEME } from 'ng-wizard';
import { CarouselModule } from 'ngx-owl-carousel-o';
 
import { LightboxModule } from 'ngx-lightbox';
import { AuthInterceptorService } from './core/services/interceptor/auth-interceptor.service';
import { NgbAccordionModule, NgbModule, NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};
@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbNavModule,
    NgbAccordionModule,
    NgbTooltipModule,
    NgbModule,
    CarouselModule,
    LightboxModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    NgWizardModule.forRoot(ngWizardConfig)




  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
