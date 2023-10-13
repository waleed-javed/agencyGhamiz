import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionStatementComponent } from './mission-statement.component';

describe('MissionStatementComponent', () => {
  let component: MissionStatementComponent;
  let fixture: ComponentFixture<MissionStatementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionStatementComponent]
    });
    fixture = TestBed.createComponent(MissionStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
