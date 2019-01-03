import {Component} from '@angular/core';
import {Hero} from './../hero';


@Component({
    selector: 'app-interpolation',
    template: `
                <h3>Interpolation Example</h3>
                <div>The property that feeds the first interpolation was defined through <b>variable intialization</b><br>
                <i>"{{PropertyBeingDisplayed}}"</i><br>
                <div>The property that feeds the second interpolation was defined through<br>
                <b>1. variable declaration "outside" of the constructor</b>
                <br>
                <b>2. inintialization of property "inside" of the constructor</b>
                <br>
                <i>"{{PropertyBeingDisplayedConstructor}}"</i><br>
                </div>
                <br>
                This interpolated list is being fed by an array:<br>
                <div>
                    The number 1 hero is: "{{no1Hero}}"
                    <ul>
                        <li *ngFor="let hero of heroes">{{hero}}</li>
                    </ul>
                </div>
                This interpolated list is being fed by an array of objects:<br>
                <div>
                    <ul>
                        <li *ngFor="let hero of heroes1">{{hero.name}}</li>
                    </ul>
                </div>
                <br>
                *ngIf example:
                <div style="font-style: italic;">
                    <p *ngIf="heroes1.length > 2" >There are more than two heroes</p>
                </div>
    `
})

export class InterpolationComponent {
    PropertyBeingDisplayed = 'Testtext';
    PropertyBeingDisplayedConstructor: string;

    heroes = ['Hero 1', 'Hero 2', 'Hero 3'];
    no1Hero = this.heroes[0];

    heroes1 = [
        new Hero(1, 'Hero A'),
        new Hero(2, 'Hero B'),
        new Hero(3, 'Hero C')
    ];


    constructor() {
        this.PropertyBeingDisplayedConstructor = 'TestText 2';
    }


}
