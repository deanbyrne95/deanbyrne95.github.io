import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    @Input() appVersion: string;
    @Input() materialVersion: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
