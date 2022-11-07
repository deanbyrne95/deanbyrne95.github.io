import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Data, NavigationEnd, Route, Router} from '@angular/router';
import {Logger} from '@core/services/logs/log.service';
import {SettingsService} from '@core/services/settings/settings.service';
import {Navigation} from '@data/models/navigation.model';
import packageInfo from 'package.json';
import {filter} from 'rxjs';

const logger = new Logger('FrameworkComponent');

@Component({
    selector: 'app-root',
    templateUrl: './framework.component.html',
    styleUrls: ['./framework.component.scss']
})
export class FrameworkComponent implements OnInit {

    appName: string = packageInfo.name;
    appVersion = packageInfo.version;
    materialVersion = packageInfo.dependencies['@angular/material'].replace('^', '');
    routes: Navigation[] = [];

    sidebar: boolean = true;
    aboveHeader: boolean = true;
    aboveFooter: boolean;

    constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute, private settingsService: SettingsService) {
        this.initialise();
    }

    ngOnInit(): void {
        this.titleService.setTitle(this.appName);
        this.listAllRoutes(this.router.config);
    }

    private getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
        return activatedRoute.firstChild ? this.getChild(activatedRoute.firstChild) : activatedRoute;
    }

    private listAllRoutes(config: Route[], parent: string = ''): void {
        for (let i = 0; i < config.length; i++) {
            const route = config[i];
            if (route.path && route.data?.['icon']) {
                this.routes.push({routerLink: route.path, data: route.data});
                console.log(this.routes);
                if (route.children) {
                    const currentPath = route.path ? parent + '/' + route.path : parent;
                    this.listAllRoutes(route.children, currentPath);
                }
            }
        }
    }

    private initialise(): void {
        this.loadSettings();
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                const route = this.getChild(this.activatedRoute);
                route.data.subscribe((data: Data) => {
                    const title = data['title'];
                    this.titleService.setTitle(this.appName.concat(title ? ` | ${title}` : ''))
                })
            })
    }

    private loadSettings(): void {
        logger.debug('loading settings');
        this.sidebar = this.settingsService.settings.displaySidebar;
        logger.info('settings loaded');
    }
}
