import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpUserDeleteComponent } from './op-user-delete.component';

describe('OpUserDeleteComponent', () => {
  let component: OpUserDeleteComponent;
  let fixture: ComponentFixture<OpUserDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpUserDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpUserDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
