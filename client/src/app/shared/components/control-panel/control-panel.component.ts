import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.less']
})
export class ControlPanelComponent implements OnInit {
  
  category = [{value: 'date', type: 'date'}, {value: 'name', type: 'alphabet'}];
  constructor() { }

  ngOnInit(): void {
  }

}
