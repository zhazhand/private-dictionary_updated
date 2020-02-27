import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { GetDefaultListService } from 'src/app/shared/services/get-default-list.service';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.less']
})
export class VocabularyComponent implements OnInit, OnDestroy {
  exportList: any;
  exportChoice: boolean = false;
  exportHideLoader: boolean = true;
  exportLinkName: string = '/vocabulary';
  exportSearch;
  exportParamSearch: string = 'name';
  exportSelectedType: string = 'name';
  exportThName: string = 'word';
  fileName: string = 'vocabulary.json';
  private subscription: Subscription = new Subscription();


  constructor(private downloadDefault: GetDefaultListService) { }

  ngOnInit(): void {
    this.exportList = [];
  }

  addDefault() {
    this.exportHideLoader = false;
    this.subscription.add(
    this.downloadDefault.getList(this.fileName)
    .subscribe(response => this.exportList = response))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
