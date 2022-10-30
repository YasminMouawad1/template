import { Injectable } from '@angular/core'; 
import { LanguageService } from '../../services/language/language.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class ToastCommonService {
  constructor(
    private _languageService: LanguageService,
    private _toastService: ToastService
  ) {}

  successProcess(arText: string='', enText: string='') {
    let text: string, isDefault: boolean;
    isDefault = this._languageService.isDefaultLang();
    if (isDefault) {
      text = arText || 'تمت عملية الحفظ بنجاح.';
    } else {
      text = enText || 'Operation completed successfully.';
    }
    this._toastService.success(text);
  }
  errorProcess(arText: string='', enText: string='') {
    let text: string, isDefault: boolean;
    isDefault = this._languageService.isDefaultLang();
    if (isDefault) {
      text = arText || 'عفوا, لقد حدث خطأ غير متوقع.';
    } else {
      text = enText || 'Sorry, an unexpected error has occurred.';
    }
    this._toastService.error(text);
  }
}
