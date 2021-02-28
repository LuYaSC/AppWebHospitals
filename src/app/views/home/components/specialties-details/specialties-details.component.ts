import { Component, Input, OnInit } from '@angular/core';
import { DoctorSpecialty } from 'src/app/services/models/doctor';
import { Specialty } from 'src/app/services/models/specialty';

@Component({
  selector: 'app-specialties-details',
  templateUrl: './specialties-details.component.html',
  styleUrls: ['./specialties-details.component.css']
})
export class SpecialtiesDetailsComponent implements OnInit {

  @Input() codeHospital: number;
  listSpecialties: Specialty[] = [];
  listSpecialtiesApp = new Specialty().CreateListSpecialty();
  listRelation = new DoctorSpecialty().AssingHospitalDoctors();
  constructor() { }

  ngOnInit(): void {
    debugger;
    let listReduced = this.listRelation.filter(x => x.codeHospital === this.codeHospital);
    for (let i = 0; i < listReduced.length; i++) {
      let specialty = this.listSpecialties.find(x => x.code === listReduced[i].specialtyCode);
      if (specialty === null || specialty === undefined) {
        debugger;
        let specialtyDoctor = this.listSpecialtiesApp.find(x => x.code === listReduced[i].specialtyCode);
        this.listSpecialties.push(specialtyDoctor);
      }

    }
  }

}
