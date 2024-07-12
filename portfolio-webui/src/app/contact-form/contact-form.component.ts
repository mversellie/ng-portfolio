import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ContactFormService} from "./contact-form.service";

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  formStatus = "";
  submitted:boolean = false;
  errorMessage:string= ""


  constructor(private formService:ContactFormService) {
  }

  contactForm = new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    message: new FormControl('',[Validators.required]),
    subject: new FormControl('',[Validators.required])
  })

  badEmail(){
    const tempEmail = this.contactForm.get("email")
    return tempEmail == null ||  (!tempEmail.hasError('required') && tempEmail.hasError('email'))
  }


  shipForm(){
    this.submitted = true;
    this.formStatus = this.contactForm.valid ? '' : 'FAILURE'

    if(this.formStatus != 'FAILURE'){

      const onSuccess = () => {this.formStatus = "SUCCESS";}

      const onError = (err:Error) => {
        console.log(err);
        this.formStatus="FAILURE";
        this.errorMessage = "Server error"}

      const doOnFormResponse = { "next": () => onSuccess(),
        "error": (error:Error) => onError(error) }
      this.formService.shipForm(this.contactForm.value).subscribe(doOnFormResponse)
    }

    else {
      this.errorMessage = "Fields missing or invalid.  See form."
    }
  }



  get fullName(){
    return this.contactForm.get("fullName");
  }

  get message(){
    return this.contactForm.get("message");

  }

  get email(){
    return this.contactForm.get("email");

  }

  get subject(){
    return this.contactForm.get("subject");
  }


}


