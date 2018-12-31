import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampledirectivesComponent } from './sampledirectives.component';

describe('SampledirectivesComponent', () => {
  let component: SampledirectivesComponent;
  let fixture: ComponentFixture<SampledirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampledirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampledirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
