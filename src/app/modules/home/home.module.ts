import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HomeRoutingModule} from '@modules/home/home-routing.module';
import { HomeComponent } from './pages/home.component';


@NgModule({
    declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule {
}
