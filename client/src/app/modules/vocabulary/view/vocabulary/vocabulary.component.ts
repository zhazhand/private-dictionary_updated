import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { GetDefaultListService } from 'src/app/shared/services/get-default-list.service';
import { CommonCRUDService } from 'src/app/shared/services/common-crud.service';
import { DefaultListItem } from 'src/app/shared/interfaces/default-list-item.interface';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.less']
})
export class VocabularyComponent implements OnInit, OnDestroy {
  public exportAbilityPush: boolean = false;
  public exportList: DefaultListItem[];
  public exportChoice: boolean = false;
  public exportFollowTo: string = '/vocabulary/new';
  public exportHideLoader: boolean = true;
  public exportLinkName: string = '/vocabulary';
  public exportSearchWord: string;
  public exportParamSearch: string = 'name';
  public exportSelectedType: string = 'name';
  public exportThName: string = 'word';
  public fileName: string = 'vocabulary.json';
  private subscription: Subscription = new Subscription();


  constructor(private vocabularyService: CommonCRUDService,
    private downloadDefault: GetDefaultListService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.subscription.add(this.vocabularyService.fetch(this.exportLinkName)
      .subscribe(response => this.exportList = response));
    }

    onSearchWord(model: string) {
      this.exportSearchWord = model;
    }
  
    changeOrderBy(model: string) {
      this.exportSelectedType = model;
    }
  
    addDefault() {
    this.exportHideLoader = false;
    this.subscription.add(
      this.downloadDefault.getList(this.fileName)
      .subscribe(response => {
          this.subscription.add(this.vocabularyService.createCollection(this.exportLinkName, response)
            .subscribe(() => this.getList()))
        }
      ))
  }

  deleteList(par?: boolean) {
    par = confirm(`Are You shure \nthat \nYou want to remove this list?`)
    this.exportHideLoader = true;
    if (this.exportChoice || par) {
      if (par) {
        this.subscription.add(
          this.vocabularyService.delete(this.exportLinkName, '5delete0all0list00000000')
          .subscribe(
            /* response => MaterialService.toast(response.message),
            error => MaterialService.toast(error.error.message), */
            () => {
              this.exportChoice = false;
              this.getList();this.exportHideLoader = true;
            }
          )
        )
      } else {
        this.subscription.add(
          this.vocabularyService.delete(this.exportLinkName, '5delete0all0list0select0')
          .subscribe(
            /* response => MaterialService.toast(response.message),
            error => MaterialService.toast(error.error.message), */
            () => {
              this.exportChoice = false;
              this.getList();this.exportHideLoader = true;
            }
          )
        )
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
