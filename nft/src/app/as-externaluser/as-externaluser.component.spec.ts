import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsExternaluserComponent } from './as-externaluser.component';

describe('AsExternaluserComponent', () => {
  let component: AsExternaluserComponent;
  let fixture: ComponentFixture<AsExternaluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsExternaluserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsExternaluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
