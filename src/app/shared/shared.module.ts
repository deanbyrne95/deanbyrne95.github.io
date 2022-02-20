import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MaterialModule} from "@shared/material/material.module";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [MaterialModule]
})
export class SharedModule {
}
