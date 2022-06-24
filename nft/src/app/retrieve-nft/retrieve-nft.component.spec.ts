import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveNFTComponent } from './retrieve-nft.component';

describe('RetrieveNFTComponent', () => {
  let component: RetrieveNFTComponent;
  let fixture: ComponentFixture<RetrieveNFTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveNFTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrieveNFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
