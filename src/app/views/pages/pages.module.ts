import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { LightgalleryModule } from 'lightgallery/angular';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  }, // redirect to
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'works',
    component: WorksComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
];

@NgModule({
  declarations: [
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    WorksComponent,
    ContactComponent
  ],
  exports: [
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    WorksComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    LightgalleryModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
