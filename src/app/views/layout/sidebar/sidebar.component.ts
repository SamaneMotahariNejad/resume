import { Component, Input } from '@angular/core';
import { DeviceInformation } from 'src/app/core/interfaces/deviceinfo';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() deviceInfo: DeviceInformation = {
    browser: '',
    isDesktopDevice: false,
    isMobile: false,
    isTablet: false
  };;
}
