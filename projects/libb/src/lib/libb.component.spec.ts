import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibbComponent } from './libb.component';

describe('LibbComponent', () => {
  let component: LibbComponent;
  let fixture: ComponentFixture<LibbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibbComponent]
    });
    fixture = TestBed.createComponent(LibbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
