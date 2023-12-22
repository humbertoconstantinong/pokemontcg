import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckCreateComponent } from './deck-create.component';

describe('DeckCreateComponent', () => {
  let component: DeckCreateComponent;
  let fixture: ComponentFixture<DeckCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeckCreateComponent]
    });
    fixture = TestBed.createComponent(DeckCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
