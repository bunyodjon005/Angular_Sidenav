import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImg1Component } from './modal-img-1.component';

describe('ModalImg1Component', () => {
  let component: ModalImg1Component;
  let fixture: ComponentFixture<ModalImg1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalImg1Component]
    });
    fixture = TestBed.createComponent(ModalImg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
