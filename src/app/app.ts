import {Component, bootstrap, FORM_DIRECTIVES, NgFor, NgIf, NgClass} from 'angular2/angular2';

class Hero {
  id:number;
  name:string;
}

@Component({
  selector: 'my-app',
  styles: [`
  .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
  .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
  .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
  .heroes .badge {
    font-size: small;
    color: white;
    padding: 0.1em 0.7em;
    background-color: #369;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -1px;
  }
  .selected { background-color: #EEE; color: #369; }
  `],
  template: `
  <h1>{{title}}</h1>
  <h2>My heroes</h2>
  <ul class="heroes">
  <li *ng-for="#hero of heroes" [ng-class]="getSelectedClass(hero)" (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}</a>
  </li>
  </ul>
  <div *ng-if="selectedHero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <div><input [(ng-model)]="selectedHero.name" placeholder="name"></div>
    </div>
  </div>
  `,
  directives: [FORM_DIRECTIVES, NgFor, NgIf, NgClass]
})


class AppComponent {
  public title = 'Tour of Heroes!';
  public heroes = HEROES;
  public selectedHero:Hero;
  public hero:Hero = {
    id: 1,
    name: 'Windstorm'
  };

  public onSelect(hero:Hero) {
    this.selectedHero = hero;
  }

  public getSelectedClass(hero:Hero) {
    return {'selected': hero === this.selectedHero};
  }
}

var HEROES:Hero[] = [
  {"id": 11, "name": "Mr. Nice"},
  {"id": 12, "name": "Narco"},
  {"id": 13, "name": "Bombasto"},
  {"id": 14, "name": "Celeritas"},
  {"id": 15, "name": "Magneta"},
  {"id": 16, "name": "RubberMan"},
  {"id": 17, "name": "Dynama"},
  {"id": 18, "name": "Dr IQ"},
  {"id": 19, "name": "Magma"},
  {"id": 20, "name": "Tornado"}
];

bootstrap(AppComponent);
