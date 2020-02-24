import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item.interface';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  menu: MenuItem[] = [
    { name: 'Irregular verbs', path: 'irregular' },
    { name: 'Private vocabulary', path: 'vocabulary' },
    { name: 'Additionally', path: 'additionally', children: [
      { name: 'Separable', path: 'separable' },
      { name: 'Gerund', path: 'gerund' },
      { name: 'Infinitive', path: 'infinitive' },
      { name: 'Phrases', path: 'phrases' },
      { name: 'Stative', path: 'stative' }
    ] },
    { name: 'Guide', path: 'assistance' }
  ];

  public isMenuCollapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
