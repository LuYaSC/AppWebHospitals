import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Doctor, DoctorSpecialty } from 'src/app/services/models/doctor';
import { Hospital, HospitalSpecialty } from 'src/app/services/models/hospital';
import { Specialty } from 'src/app/services/models/specialty';
import { UtilsService } from 'src/app/services/utils-service';
import { SearchDoctorDto } from '../model/search-doctor-dto';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css'],
  providers: [UtilsService]
})
export class CreateDoctorComponent implements OnInit {

  @Input() doctorDto = new Doctor();
  @Input() doctor = new Doctor();
  @Input() operationType: number;
  @Output() onChange = new EventEmitter();
  @Output() onChangeSpecialty = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() createDoctorSpecialtyDto = new DoctorSpecialty();

  //Data
  hospitalsApp = new Hospital().CreateListHospital();
  doctorsApp = new Doctor().CreateListDoctor();
  specialtiesApp = new Specialty().CreateListSpecialty();
  listSpecialtiesHospitals = new HospitalSpecialty().AssingHospitalSpecialty();
  listDoctorSpecialties = new DoctorSpecialty().AssingHospitalDoctors();
  listSpecialties: Specialty[] = [];

  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
    this.doctorDto = this.utils.AddAuditDates(this.doctorDto, this.operationType);
    this.doctor = Object.assign({}, this.doctorDto);
    debugger;
    if (this.createDoctorSpecialtyDto.codeHospital === undefined) {
      this.createDoctorSpecialtyDto.codeHospital = this.hospitalsApp[0].code;
    }
    this.selectHospital();
  }

  managerDoctor() {
    switch (this.operationType) {
      case 1:
      case 2:
        this.doctorDto = Object.assign({}, this.doctor);
        this.onChange.emit(this.doctorDto);
        this.onChangeSpecialty.emit(this.createDoctorSpecialtyDto);
        break;
      case 3:
        this.cancel.emit();
        break;
    }

  }

  selectHospital() {
    this.listSpecialties = [];
    let listFilterSpecialties = this.listSpecialtiesHospitals.filter(x => x.codeHospital === this.createDoctorSpecialtyDto.codeHospital);
    if (this.createDoctorSpecialtyDto.specialtyCode === undefined) {
      this.createDoctorSpecialtyDto.specialtyCode = listFilterSpecialties[0].specialtyCode;
    }
    for (let i = 0; i < listFilterSpecialties.length; i++) {
      let searchSpec = <Specialty>this.specialtiesApp.find(x => x.code == listFilterSpecialties[i].specialtyCode);
      if (searchSpec !== null || searchSpec !== undefined) {
        this.listSpecialties.push(searchSpec);
      }
    }
  }
}
