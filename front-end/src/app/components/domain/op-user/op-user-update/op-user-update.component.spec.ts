import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpUserUpdateComponent } from './op-user-update.component';

describe('OpUserUpdateComponent', () => {
  let component: OpUserUpdateComponent;
  let fixture: ComponentFixture<OpUserUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpUserUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpUserUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
