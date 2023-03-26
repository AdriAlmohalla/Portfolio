import { Component } from '@angular/core';
import { faUser, faLaptopCode, faBuildingColumns, faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent {
  faUser = faUser
  faLaptopCode = faLaptopCode
  faBuildingColumns = faBuildingColumns
  faBriefcase = faBriefcase
}
