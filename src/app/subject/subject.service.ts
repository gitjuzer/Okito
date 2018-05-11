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
    array.push(subject);

    return array;
  }
}
