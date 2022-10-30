import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { RightsidebarComponent } from './rightsidebar/rightsidebar.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SpinnerComponent } from './spinner/spinner.component';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { TestAlertComponent } from './test-alert/test-alert.component';




// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    TopbarComponent,
    SidebarComponent,
    RightsidebarComponent,
    SpinnerComponent,
    TestAlertComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    SimplebarAngularModule,
    TranslateModule,
    SimpleNotificationsModule.forRoot(), 

  ]
})
export class LayoutModule { }
