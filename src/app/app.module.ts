import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from '@app/app-routing.module';
import {CoreModule} from "@core/core.module";
import {FooterComponent} from '@layouts/footer/footer.component';
import {FrameworkComponent} from '@layouts/framework/framework.component';
import {HeaderComponent} from '@layouts/header/header.component';
import {SharedModule} from "@shared/shared.module";

@NgModule({
    declarations: [
        FrameworkComponent,
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        CoreModule,
        SharedModule,

        AppRoutingModule
    ],
    providers: [],
    bootstrap: [FrameworkComponent]
})
export class AppModule {
}
