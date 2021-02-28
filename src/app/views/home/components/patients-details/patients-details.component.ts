import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/services/models/patient';
import { VisitNote } from 'src/app/services/models/visit-note';
import { PatientInformationResult } from '../model/patient-information-result';

@Component({
  selector: 'app-patients-details',
  templateUrl: './patients-details.component.html',
  styleUrls: ['./patients-details.component.css']
})
export class PatientsDetailsComponent implements OnInit {

  @Input() codeHospital: number;
  visitNotesApp = new VisitNote().CreateListVisitNote();
  listPatientsApp = new Patient().CreateListPatient();
  listPatients: PatientInformationResult[] = [];
  constructor() { }

  ngOnInit(): void {
    let listReduced = this.visitNotesApp.filter(x => x.codeHospital === this.codeHospital);
    for (let i = 0; i < listReduced.length; i++) {
      let specialty = this.listPatients.find(x => x.code === listReduced[i].codePatient);
      if (specialty === null || specialty === undefined) {
        let patient = this.listPatientsApp.find(x => x.code === listReduced[i].codePatient);
        this.listPatients.push(new PatientInformationResult({
          name: patient.name + ' ' + patient.lastName,
          birthDate: patient.birthDate,
          address: patient.address,
          attentions: this.listPatientsApp.filter(x => x.code === listReduced[i].codePatient).length,
          avatar: patient.avatar,
          code: patient.code
        }));
      }
    }
  }

}
