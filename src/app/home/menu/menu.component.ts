import { Component, OnInit } from '@angular/core';
import { Subject } from '../../subject/subject';
import { SubjectService } from '../../subject/subject.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],

  animations: [
    trigger('categories', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
          ]))
        ]), { optional: true })
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {

  private subjects: Array<Subject> = [];
  private selected: {
    subject: number,
    category: number,
    lesson: number
  };

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.subjects = this.subjectService.getSubjects();
    this.selected = {
      subject: null,
      category: null,
      lesson: null
    };
    console.log(this.subjects);
  }
}
