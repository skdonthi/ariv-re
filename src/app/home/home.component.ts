import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isPage1: boolean = false;
  isPage2: boolean = false;
  isPage3: boolean = true;
  today = new Date();

  public get name(): string {
    return this.form1.get('name')?.value;
  }

  public get houseNum(): string {
    return this.form1.get('houseNum')?.value;
  }

  form1: FormGroup = new FormGroup({
    name: new FormControl('Donthi'),
    houseNum: new FormControl('20202'),
  });

  form2: FormGroup = new FormGroup({
    objektbezeichnung: new FormControl('20202'),
    adresszusatz: new FormControl('2.OG hinten'),
    strasse: new FormControl(''),
    plzOrt: new FormControl(''),
  });

  form3: FormGroup = new FormGroup({
    person: new FormControl('Mieter'),
    pName: new FormControl(''),
    pStrasse: new FormControl(''),
    pPlzOrt: new FormControl(''),
    telefon: new FormControl(''),
    mobile: new FormControl(''),
    eMail: new FormControl(''),
    //-----
    personVermieter: new FormControl('Vermieter'),
    pNameVermieter: new FormControl(''),
    pStrasseVermieter: new FormControl(''),
    pPlzOrtVermieter: new FormControl(''),
    telefonVermieter: new FormControl(''),
    mobileVermieter: new FormControl(''),
    eMailVermieter: new FormControl(''),
  });

  form4: FormGroup = new FormGroup({
    postBoxKeys: new FormControl('2'),
    doorKeys: new FormControl('4'),
  });

  constructor() {}
}
