import { Component } from '@angular/core';
import { Experience } from 'src/app/core/interfaces/experience';
import { ExperienceService } from 'src/app/core/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experience: Experience[] = [];

  constructor(private experienceSV: ExperienceService) {
  }

  ngOnInit(): void {
    this.getExperience();
  }

  getExperience() {
    this.experience = this.experienceSV.getExperience();
  }
}
