import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  formSubmitUrl = environment.formSubmitUrl;

  constructor(private http:HttpClient) { }

  shipForm(formData:any){
    return this.http.post(this.formSubmitUrl,formData)
  }
}
