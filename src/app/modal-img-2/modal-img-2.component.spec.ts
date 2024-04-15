import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImg2Component } from './modal-img-2.component';

describe('ModalImg2Component', () => {
  let component: ModalImg2Component;
  let fixture: ComponentFixture<ModalImg2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalImg2Component]
    });
    fixture = TestBed.createComponent(ModalImg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
