import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactReativeComponent } from './contact-reative.component';

describe('ContactReativeComponent', () => {
  let component: ContactReativeComponent;
  let fixture: ComponentFixture<ContactReativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactReativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactReativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
