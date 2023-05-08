import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaEventsComponent } from './media-events.component';

describe('MediaEventsComponent', () => {
  let component: MediaEventsComponent;
  let fixture: ComponentFixture<MediaEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
