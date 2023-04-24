import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  @Output() languageChanged = new EventEmitter<string>();
  currentLanguage = 'ES';

  constructor() { }

  ngOnInit(): void {
  }

  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'ES' ? 'EN' : 'ES';
    this.languageChanged.emit(this.currentLanguage);
  }
}