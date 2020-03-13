import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from './menu-item.interface';
import { UserInfoService } from 'src/app/shared/services/user-info.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  private subscription: Subscription = new Subscription();
  public menu: MenuItem[] = [
    { name: 'Irregular verbs', path: 'irregular', abilityToEscape: false },
    { name: 'Private vocabulary', path: 'vocabulary', abilityToEscape: false },
    { name: 'Additionally', path: 'additionally', abilityToEscape: false, children: [
      { name: 'Separable', path: 'separable', abilityToEscape: false },
      { name: 'Gerund', path: 'gerund', abilityToEscape: false },
      { name: 'Infinitive', path: 'infinitive', abilityToEscape: false },
      { name: 'Phrases', path: 'phrases', abilityToEscape: false },
      { name: 'Stative', path: 'stative', abilityToEscape: false }
    ] },
    { name: 'Guide', path: 'assistance', abilityToEscape: false },
    {name: 'Enter', path: 'enter', abilityToEscape: false, children: [
      {name: 'Login', path: 'login', abilityToEscape: false},
      {name: 'Registry', path: 'register', abilityToEscape: false}
    ]}
  ];
  exitMenuItem: MenuItem = { name: 'Exit', path: 'login', abilityToEscape: true };
  enterMenuItem: MenuItem = {name: 'Enter', path: 'enter', abilityToEscape: false, children: [
    {name: 'Login', path: 'login', abilityToEscape: false},
    {name: 'Registry', path: 'register', abilityToEscape: false}
  ]
};

  public isMenuCollapsed: boolean = true;

  constructor(private auth: AuthService,
              private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    if(localStorage.getItem('auth-token')){
      this.menu.splice(-1, 1, this.exitMenuItem); 
    }
    this.subscription.add(this.userInfoService.getUserInfo().subscribe(info => {
      if(info){
        this.menu.splice(-1, 1, this.exitMenuItem);
      };
    }));
  }

  checkAbilityToEscape(param): void {
    this.isMenuCollapsed = true;
    if(param){
      this.menu.splice(-1, 1, this.enterMenuItem);
      this.auth.logOut();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
