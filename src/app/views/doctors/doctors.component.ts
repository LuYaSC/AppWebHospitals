import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Doctor, DoctorSpecialty } from 'src/app/services/models/doctor';
import { Hospital, HospitalSpecialty } from 'src/app/services/models/hospital';
import { Specialty } from 'src/app/services/models/specialty';
import { UtilsService } from 'src/app/services/utils-service';
import { SearchDoctorDto } from './components/model/search-doctor-dto';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
  providers: [UtilsService]
})
export class DoctorsComponent implements OnInit {

  //Data
  hospitalsApp = new Hospital().CreateListHospital();
  doctorsApp = new Doctor().CreateListDoctor();
  specialtiesApp = new Specialty().CreateListSpecialty();
  listSpecialtiesHospitals = new HospitalSpecialty().AssingHospitalSpecialty();
  listDoctorSpecialties = new DoctorSpecialty().AssingHospitalDoctors();

  //Search
  searchDoctorDto = new SearchDoctorDto();
  listSpecialties: Specialty[] = [];
  createDoctorSpecialtyDto = new DoctorSpecialty();
  editDoctorSpecialtyDto = new DoctorSpecialty();
  codeDoctor: number;

  doctors: Doctor[] = [];
  listDoctors: Doctor[] = [];
  doctorDto = new Doctor();
  closeResult = '';
  operationType: number;
  @Output() CreateEditDoctor: EventEmitter<any> = new EventEmitter();

  @ViewChild('detailForm') form: NgForm;
  constructor(private modalService: NgbModal, private utils: UtilsService) { }

  ngOnInit(): void {
    this.doctors = new Doctor().CreateListDoctor();
    this.listDoctors = this.doctors;
    this.searchDoctorDto.codeHospital = this.searchDoctorDto.codeSpecialty = 0;
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.doctorDto = new Doctor();
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  handleActionsDoctor(content: any, type: number, doctor?: Doctor) {
    this.operationType = type;
    this.createDoctorSpecialtyDto.codeHospital = this.createDoctorSpecialtyDto.specialtyCode = undefined;
    if (type === 2) {
      this.doctorDto = doctor;
      this.createDoctorSpecialtyDto.codeHospital = this.listDoctorSpecialties.find(x => x.codeDoctor == doctor.code).codeHospital;
      this.createDoctorSpecialtyDto.specialtyCode = this.listDoctorSpecialties.find(x => x.codeDoctor == doctor.code).specialtyCode;
      this.editDoctorSpecialtyDto = Object.assign({}, this.createDoctorSpecialtyDto);
    }
    this.open(content);
  }

  manageDoctor(doctor: Doctor) {
    if (this.operationType === 1) {
      doctor.code = this.codeDoctor = this.utils.getCodeArray(this.doctors) + 100;
      doctor.avatar = 'https://www.asvinshospitals.com/wp-content/uploads/2019/10/default-placeholder-doctor-half-length-Copy.jpg';
      this.doctors.push(doctor);
    } else {
      for (let i = 0; i < this.doctors.length; i++) {
        if (this.doctors[i].code === doctor.code) {
          this.codeDoctor = this.doctors[i].code;
          this.doctors[i] = Object.assign({}, doctor);
        }
      }
    }
    this.cleanSearch();
    this.searchDoctor();
    this.doctorDto = new Doctor();
  }

  manageSpecialty(specialty: DoctorSpecialty) {
    specialty.codeDoctor = this.codeDoctor;
    if (this.operationType === 2) {
      this.listSpecialtiesHospitals = this.listSpecialtiesHospitals.filter(x => x.codeDoctor !== this.codeDoctor &&
        x.specialtyCode !== this.editDoctorSpecialtyDto.specialtyCode && x.codeHospital !== this.editDoctorSpecialtyDto.codeHospital);
    }
    this.listDoctorSpecialties.push(specialty);

  }

  deleteDoctor(Doctor: Doctor) {
    this.doctors = this.doctors.filter(x => x.code !== Doctor.code);
    this.listDoctors = this.doctors;
    this.cleanSearch();
    this.searchDoctor();
  }

  searchDoctor() {
    this.listDoctors = [];
    if (this.searchDoctorDto.name !== null && this.searchDoctorDto.name !== undefined && this.searchDoctorDto.name !== '') {
      this.listDoctors = this.listDoctors.concat(this.doctors.filter(x => x.name.includes(this.searchDoctorDto.name.trim())));
    }
    if (this.searchDoctorDto.lastName !== null && this.searchDoctorDto.lastName !== undefined && this.searchDoctorDto.lastName !== '') {
      this.listDoctors = this.listDoctors.concat(this.doctors.filter(x => x.lastName.includes(this.searchDoctorDto.lastName.trim())));
    }
    if (this.searchDoctorDto.birthDate !== null && this.searchDoctorDto.birthDate !== undefined) {
      this.listDoctors = this.listDoctors.concat(this.doctors.filter(x => x.birthDate == this.searchDoctorDto.birthDate.toString()));
    }
    if (this.searchDoctorDto.name === '' && this.searchDoctorDto.lastName === '' && this.searchDoctorDto.birthDate === undefined) {
      this.listDoctors = this.doctors;
    }
  }

  cleanSearch() {
    this.searchDoctorDto.name = '';
    this.searchDoctorDto.lastName = '';
    this.searchDoctorDto.birthDate = undefined;
    this.searchDoctor();
  }

  selectHospital() {
    this.listSpecialties = [];
    let listFilterSpecialties = this.listSpecialtiesHospitals.filter(x => x.codeHospital === this.searchDoctorDto.codeHospital);
    this.searchDoctorDto.codeSpecialty = 0;
    for (let i = 0; i < listFilterSpecialties.length; i++) {
      let searchSpec = <Specialty>this.specialtiesApp.find(x => x.code == listFilterSpecialties[i].specialtyCode);
      if (searchSpec !== null || searchSpec !== undefined) {
        this.listSpecialties.push(searchSpec);
      }
    }
  }
}
