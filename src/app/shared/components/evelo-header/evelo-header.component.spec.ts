import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveloHeaderComponent } from './evelo-header.component';

describe('EveloHeaderComponent', () => {
  let component: EveloHeaderComponent;
  let fixture: ComponentFixture<EveloHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveloHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveloHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
