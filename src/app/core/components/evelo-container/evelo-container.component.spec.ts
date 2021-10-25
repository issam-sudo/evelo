import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveloContainerComponent } from './evelo-container.component';

describe('EveloContainerComponent', () => {
  let component: EveloContainerComponent;
  let fixture: ComponentFixture<EveloContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveloContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveloContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
