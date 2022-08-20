import { Component, VERSION } from '@angular/core';
import { PeopleService } from './people.service';
import { Person } from './person';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  people: Person[];
  display: number = 0;
  name: string;
  surname: string;
  age: number;
  gender: string;
  nationality: string;
  etnicity?: string;
  languages: string[];

  constructor(private peopleService: PeopleService) {
    this.people = this.peopleService.getPeople();
  }

  previousPerson() {
    return this.people[--this.display];
  }

  nextPerson() {
    return this.people[++this.display];
  }

  addPerson() {
    const person: Person = {
      id: '00000000A',
      name: this.name,
      surname: this.surname,
      age: this.age,
      gender: this.gender,
      nationality: this.nationality,
      etnicity: this.etnicity,
      languages: this.languages,
    };
    this.people.push(person);
  }
}
