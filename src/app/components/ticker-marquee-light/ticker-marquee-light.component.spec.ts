import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerMarqueeLightComponent } from './ticker-marquee-light.component';

describe('TickerMarqueeLightComponent', () => {
  let component: TickerMarqueeLightComponent;
  let fixture: ComponentFixture<TickerMarqueeLightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TickerMarqueeLightComponent]
    });
    fixture = TestBed.createComponent(TickerMarqueeLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
