
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinantialControlComponent } from './finantial-control.component';
import { MaterialModule } from '../../../material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FinantialControlComponent', () => {
  let component: FinantialControlComponent;
  let fixture: ComponentFixture<FinantialControlComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MaterialModule
      ],
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
