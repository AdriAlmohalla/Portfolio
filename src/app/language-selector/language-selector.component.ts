import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  @Output() languageChanged = new EventEmitter<string>();
  @Input() selectedLanguage = 'ES';
  currentLanguage = 'ES';

  constructor() { }

  ngOnInit(): void {
  }

  toggleLanguage(): void {
    this.selectedLanguage = this.selectedLanguage === 'ES' ? 'EN' : 'ES';
    this.languageChanged.emit(this.selectedLanguage);
  }
}