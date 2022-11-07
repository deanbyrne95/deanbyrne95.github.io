import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    title: string;

    constructor(public route: ActivatedRoute) {
        this.route.data
            .subscribe(data => {
                this.title = data['title'];
            })
    }

    ngOnInit(): void {
    }

}
