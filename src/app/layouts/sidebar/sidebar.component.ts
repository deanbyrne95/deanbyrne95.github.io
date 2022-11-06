import {DOCUMENT} from '@angular/common';
import {Component, Inject, Input, OnInit} from '@angular/core';
import * as Constants from '@data/constants/constants';
import {Navigation} from '@data/models/navigation.model';

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

    themeButtons = appThemes;
    minimised: boolean;

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.resize();
        this.addResizeListener();
    }

    ngOnInit(): void {
    }

    minimise(): void {
        this.minimised = !this.minimised;
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
