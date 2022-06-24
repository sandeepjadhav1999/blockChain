import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNFTsComponent } from './all-nfts.component';

describe('AllNFTsComponent', () => {
  let component: AllNFTsComponent;
  let fixture: ComponentFixture<AllNFTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNFTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllNFTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
