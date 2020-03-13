import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DefaultListItem } from '../../interfaces/default-list-item.interface';
import { SelectCategory } from '../../interfaces/select-category.interface';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.less']
})
export class ControlPanelComponent implements OnInit {
  
  @Input() blockTitle: string;
  @Input() list: DefaultListItem[];

  @Input() followTo: string;
  @Input() choice: boolean;
  @Input() abilityPush: boolean;

  public searchWord: string;
  public category: SelectCategory[] = [{value: 'date', type: 'date'}, {value: 'name', type: 'alphabet'}];
  public selectedCategory: string = 'name';


  @Output() takeWord = new EventEmitter<string>();

  onFieldChange(model: string) {
    this.searchWord = model;
    this.takeWord.emit(model);
  }

  @Output() takeType = new EventEmitter<string>();
  onSelect(model: string) {
    this.selectedCategory = model;
    this.takeType.emit(model);
  }

  @Output() delList = new EventEmitter<string>();
  deleteList() {
    this.delList.emit();
  }

  ngOnInit() {
  }

  clearField() {
    this.onFieldChange(null)
  }

}
