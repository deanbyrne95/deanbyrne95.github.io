import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '@app/app-routing.module';
import {CoreModule} from '@core/core.module';
import {FooterComponent} from '@layouts/footer/footer.component';
import {FrameworkComponent} from '@layouts/framework/framework.component';
import {HeaderComponent} from '@layouts/header/header.component';
import {SidebarComponent} from '@layouts/sidebar/sidebar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '@shared/shared.module';

@NgModule({
    declarations: [
        FrameworkComponent,
        FooterComponent,
        HeaderComponent,
        SidebarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        CoreModule,
        SharedModule,
        NgbModule,

        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatMenuModule,
        MatTooltipModule
    ],
    providers: [],
    bootstrap: [FrameworkComponent]
})
export class AppModule {
}
