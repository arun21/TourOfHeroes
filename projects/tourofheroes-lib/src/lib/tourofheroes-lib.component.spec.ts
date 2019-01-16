import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourofheroesLibComponent } from './tourofheroes-lib.component';

describe('TourofheroesLibComponent', () => {
  let component: TourofheroesLibComponent;
  let fixture: ComponentFixture<TourofheroesLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourofheroesLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourofheroesLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
