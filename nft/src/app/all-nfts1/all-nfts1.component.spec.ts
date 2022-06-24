import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNfts1Component } from './all-nfts1.component';

describe('AllNfts1Component', () => {
  let component: AllNfts1Component;
  let fixture: ComponentFixture<AllNfts1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNfts1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllNfts1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
