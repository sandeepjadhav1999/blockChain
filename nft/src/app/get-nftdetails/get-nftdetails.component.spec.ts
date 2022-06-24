import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNftdetailsComponent } from './get-nftdetails.component';

describe('GetNftdetailsComponent', () => {
  let component: GetNftdetailsComponent;
  let fixture: ComponentFixture<GetNftdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNftdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetNftdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
