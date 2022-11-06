import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Route, Router} from '@angular/router';
import {Logger} from '@core/services/logs/log.service';
import {Navigation} from '@data/models/navigation.model';
import packageInfo from 'package.json';

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

    constructor(private titleService: Title, private router: Router) {
    }

    ngOnInit(): void {
        this.titleService.setTitle(this.appName);
        this.listAllRoutes(this.router.config);
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

}
