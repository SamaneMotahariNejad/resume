import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  public layout: any;
  constructor() {

    this.layout = {
      sidebarToggle: false,
    };
  }

  getLayoutSetting(name: any) {
    return name ? this.layout[name] : this.layout;
  }

  setLayoutSetting(name: any, value: any) {
    if (typeof this.layout[name] !== 'undefined') {
      return this.layout[name] = value;
    }
  }

  toggleLayoutSetting(name: any) {
    return this.setLayoutSetting(name, !this.getLayoutSetting(name));
  }
}
