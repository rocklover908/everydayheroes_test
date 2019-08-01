import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoignageItemComponent } from './temoignage-item.component';

describe('TemoignageItemComponent', () => {
  let component: TemoignageItemComponent;
  let fixture: ComponentFixture<TemoignageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemoignageItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemoignageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
