import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Patient } from 'src/app/services/models/patient';
import { UtilsService } from 'src/app/services/utils-service';
import { SearchPatientsDto } from './components/model/search-patients-dto';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  providers: [UtilsService]
})
export class PatientsComponent implements OnInit {

  patients: Patient[] = [];
  listPatients: Patient[] = [];
  patientDto = new Patient();
  closeResult = '';
  operationType: number;
  searchPatientDto = new SearchPatientsDto();
  @Output() CreateEditPatient: EventEmitter<any> = new EventEmitter();

  @ViewChild('detailForm') form: NgForm;
  constructor(private modalService: NgbModal, private utils: UtilsService) { }

  ngOnInit(): void {
    this.patients = new Patient().CreateListPatient();
    this.listPatients = this.patients;
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.patientDto = new Patient();
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  handleActionsPatient(content: any, type: number, patient?: Patient) {
    this.operationType = type;
    if (type === 2) {
      this.patientDto = patient;
    }
    this.open(content);
  }

  createPatient(patient: Patient) {
    if (this.operationType === 1) {
      patient.code = this.utils.getCodeArray(this.patients) + 100;
      patient.avatar = 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-grey-photo-placeholder-male-default-profile-gray-person-picture-isolated-white-background-good-man-102846161.jpg';
      this.patients.push(patient);
    } else {
      for (let i = 0; i < this.patients.length; i++) {
        if (this.patients[i].code === patient.code) {
          this.patients[i] = Object.assign({}, patient);
        }
      }
    }
    this.cleanSearch();
    this.searchPatient();
    this.patientDto = new Patient();
  }

  deletePatient(patient: Patient) {
    this.patients = this.patients.filter(x => x.code !== patient.code);
    this.cleanSearch();
    this.searchPatient();
  }

  searchPatient() {
    this.listPatients = [];
    if (this.searchPatientDto.name !== null && this.searchPatientDto.name !== undefined && this.searchPatientDto.name !== '') {
      this.listPatients = this.listPatients.concat(this.patients.filter(x => x.name.includes(this.searchPatientDto.name.trim())));
    }
    if (this.searchPatientDto.lastName !== null && this.searchPatientDto.lastName !== undefined && this.searchPatientDto.lastName !== '') {
      this.listPatients = this.listPatients.concat(this.patients.filter(x => x.lastName.includes(this.searchPatientDto.lastName.trim())));
    }
    if (this.searchPatientDto.birthDate !== null && this.searchPatientDto.birthDate !== undefined) {
      this.listPatients = this.listPatients.concat(this.patients.filter(x => x.birthDate == this.searchPatientDto.birthDate.toString()));
    }
    if (this.searchPatientDto.name === '' && this.searchPatientDto.lastName === '' && this.searchPatientDto.birthDate === undefined) {
      this.listPatients = this.patients;
    }
  }

  cleanSearch() {
    this.searchPatientDto.name = '';
    this.searchPatientDto.lastName = '';
    this.searchPatientDto.birthDate = undefined;
    this.searchPatient();
  }
}

