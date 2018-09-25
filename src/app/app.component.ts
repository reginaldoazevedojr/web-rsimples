import { Component } from '@angular/core';
import { ThemeService } from './service/theme.service';
import { LoadingService } from './service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public themeSvc: ThemeService, public loadingSvc: LoadingService) { }
}
