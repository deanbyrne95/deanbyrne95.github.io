import {DOCUMENT} from '@angular/common';
import {Component, Inject, Input, OnInit} from '@angular/core';
import {Logger} from '@core/services/logs/log.service';
import {SettingsService} from '@core/services/settings/settings.service';
import * as Constants from '@data/constants/constants';
import {Navigation} from '@data/models/navigation.model';

const logger = new Logger('SidebarComponent');

const appThemes = [
    Constants.LIGHT_THEME,
    Constants.DARK_THEME
]

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    @Input() appName: string;
    @Input() appVersion: string;
    @Input() materialVersion: string;
    @Input() above: boolean;
    @Input() sidebar: boolean;
    @Input() routes: Navigation[];

    theme: string;
    themeButtons = appThemes;
    minimised: boolean;

    constructor(@Inject(DOCUMENT) private document: Document, private settingsService: SettingsService) {
        this.initialise();
    }

    ngOnInit(): void {
    }

    minimise(): void {
        this.minimised = !this.minimised;
        this.settingsService.changeSetting('sidebarMinimised', this.minimised);
    }

    private initialise(): void {
        logger.debug('initialising');
        this.minimised = this.settingsService.settings.sidebarMinimised;
        this.setTheme(this.settingsService.settings.theme);
        this.resize();
        this.addResizeListener();
    }

    setTheme(theme: string, save: boolean = false): void {
        logger.debug(`setting theme to ${theme.toLowerCase()}`)
        this.theme = theme;
        this.themeButtons.forEach((currentTheme: string) => this.document.documentElement.classList.remove(currentTheme));
        this.document.documentElement.classList.add(theme);

        if (save) {
            this.settingsService.changeSetting('theme', this.theme);
        }
    }

    private addResizeListener(): void {
        window.addEventListener('resize', () => {
            // We execute the same script as before
            this.resize();
        });
    }

    private resize(): void {
        const vh = window.innerHeight * 0.01;
        this.document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

}
