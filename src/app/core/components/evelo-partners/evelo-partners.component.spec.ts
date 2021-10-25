import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveloPartnersComponent } from './evelo-partners.component';

describe('EveloPartnersComponent', () => {
  let component: EveloPartnersComponent;
  let fixture: ComponentFixture<EveloPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveloPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveloPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
