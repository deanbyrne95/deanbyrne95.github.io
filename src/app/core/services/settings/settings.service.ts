import {Injectable} from '@angular/core';
import {BrowserService} from '@core/services/browser/browser.service';
import {Logger} from '@core/services/logs/log.service';
import {Settings} from '@data/classes/settings.class';
import * as Constants from '@data/constants/constants';

const logger = new Logger('SettingsService');

export declare type Setting = 'displaySidebar' | 'sidebarMinimised' | 'theme' | undefined;

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    settings: Settings;

    constructor(private browserService: BrowserService) {
        logger.debug('initialisation');
        this.initialise();
    }

    initialise(): void {
        this.settings = this.browserService.getInStorage(localStorage, Constants.SETTINGS);
        if (!this.settings) {
            let settings = new Settings();
            settings.theme = 'light';
            settings.displaySidebar = true;
            settings.sidebarMinimised = false;
            this.browserService.setInStorage(localStorage, Constants.SETTINGS, settings);
            this.settings = settings;
        }
    }

    changeSetting(setting: Setting, value: any): void {
        if (setting) {
            // @ts-ignore
            this.settings[setting] = value;
            this.browserService.setInStorage(localStorage, Constants.SETTINGS, this.settings);
        }
    }


}
