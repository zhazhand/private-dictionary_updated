import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  links = [
    {url: '/irregular', name: 'Irregular verbs'},
    {url: '/vocabulary', name: 'Private vocabulary'},
    {
      url: '/additionally', name: 'Additionally', children: [
        {url: '/separable', name: 'Separable'},
        {url: '/gerund', name: 'Gerund'},
        {url: '/infinitive', name: 'Infinitive'},
        {url: '/phrases', name: 'Phrases'},
      ]
    },
    {url: '/assistance', name: 'Guide'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
