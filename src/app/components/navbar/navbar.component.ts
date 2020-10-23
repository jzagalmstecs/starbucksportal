import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    urlLogo = 'https://www.iconninja.com/files/771/716/939/starbucks-icon.svg';

    constructor() { }

    ngOnInit(): void {
    }

}
