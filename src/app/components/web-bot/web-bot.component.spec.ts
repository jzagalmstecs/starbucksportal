import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebBotComponent } from './web-bot.component';

describe('WebBotComponent', () => {
  let component: WebBotComponent;
  let fixture: ComponentFixture<WebBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
