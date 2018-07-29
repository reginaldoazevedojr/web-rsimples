
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinantialControlComponent } from './finantial-control.component';

describe('FinantialControlComponent', () => {
  let component: FinantialControlComponent;
  let fixture: ComponentFixture<FinantialControlComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FinantialControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinantialControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
