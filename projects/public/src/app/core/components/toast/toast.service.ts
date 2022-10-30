import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }
  // =========  extra  functions
  error(
    textOrTpl: string | TemplateRef<any>,
    options: any = {
      autohide: true,
      position: 'center',
      classname: 'bg-danger text-light px-4 py-1 mx-auto text-center',
    }
  ) {
    this.show(textOrTpl, options);
  }
  success(
    textOrTpl: string | TemplateRef<any>,
    options: any = {
      autohide: true,
      classname: 'bg-success text-light px-4 py-1 mx-auto text-center',
    }
  ) {
    this.show(textOrTpl, options);
  }
  warning(
    textOrTpl: string | TemplateRef<any>,
    options: any = {
      autohide: true,
      classname: 'bg-warning text-light px-4 py-1 mx-auto text-center',
    }
  ) {
    this.show(textOrTpl, options);
  }
  info(
    textOrTpl: string | TemplateRef<any>,
    options: any = {
      autohide: true,
      classname: 'bg-info text-light px-4 py-1 mx-auto text-center',
    }
  ) {
    this.show(textOrTpl, options);
  }
}
