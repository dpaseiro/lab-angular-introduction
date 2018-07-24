import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbacomponentComponent } from './nbacomponent.component';

describe('NbacomponentComponent', () => {
  let component: NbacomponentComponent;
  let fixture: ComponentFixture<NbacomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbacomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbacomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
