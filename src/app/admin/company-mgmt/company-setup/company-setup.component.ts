import {Component, OnInit, ViewChild} from '@angular/core';
import {MovingDirection, WizardComponent} from 'angular-archwizard';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-company-setup',
  templateUrl: './company-setup.component.html',
  styleUrls: ['./company-setup.component.scss']
})
export class CompanySetupComponent implements OnInit {

 // @ViewChild('companyInformationForm')  companyInformationForm: NgForm;
  data = [{name: 'John', code : 1}, {name: 'Chima', code: 2}];
  dataValue = this.data[0];
  flightSupplierList = [{name: 'AMADEUS', code : '01'}, {name: 'GALILEO', code: 'O2'}];
  flightSupplier: {name: string, id: number};
  hotelSupplierList = [{name: 'JACTRAVELS', code : '01'}];
  hotelSupplier: {name: string, id: number};
  constructor() { }

  ngOnInit() {
  }

  validateInformationForm(form) {
    console.log('--------COMPANY SETUP VALIDATION---------', form.value);
    const nextButton: HTMLButtonElement = document.getElementById('companyInformationNextButton') as HTMLButtonElement;
    nextButton.click();
  }
  validateContactInfoForm(form) {
    console.log('--------COMPANY SETUP VALIDATION---------', form.value);
    const nextButton: HTMLButtonElement = document.getElementById('companyContactInfoNextButton') as HTMLButtonElement;
    nextButton.click();
  }
  validateSupplierDetailAndSetUpCompany(form) {
    console.log('--------COMPANY SETUP VALIDATION---------', form.value);
  }
  handleSupplierSelection(event, type) {
    console.log(event);
    if (type === 'flight') {
       this.flightSupplier = event;
    } else {
      this.hotelSupplier = event;
    }

  }

}
