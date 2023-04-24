import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '10-portfolio';
  selectedLanguage = 'ES';

  constructor(private router: Router) { }

  onLanguageChanged(newLanguage: string): void {
    this.selectedLanguage = newLanguage;
    this.router.navigate([newLanguage === 'ES' ? '/inicio' : '/home']);
  }
}
