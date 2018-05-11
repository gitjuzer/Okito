import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../subject/subject.service';
import { Subject } from '../../subject/subject';

export enum PanelState {
  SUBJECT,
  CATEGORY,
  LESSON,
  EDITLESSON
}

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  subjects: Array<Subject>;

  header: string;

  selected: {
    subject: number,
    category: number,
    lesson: number
  };

  public PanelState = PanelState;
  panelState: PanelState;

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.subjects = this.subjectService.getSubjects();
    this.panelState = PanelState.SUBJECT;
    this.selected = {
      subject: null,
      category: null,
      lesson: null
    };
    this.header = 'Tárgyak';
  }

  setPanelState(state: PanelState, index: number) {
    this.panelState = state;
    switch (state) {
      case PanelState.CATEGORY:
        this.selected.subject = index;
        this.header = this.subjects[this.selected.subject].name;
        break;

      case PanelState.LESSON:
        this.selected.category = index;
        this.header = this.subjects[this.selected.subject].Categories[this.selected.category].name;
        break;

      case PanelState.EDITLESSON:
        this.selected.lesson = index;
        this.header = this.subjects[this.selected.subject].Categories[this.selected.category].Lessons[this.selected.lesson].name;
        break;
    }
  }

  goBack() {
    this.panelState -= 1;
    switch (this.panelState) {
      case PanelState.SUBJECT:
        this.header = 'Tárgyak';
        break;

      case PanelState.CATEGORY:
        this.header = this.subjects[this.selected.subject].name;
        break;

      case PanelState.LESSON:
        this.header = this.subjects[this.selected.subject].Categories[this.selected.category].name;
        break;
    }
  }
}
