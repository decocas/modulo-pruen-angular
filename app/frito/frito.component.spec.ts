import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FritoComponent } from './frito.component';

describe('FritoComponent', () => {
  let component: FritoComponent;
  let fixture: ComponentFixture<FritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
