import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerMarqueeComponent } from './ticker-marquee.component';

describe('TickerMarqueeComponent', () => {
  let component: TickerMarqueeComponent;
  let fixture: ComponentFixture<TickerMarqueeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TickerMarqueeComponent]
    });
    fixture = TestBed.createComponent(TickerMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
