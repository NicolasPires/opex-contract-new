import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpUserViewComponent } from './op-user-view.component';

describe('OpUserComponent', () => {
  let component: OpUserViewComponent;
  let fixture: ComponentFixture<OpUserViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpUserViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
