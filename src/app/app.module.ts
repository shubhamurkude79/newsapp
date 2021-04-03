import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewsModule } from './news/news.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { EmployeeserviceService } from './auth/employeeservice.service';
import { NewsService } from './news/news.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NewsModule,
    AdminModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [EmployeeserviceService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
