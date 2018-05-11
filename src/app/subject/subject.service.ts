import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject } from './subject';
import { Lesson } from './lesson';
import { Category } from './category';

@Injectable()
export class SubjectService {

  constructor(private http: HttpClient) { }

  getSubjects(): Array<Subject> {
    const array = new Array<Subject>();

    let subject = new Subject('Matematika', [
      new Category('Algebra', [
        new Lesson('Egyenletek'),
        new Lesson('Törtek')
      ]),
      new Category('Geometria', [
        new Lesson('Pitagorasz-tétel')
      ])
    ]);
    subject.imageUrl = 'https://findicons.com/files/icons/1676/primo/128/button_blue_stop.png';
    array.push(subject);

    subject = new Subject('Történelem', [
      new Category('Ókor', [
        new Lesson('Az ókori Görögország'),
        new Lesson('Az ókori Róma')
      ]),
      new Category('Középkor', [
        new Lesson('A feudális Európa')
      ])
    ]);
    subject.imageUrl = 'https://cdn2.iconfinder.com/data/icons/media-player-blue-round/512/Play-01-512.png';
    array.push(subject);

    return array;
  }
}
