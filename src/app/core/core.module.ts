import {CommonModule} from '@angular/common';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from "./guards/module-import.guard";


@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
