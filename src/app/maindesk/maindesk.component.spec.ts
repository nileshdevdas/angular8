import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindeskComponent } from './maindesk.component';

describe('MaindeskComponent', () => {
  let component: MaindeskComponent;
  let fixture: ComponentFixture<MaindeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaindeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
