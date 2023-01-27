import { Component, ElementRef } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { DeviceInformation } from 'src/app/core/interfaces/deviceinfo';
import { SettingService } from 'src/app/core/services/setting.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  name = 'Angular';
  mouseMove = false;
  loading = false;
  lastPosition = {
    x: 0,
    y: 0,
  };
  lastMovePageOffset = {
    x: 0,
    y: 0,
  };

  deviceDetect: string = '';
  deviceInfo: DeviceInformation = {
    browser: '',
    isDesktopDevice: false,
    isMobile: false,
    isTablet: false
  };

  constructor(private el: ElementRef,
    public settings: SettingService,
    private deviceService: DeviceDetectorService,) {
    this.getDeviceInformation();

    window.addEventListener("orientationchange", () => {
      const { type } = screen.orientation;
      this.deviceDetect = type.startsWith("portrait") ? "portrait" : "landscape";
    }, false);

    if(!this.deviceInfo.isDesktopDevice){
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }

  getDeviceInformation() {
    this.deviceDetect = this.deviceService.getDeviceInfo().orientation;
    this.deviceInfo.browserWidth = window.innerWidth;
    this.deviceInfo.browser = this.deviceService.getDeviceInfo().browser;
    this.deviceInfo.isMobile = this.deviceService.isMobile();
    this.deviceInfo.isTablet = this.deviceService.isTablet();
    this.deviceInfo.isDesktopDevice = this.deviceService.isDesktop();
  }

  get tooltip() {
    return this.el.nativeElement.querySelector('.sites-circle');
  }

  mouseStopped() {
    this.mouseMove = false;

    // this.tooltip.classList.add('onMove');
    // the actual function that is called
    console.log('mousemove: ' + this.mouseMove);
  }
  move(e: { pageX: number; pageY: number; target: any }) {
    this.mouseMove = true;

    var timer;
    clearTimeout(timer);
    timer = setTimeout(this.mouseStopped, 300);

    const tooltipStyle = this.tooltip.style;

    tooltipStyle.left = e.pageX + 'px';
    tooltipStyle.top = e.pageY + 'px';

    this.lastPosition.x = e.pageX;
    this.lastPosition.y = e.pageY;

    if (e.target.classList.contains('onHover')) {
      this.tooltip.classList.add('cursor-zoom');
    } else {
      this.tooltip.classList.remove('cursor-zoom');
    }

    this.lastMovePageOffset.y = window.pageYOffset;
  }

  onScroll(e: any) {
    if (this.lastPosition.y !== undefined) {
      let pageOffsetY = 0;
      if (this.lastMovePageOffset.y !== undefined) {
        pageOffsetY = window.pageYOffset - this.lastMovePageOffset.y;
      }
      this.tooltip.style.top = this.lastPosition.y + pageOffsetY + 'px';
    }
  }

  enter() {
    this.tooltip.classList.add('show');
  }

  leave() {
    this.tooltip.classList.remove('show');
  }
}
