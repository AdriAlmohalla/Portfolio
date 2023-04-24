import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '10-portfolio';
  selectedLanguage = 'ES';

  constructor(private router: Router, private route: ActivatedRoute) {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    this.selectedLanguage = savedLanguage ? savedLanguage : 'ES';
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateLanguageBasedOnRoute();
      }
    });
  }

  onLanguageChanged(newLanguage: string): void {
    this.selectedLanguage = newLanguage;
    localStorage.setItem('selectedLanguage', newLanguage);
    this.router.navigate([newLanguage === 'ES' ? '/inicio' : '/home']);
  }

  updateLanguageBasedOnRoute(): void {
    const englishRoutes = ['/home', '/projects', '/resume'];
    if (englishRoutes.includes(this.router.url)) {
      this.selectedLanguage = 'EN';
      localStorage.setItem('selectedLanguage', 'EN');
    } else {
      this.selectedLanguage = 'ES';
      localStorage.setItem('selectedLanguage', 'ES');
    }
  }
}
