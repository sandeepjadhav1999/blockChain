import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftDetails2Component } from './nft-details2.component';

describe('NftDetails2Component', () => {
  let component: NftDetails2Component;
  let fixture: ComponentFixture<NftDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftDetails2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
