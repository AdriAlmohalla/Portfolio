import { Component } from '@angular/core';
import { faUser, faLaptopCode, faBuildingColumns, faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  faUser = faUser
  faLaptopCode = faLaptopCode
  faBuildingColumns = faBuildingColumns
  faBriefcase = faBriefcase
}
