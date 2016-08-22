import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MyAppComponent}  from './app.component';
import {HomeModule}  from './home/home.module';
import {ContactModule}  from './contact/contact.module';
import {SignupModule}  from './signup/signup.module';
import {routing, routingProviders} from './app.routes';

@NgModule({
  imports: [BrowserModule, ContactModule, HomeModule, SignupModule, routing],
  declarations: [MyAppComponent],
  providers: [routingProviders],
  bootstrap: [MyAppComponent]
})
export class AppModule { }