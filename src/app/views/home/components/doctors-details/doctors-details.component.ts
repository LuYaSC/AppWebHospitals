import { Component, Input, OnInit } from '@angular/core';
import { Doctor, DoctorSpecialty } from 'src/app/services/models/doctor';
import { Specialty } from 'src/app/services/models/specialty';
import { DoctorInformationResult } from '../model/doctor-information-result';

@Component({
  selector: 'app-doctors-details',
  templateUrl: './doctors-details.component.html',
  styleUrls: ['./doctors-details.component.css']
})
export class DoctorsDetailsComponent implements OnInit {

  @Input() codeHospital: number;
  listDoctors: DoctorInformationResult[] = [];
  listDoctorsApp = new Doctor().CreateListDoctor();
  listSpecialties = new Specialty().CreateListSpecialty();
  @Input() listRelation = new DoctorSpecialty().AssingHospitalDoctors();
  constructor() { }

  ngOnInit(): void {
    let listReduced = this.listRelation.filter(x => x.codeHospital === this.codeHospital);
    for (let i = 0; i < listReduced.length; i++) {
      let doctor = this.listDoctorsApp.find(x => x.code === listReduced[i].codeDoctor);
      let specialtyDoctor = this.listSpecialties.find(x => x.code === listReduced[i].specialtyCode);
      this.listDoctors.push(new DoctorInformationResult({
        name: doctor.name + ' ' + doctor.lastName,
        specialty: specialtyDoctor.name,
        dateCreation: doctor.dateCreation,
        address: doctor.address,
        birthDate: doctor.birthDate,
        avatar: doctor.avatar
      }));
    }
  }

}
