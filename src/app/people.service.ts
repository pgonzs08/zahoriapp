import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  subrey: Person = {
    id: '00000000A',
    name: 'Felipe Juan Pablo Alfonso',
    surname: 'de Todos los Santos de Borbón y Grecia',
    age: 54,
    gender: 'M',
    nationality: 'Spain',
    etnicity: 'Madrileño',
    images: [
      'https://www.casareal.es/ES/Documents/fotos_oficiales/1_rey_gala.jpg',
    ],
    languages: ['Spanish', 'English', 'French', 'Catalán'],
  };
  subreina: Person = {
    id: '00000001B',
    name: 'Leticia',
    surname: 'Ortiz Rocasolano',
    age: 49,
    gender: 'F',
    nationality: 'Spain',
    etnicity: 'Asturian',
    images: [
      'https://www.casareal.es/ES/Documents/fotos_oficiales/2_reina_gala.jpg',
    ],
    languages: ['Spanish'],
  };
  reina: Person = {
    id: '00000002C',
    name: 'CALA MAIENTIA AVGSTA CONSTANTINA ESUTACHIA ANTONIA APA ALBA NEZUKENSIS MOMENSIS SANCTI ABADIS ANTONII SANCTORVMQUE OMNIVM SOLA REGINA ASTVRICA LEGIONIS CASTELLAE ET ARAGONIS, SUMMA IMPERATRIX ROMANORVM GERMANORUMQVE AMBAE INDIAE SINICAE AMERICAE ET EMERITA IMPERATRIX AGLOSAXONORVM PACENSIS',
    surname: 'RES SACRA ET SECRETISSIMA',
    age: 2,
    gender: 'F',
    nationality: 'Spain',
    etnicity: 'Pax Augusta',
    images: [
      'https://album.mediaset.es/eimg/2017/09/23/6jIU5ylwJj6QRN87mvzaJ6.jpg?w=1200&h=900',
    ],
    languages: ['All of them'],
  };
  people: Person[] = [this.subrey, this.subreina, this.reina];

  constructor() {}

  getPeople() {
    return this.people;
  }
}
