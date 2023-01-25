import { Injectable } from '@angular/core';
import { imageGallary } from '../interfaces/works';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  private works: imageGallary[];

  constructor() {
    this.works = [
      {
        id: 1,
        name: 'WeCare',
        nameFilter: 'SRC Company',
        currentPicture: 0,
        path: [
          {
            alt: '',
            src: './assets/images/works/darwin/darwin0.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin0.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin1.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin1.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin2.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin2.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin3.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin3.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin4.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin4.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin5.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin5.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin6.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin6.jpg'
          }
        ]
      },
      {
        id: 2,
        name: 'Nurse Daisy',
        nameFilter: 'SRC Company',
        currentPicture: 0,
        path: [
          {
            alt: '',
            src: './assets/images/works/darwin/darwin0.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin0.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin1.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin1.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin2.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin2.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin3.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin3.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin4.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin4.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin5.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin5.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin6.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin6.jpg'
          }
        ]
      },
      {
        id: 3,
        name: 'Ariosoren',
        nameFilter: 'Ariosoren Company',
        currentPicture: 0,
        path: [
          {
            alt: '',
            src: './assets/images/works/darwin/darwin0.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin0.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin1.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin1.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin2.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin2.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin3.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin3.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin4.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin4.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin5.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin5.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin6.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin6.jpg'
          }
        ]
      },
      {
        id: 4,
        name: 'Faranegar',
        nameFilter: 'Faranegar Company',
        currentPicture: 0,
        path: [
          {
            alt: '',
            src: './assets/images/works/new-online/1.jpg',
            subHtml: '',
            thumb: './assets/images/works/new-online/1.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/new-online/2.jpg',
            subHtml: '',
            thumb: './assets/images/works/new-online/2.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/new-online/3.jpg',
            subHtml: '',
            thumb: './assets/images/works/new-online/3.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/new-online/4.jpg',
            subHtml: '',
            thumb: './assets/images/works/new-online/4.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/new-online/5.jpg',
            subHtml: '',
            thumb: './assets/images/works/new-online/5.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/new-online/6.jpg',
            subHtml: '',
            thumb: './assets/images/works/new-online/6.jpg'
          }
        ]
      },
      {
        id: 5,
        name: 'Faranegar',
        nameFilter: 'Faranegar Company',
        currentPicture: 0,
        path: [
          {
            alt: '',
            src: './assets/images/works/leopard/1.jpg',
            subHtml: '',
            thumb: './assets/images/works/leopard/1.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/leopard/2.jpg',
            subHtml: '',
            thumb: './assets/images/works/leopard/2.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/leopard/3.jpg',
            subHtml: '',
            thumb: './assets/images/works/leopard/3.jpg'
          }
        ]
      },
      {
        id: 6,
        name: 'Faranegar',
        nameFilter: 'Faranegar Company',
        currentPicture: 0,
        path: [
          {
            alt: '',
            src: './assets/images/works/omanair/1.jpg',
            subHtml: '',
            thumb: './assets/images/works/omanair/1.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/omanair/2.jpg',
            subHtml: '',
            thumb: './assets/images/works/omanair/2.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/omanair/3.jpg',
            subHtml: '',
            thumb: './assets/images/works/omanair/3.jpg'
          }
        ]
      },
      {
        id: 7,
        name: 'Faranegar',
        nameFilter: 'Faranegar Company',
        currentPicture: 0,
        path: [
          {
            alt: '',
            src: './assets/images/works/online-booking/1.jpg',
            subHtml: '',
            thumb: './assets/images/works/online-booking/1.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/online-booking/2.jpg',
            subHtml: '',
            thumb: './assets/images/works/online-booking/2.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/online-booking/3.jpg',
            subHtml: '',
            thumb: './assets/images/works/online-booking/3.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/online-booking/4.jpg',
            subHtml: '',
            thumb: './assets/images/works/online-booking/4.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/online-booking/5.jpg',
            subHtml: '',
            thumb: './assets/images/works/online-booking/5.jpg'
          }
        ]
      },
      {
        id: 8,
        name: 'Faranegar',
        nameFilter: 'Faranegar Company',
        currentPicture: 0,
        path: [
          {
            alt: '',
            src: './assets/images/works/safiran/1.jpg',
            subHtml: '',
            thumb: './assets/images/works/safiran/1.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/safiran/2.jpg',
            subHtml: '',
            thumb: './assets/images/works/safiran/2.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/safiran/3.jpg',
            subHtml: '',
            thumb: './assets/images/works/safiran/3.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/safiran/4.jpg',
            subHtml: '',
            thumb: './assets/images/works/safiran/4.jpg'
          }
        ]
      },
      {
        id: 9,
        name: 'Faranegar',
        nameFilter: 'Faranegar Company',
        currentPicture: 0,
        path: [
          {
            alt: '',
            src: './assets/images/works/tikban/1.jpg',
            subHtml: '',
            thumb: './assets/images/works/tikban/1.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/tikban/2.jpg',
            subHtml: '',
            thumb: './assets/images/works/tikban/2.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/tikban/3.jpg',
            subHtml: '',
            thumb: './assets/images/works/tikban/3.jpg'
          }
        ]
      },
      {
        id: 10,
        name: 'Faranegar',
        nameFilter: 'Faranegar Company',
        currentPicture: 0,
        path: [
          {
            alt: '',
            src: './assets/images/works/tikban-new/1.jpg',
            subHtml: '',
            thumb: './assets/images/works/tikban-new/1.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/tikban-new/2.jpg',
            subHtml: '',
            thumb: './assets/images/works/tikban-new/2.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/tikban-new/3.jpg',
            subHtml: '',
            thumb: './assets/images/works/tikban-new/3.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/tikban-new/4.jpg',
            subHtml: '',
            thumb: './assets/images/works/tikban-new/4.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/tikban-new/5.jpg',
            subHtml: '',
            thumb: './assets/images/works/tikban-new/5.jpg'
          }
        ]
      },
      {
        id: 11,
        name: 'darwin',
        nameFilter: 'Projects',
        currentPicture: 0,
        path: [
          {
            alt: '',
            src: './assets/images/works/darwin/darwin0.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin0.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin1.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin1.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin2.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin2.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin3.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin3.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin4.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin4.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin5.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin5.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/darwin/darwin6.jpg',
            subHtml: '',
            thumb: './assets/images/works/darwin/darwin6.jpg'
          }
        ]
      },
      {
        id: 12,
        name: 'Dornika',
        nameFilter: 'Projects',
        currentPicture: 0,
        path: [
          {
            alt: '',
            src: './assets/images/works/dornika/dornika1.jpg',
            subHtml: '',
            thumb: './assets/images/works/dornika/dornika1.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/dornika/dornika2.jpg',
            subHtml: '',
            thumb: './assets/images/works/dornika/dornika2.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/dornika/dornika3.jpg',
            subHtml: '',
            thumb: './assets/images/works/dornika/dornika3.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/dornika/dornika4.jpg',
            subHtml: '',
            thumb: './assets/images/works/dornika/dornika4.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/dornika/dornika5.jpg',
            subHtml: '',
            thumb: './assets/images/works/dornika/dornika5.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/dornika/dornika6.jpg',
            subHtml: '',
            thumb: './assets/images/works/dornika/dornika6.jpg'
          }
        ]
      },
      {
        id: 12,
        name: 'Eghamat',
        nameFilter: 'Projects',
        currentPicture: 0,
        path: [
          {
            alt: '',
            src: './assets/images/works/eghamat/1.jpg',
            subHtml: '',
            thumb: './assets/images/works/eghamat/1.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/eghamat/2.jpg',
            subHtml: '',
            thumb: './assets/images/works/eghamat/2.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/eghamat/3.jpg',
            subHtml: '',
            thumb: './assets/images/works/eghamat/3.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/eghamat/4.jpg',
            subHtml: '',
            thumb: './assets/images/works/eghamat/4.jpg'
          },
          {
            alt: '',
            src: './assets/images/works/eghamat/5.jpg',
            subHtml: '',
            thumb: './assets/images/works/eghamat/5.jpg'
          }
        ]
      }
    ]
  }

  getWorks() {
    return this.works;
  }
}
