import { ProductModule } from './product/product.module';
import { HttpModule } from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ZADMIN_ROUTES } from './routes';
import { ZAdminComponent } from './zadmin.component';
import { NavBarModule } from './core/navbar/navbar.component';
import { HomeModule } from './home/home.component';
import { SignInModule } from './sign-in/sign-in.component';

import { OauthService } from './shared/oauth.service';
import { CartService } from './shared/cartservice';
import { AuthInterceptor } from './shared/auth.interceptor';

@NgModule({
  declarations: [
    ZAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ZADMIN_ROUTES),
    FlexLayoutModule,
    HttpModule,
    HomeModule,
    NavBarModule,
    ProductModule,
    SignInModule
  ],
  providers: [
    OauthService,
    CartService,
    AuthInterceptor,
    {   
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }],
  bootstrap: [ZAdminComponent]
})
export class AppModule { }
