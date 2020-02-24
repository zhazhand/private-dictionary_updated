import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { BootstrapModule } from './core/bootstrap/bootstrap.module';
import { GuideModule } from './modules/guide/guide.module';
import { TemporaryPageComponent } from './core/temporary-page/temporary-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TemporaryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    GuideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
