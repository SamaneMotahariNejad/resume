import { Component, OnInit } from '@angular/core';
import { imageGallary } from 'src/app/core/interfaces/works';
import { WorksService } from 'src/app/core/services/works.service';
import lgZoom from 'lightgallery/plugins/zoom';
import { LightGallery } from 'lightgallery/lightgallery';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  lightGallery!: LightGallery;
  works: imageGallary[] = [];
  lightGallerySlider: imageGallary[] = [];

  state: string = 'All'
  mouseDown = false;

  startX: any;
  scrollLeft: any;

  settings = {
    counter: false,
    plugins: [lgZoom]
  };

  constructor(private worksSV: WorksService) {
  }

  ngOnInit(): void {
    this.getWorks();
  }

  getWorks() {
    this.works = this.worksSV.getWorks();
  }

  changeState(state: string) {
    this.state = state;
    this.getWorks();

    if (state !== 'All') {
      this.works = this.works.filter(e => e.nameFilter === state);
    }
  }

  select(item: any, index: number) {
    item.currentPicture = index;
  }

  openLightGallery(item: any) {
    this.lightGallery.refresh(item.path);
    this.lightGallery.openGallery();
  }

  onClick = (detail: any): void => {
    this.lightGallery = detail.instance;
  };

  changeCurrentPicture(item: any, arrow: string) {
    if (arrow === 'right') {
      item.currentPicture += 1;
    }

    if (arrow === 'left') {
      item.currentPicture -= 1;
    }
  }

  startDragging(e: any, flag: any, el: any) {
    this.mouseDown = true;
    this.startX = e.pageX - el.offsetLeft;
    this.scrollLeft = el.scrollLeft;
  }

  stopDragging(e: any, flag: any) {
    this.mouseDown = false;
  }

  moveEvent(e: any, el: any) {
    e.preventDefault();
    if (!this.mouseDown) {
      return;
    }
    console.log(e);
    const x = e.pageX - el.offsetLeft;
    const scroll = x - this.startX;
    el.scrollLeft = this.scrollLeft - scroll;
  }
}
