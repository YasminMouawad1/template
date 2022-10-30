import { Injectable } from '@angular/core';
import { APIService } from '../../../core/services/http/api.service';
import { UrlEndpoints } from '../../constants/url-endpoints';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _API: APIService) { }

  // Get All Users List
  getWaitingRiskApprovalList(){
    return this._API.doGet(UrlEndpoints.GET_WaitingRiskApprovalList)
  }

  getLimitReviw(){
    return this._API.doGet(UrlEndpoints.GET_ReviwList)
  }


  getUserById(id: string){
return this._API.doGet(UrlEndpoints.GET_UserById + id)
  }

  postUser(userApprove: any){
    return this._API.doPost(UrlEndpoints.POST_ApproveUser, userApprove)
  }
  editRiskLimit(userApprove: any){
    return this._API.doPost(UrlEndpoints.Edit_RiskLimit, userApprove)
  }


  getRejectResponse(){
    return this._API.doGet(UrlEndpoints.GET_RejectResponse)
  }

  getRiskRejectedProfileList(){
    return this._API.doGet(UrlEndpoints.GET_RejectedProfilePlusList)
  }
  getRiskPermanentRejectedProfileList(){
    return this._API.doGet(UrlEndpoints.GET_PermanentRejectedProfilePlusList)
  }

  getClientActivation( mobileNumber : string){
    return this._API.doGet(UrlEndpoints.Get_ClientActivation+mobileNumber)
  }
}
