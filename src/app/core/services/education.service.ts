import { Injectable } from '@angular/core';
import { Certification } from '../interfaces/certification';
import { Education } from '../interfaces/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private education: Education[];
  certification: Certification[] = [];

  constructor() {
    this.education = [
      {
        id: 0,
        universityName: 'Islamic Azad University of Central',
        degreeName: 'Bachelor of Computer Software Engineering',
        startDate: 'September 2012',
        endDate: 'May 2016'
      }
    ]

    this.certification = [
      {
        id: 0,
        certificationName: 'Web Design Foundation'
      },
      {
        id: 1,
        certificationName: 'Design Methodology Vol 1 (Dreamweaver, CSS, Fireworks)'
      },
      {
        id: 2,
        certificationName: 'Design Methodology Vol 3 (JavaScript, Methodology, XML)'
      },
      {
        id: 3,
        certificationName: 'JQuery'
      },
    ]
  }

  getExperience() {
    return this.education;
  }

  getCertification() {
    return this.certification;
  }
}
