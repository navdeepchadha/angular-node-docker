import { ApiService } from './../../core/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.sass'],
})
export class CharactersListComponent implements OnInit {
  public dropdownLookup = [
    {
      label: 'Name',
      selectedValue: String(),
      placeholder: 'Please select a name',
      type: 'name',
      data: Array(),
    },
    {
      label: 'Hair Color',
      selectedValue: String(),
      placeholder: 'Please choose hair color',
      type: 'hair',
      data: Array(),
    },
    {
      label: 'Race',
      selectedValue: String(),
      placeholder: 'Please select character gender',
      type: 'race',
      data: Array(),
    },
    {
      label: 'Gender',
      selectedValue: String(),
      placeholder: 'Please select character race',
      type: 'gender',
      data: Array(),
    },
  ];

  public characterData = [];
  public selectedFilters: any = {
    name: '',
    hair: '',
    race: '',
    gender: '',
  };

  public role: number = 0;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.apiService.getCharacters().subscribe({
      next: (res) => this.processData(res),
      error: (e) => console.error(e),
    });
  }

  processData(res: any) {
    this.characterData = res.data;
    this.role = res.role;
    res.data.forEach((d: any) => {
      this.dropdownLookup.forEach((x) => {
        let keyName = x.type;
        if (x.data.indexOf(d[keyName]) === -1 && d[keyName] && d[keyName] !== 'NaN') {
          x.data.push(d[keyName]); // Locally storing the data so that there would be no need to call the api again and again.
        }
      });
    });
  }

  filterSelected(ev: string, item: any) {
    this.selectedFilters[item.type] = ev;
    item.selectedValue = ev;
  }

  showResults() {
    return Object.values(this.selectedFilters).some((x) => x);
  }

  resetFilters() {
    this.selectedFilters = {
      name: '',
      hair: '',
      race: '',
      gender: '',
    };
    this.dropdownLookup.forEach((x) => {
      x.selectedValue = '';
    });
  }
}
