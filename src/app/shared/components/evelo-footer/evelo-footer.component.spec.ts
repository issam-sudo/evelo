import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveloFooterComponent } from './evelo-footer.component';

describe('EveloFooterComponent', () => {
  let component: EveloFooterComponent;
  let fixture: ComponentFixture<EveloFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveloFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveloFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
