import { Injectable } from '@angular/core';
import { Experience } from '../interfaces/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experience: Experience[];

  constructor() {
    this.experience = [
      {
        id: 0,
        companyName: 'SRC Accelerator & Startup Studio',
        roleName: 'Frontend Developer',
        startDate: 'March 2021',
        endDate: 'PRESENT',
        summery: 'SRC is a startup and an accelerator to work with international companies.',
        details: [
          'Implemented fast and high-quality Nurse Daisy and We Care websites using React and Angular.',
          'Analyzed designs and increased website performance up to 60% to meet specific requirements, such as quick loading with particular layouts and increasing user accessibility.',
          'Collaborated with teammates and researched customer needs for choosing the best technologies.',
          'Enhanced the code quality of given projects and fixed significant issues based on customer needs.',
          'Trained new developers of the team to develop ongoing projects and maintain developed projects.'
        ],
        link: 'http://srcaccelerator.ir/en/'
      },
      {
        id: 1,
        companyName: 'Ariosoren',
        roleName: 'Frontend Developer',
        startDate: 'May 2020',
        endDate: 'July 2022',
        summery: 'Ariosoren is a company that manufactures Siebel electronic shooting systems.',
        details: [
          'Completed full redesign of existing Windows application system (Match Manager) into an Angular Electron App to boost the system efficiency.',
          "Implemented and developed HUB to record shooters' scores in multiple shooting sports in multiple locations at the same time.",
          "Managed full-cycle design tasks, handling all phases from developing to deploying while maintaining guideline."
        ],
        link: 'https://ariosoren.com/en/'
      },
      {
        id: 1,
        companyName: 'Faranegar',
        roleName: 'Frontend Developer',
        startDate: 'November 2017',
        endDate: 'May 2020',
        summery: 'Faranegar is an international travel agency. ',
        details: [
          'Designed and customized Onlinebooking website based on customers’ needs and desires.',
          "Completed full redesign of existing website with AngularJs to Angular 8 to improve navigation, enhance visuals and strengthen search engine rankings",
          "Checked and managed ticketing system in order to solve clients’ issues and ameliorate their satisfaction.",
          "Crafted SEO strategy and intuitive interface for the site to achieve prominent ranking across search engines.",
          "Reviewed code to validate structures and refactored the old-technology designs using modern tools for maintainability, functionality and optimization.",
        ],
        link: 'https://www.faranegar.com/en'
      }
    ]
  }

  getExperience() {
    return this.experience;
  }
}
