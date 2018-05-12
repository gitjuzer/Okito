import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicErrorDialogComponent } from './basic-error-dialog.component';

describe('BasicErrorDialogComponent', () => {
  let component: BasicErrorDialogComponent;
  let fixture: ComponentFixture<BasicErrorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicErrorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
