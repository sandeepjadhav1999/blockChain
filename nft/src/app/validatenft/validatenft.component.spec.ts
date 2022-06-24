import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatenftComponent } from './validatenft.component';

describe('ValidatenftComponent', () => {
  let component: ValidatenftComponent;
  let fixture: ComponentFixture<ValidatenftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatenftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatenftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
