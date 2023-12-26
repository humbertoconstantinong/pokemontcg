import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDeckComponent } from './one-deck.component';

describe('OneDeckComponent', () => {
  let component: OneDeckComponent;
  let fixture: ComponentFixture<OneDeckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneDeckComponent]
    });
    fixture = TestBed.createComponent(OneDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
