import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithoutEmojisComponent } from './input-without-emojis.component';

describe('InputWithoutEmojisComponent', () => {
  let component: InputWithoutEmojisComponent;
  let fixture: ComponentFixture<InputWithoutEmojisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputWithoutEmojisComponent]
    });
    fixture = TestBed.createComponent(InputWithoutEmojisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
