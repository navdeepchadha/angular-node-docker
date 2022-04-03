import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.sass'],
})
export class DropdownFilterComponent implements OnInit {
  @Input() labelName: string = '';
  @Input() selectedValue: string = '';
  @Input() placeholder: string = '';
  @Input() dropItems: any = [];

  @Output() OnDropDownSelection: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onItemSelection(ev: string) {
    this.selectedValue = ev;
    this.OnDropDownSelection.emit(ev);
  }
}
