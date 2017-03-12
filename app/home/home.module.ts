import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FeedsModule } from '../feeds/feeds.module';
import { routing, routingProviders } from './home.routes';

@NgModule({
  imports: [CommonModule, FeedsModule, routing],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [routingProviders]
})
export class HomeModule { }