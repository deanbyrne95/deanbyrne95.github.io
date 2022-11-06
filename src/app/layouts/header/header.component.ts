import {Component, Input, OnInit} from '@angular/core';
import {Navigation} from '@data/models/navigation.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() appName: string;
    @Input() above: boolean;
    @Input() sidebar: boolean;
    @Input() routes: Navigation[];

    constructor() {
    }

    ngOnInit(): void {
    }

}
