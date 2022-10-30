import { Injectable } from '@angular/core';
import { APIService } from '../../../core/services/http/api.service';
import { UrlEndpoints } from '../../constants/url-endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthEndpoints {

  constructor(private _API: APIService) { }
  postTokenAuthAuthenticate(body: any) {
    return this._API.doPost(UrlEndpoints.POST_TOKEN_AUTH, body);
  }
}
