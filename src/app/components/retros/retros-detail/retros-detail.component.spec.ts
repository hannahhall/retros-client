import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrosDetailComponent } from './retros-detail.component';

describe('RetrosDetailComponent', () => {
  let component: RetrosDetailComponent;
  let fixture: ComponentFixture<RetrosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrosDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
