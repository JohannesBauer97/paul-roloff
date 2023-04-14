import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private renderer: Renderer2) {
    }

    ngOnInit(): void {
        const randomNumber = Math.floor(Math.random() * 20);
        const backgroundImagePath = `/assets/backgrounds/background-${randomNumber}.png`;
        this.renderer.setStyle(document.body, 'background-image', `url("${backgroundImagePath}")`);
    }
}
