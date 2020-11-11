import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  constructor() {
  }

  selectedItem: any;
  selectedIndex = -1;

  panelExpanded = false;

  items: any[] = [
    {
      key: 'label1',
      value: 'label 1'
    },
    {
      key: 'label 2',
      value: 'label 2'
    },
    {
      key: 'label 3',
      value: 'label 3'
    },
    {
      key: 'label 4',
      value: 'label 4'
    }
  ];

  private idBase = '';

  searchTerm = '';

  ngOnInit(): void {
    this.idBase = this.makeId(5);
  }

  getId(complement: string | number): string {
    return `${this.idBase}-${complement}`;
  }

  onSelect(item: any, index: number): void {
    this.selectedItem = item;
    this.selectedIndex = index;
  }

  get activeItemId(): string {
    return `${this.idBase}-${this.selectedIndex}`;
  }

  private makeId(length = 10) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  onModelChanges(searchValue: string): void {

    if (searchValue === '') {
      this.panelExpanded = false;
      return;
    }

    this.panelExpanded = true;
  }

}
