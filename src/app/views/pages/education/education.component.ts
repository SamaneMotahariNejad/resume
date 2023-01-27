import { Component } from '@angular/core';
import { Certification } from 'src/app/core/interfaces/certification';
import { Education } from 'src/app/core/interfaces/education';
import { EducationService } from 'src/app/core/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  education: Education[] = [];
  certification: Certification[] = [];

  constructor(private educationSV: EducationService,
    private certificationSV: EducationService
  ) {
  }

  ngOnInit(): void {
    this.getEducation();
    this.getCertification();
  }

  getEducation() {
    this.education = this.educationSV.getExperience();
  }

  getCertification() {
    this.certification = this.certificationSV.getCertification();
  }

}
