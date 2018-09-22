import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { MaterialModule } from '../../material-module';
import { MainRoutingModule } from './main-routing.module';
import { FinantialControlComponent } from './finantial-control/finantial-control.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        MainRoutingModule,
        BrowserAnimationsModule,
        CommonModule,
        AppRoutingModule,
        MainRoutingModule
      ],
      declarations: [ MainComponent, DashboardComponent, FinantialControlComponent ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
