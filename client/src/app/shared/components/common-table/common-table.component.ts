import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.less']
})
export class CommonTableComponent implements OnInit {

  @Input() list: any;
  @Input() choice: boolean;
  @Input() hideLoader: boolean;
  @Input() linkName: string;
  @Input() search: string; //need to check
  @Input() paramSearch: string;
  @Input() selectedType: string;
  @Input() thName: string;

  constructor() {
  }

  ngOnInit() {
  }

  @Output() downloadDf = new EventEmitter<string>();

  addDefault() {
    this.downloadDf.emit();
  }

  @Output() changeRemovable = new EventEmitter<any>();

  saveChanges(item, rmabl: boolean) {
    item.removable = rmabl;
    this.changeRemovable.emit(item);
  }

}
