import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonUtnComponent } from './boton-utn.component';

describe('BotonUtnComponent', () => {
  let component: BotonUtnComponent;
  let fixture: ComponentFixture<BotonUtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonUtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonUtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
