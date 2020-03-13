import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { BootstrapModule } from './core/bootstrap/bootstrap.module';
import { GuideModule } from './modules/guide/guide.module';
import { TemporaryPageComponent } from './core/temporary-page/temporary-page.component';
import { GetDefaultListService } from './shared/services/get-default-list.service';
import { VocabularyModule } from './modules/vocabulary/vocabulary.module';
import { AuthModule } from './modules/auth/auth.module';
import { CommonCRUDService } from './shared/services/common-crud.service';
import { AuthService } from './shared/services/auth.service';
import { TokenInterceptor } from './shared/classes/token.interceptor';
import { UserInfoService } from './shared/services/user-info.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TemporaryPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    GuideModule,
    VocabularyModule,
    AuthModule
  ],
  providers: [
    AuthService,
    GetDefaultListService,
    CommonCRUDService,
    UserInfoService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
