import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Doctor, DoctorSpecialty } from 'src/app/services/models/doctor';
import { Hospital, HospitalSpecialty } from 'src/app/services/models/hospital';
import { Patient } from 'src/app/services/models/patient';
import { Specialty } from 'src/app/services/models/specialty';
import { VisitNote } from 'src/app/services/models/visit-note';
import { UtilsService } from 'src/app/services/utils-service';

@Component({
  selector: 'app-create-visit-note',
  templateUrl: './create-visit-note.component.html',
  styleUrls: ['./create-visit-note.component.css'],
  providers: [UtilsService]
})
export class CreateVisitNoteComponent implements OnInit {

  @Input() visitNoteDto = new VisitNote();
  @Input() visitNote = new VisitNote();
  @Input() operationType: number;
  @Output() onChange = new EventEmitter();
  @Output() cancel = new EventEmitter();
  angForm: FormGroup;

  //Data
  hospitalsApp = new Hospital().CreateListHospital();
  doctorsApp = new Doctor().CreateListDoctor();
  patientsApp = new Patient().CreateListPatient();
  specialtiesApp = new Specialty().CreateListSpecialty();
  listSpecialtiesHospitals = new HospitalSpecialty().AssingHospitalSpecialty();
  listDoctorSpecialties = new DoctorSpecialty().AssingHospitalDoctors();

  listSpecialties: Specialty[] = [];
  listDoctors: Doctor[] = [];

  constructor(private utils: UtilsService, private fb: FormBuilder) {
    this.angForm = this.fb.group({
      observations: ['', Validators.required],
      prescription: ['', Validators.required],
      dateCreation: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.visitNoteDto.codeHospital = this.hospitalsApp[0].code;
    this.visitNoteDto.codePatient = this.patientsApp[0].code;
    this.visitNoteDto = this.utils.AddAuditDates(this.visitNoteDto, this.operationType);
    this.visitNoteDto.dateCreation = undefined;
    this.visitNote = Object.assign({}, this.visitNoteDto);
    this.selectHospital();
  }

  managerVisitNote() {
    switch (this.operationType) {
      case 1:
      case 2:
        this.visitNoteDto = Object.assign({}, this.visitNote);
        this.onChange.emit(this.visitNoteDto);
        break;
      case 3:
        this.cancel.emit();
        break;
    }
  }

  selectHospital() {
    this.listSpecialties = [];
    let listFilterSpecialties = this.listSpecialtiesHospitals.filter(x => x.codeHospital === this.visitNote.codeHospital);
    this.visitNote.codeSpecialty = listFilterSpecialties.length > 0 ? listFilterSpecialties[0].specialtyCode : 0;
    this.selectSpecialty();
    for (let i = 0; i < listFilterSpecialties.length; i++) {
      let searchSpec = <Specialty>this.specialtiesApp.find(x => x.code == listFilterSpecialties[i].specialtyCode);
      if (searchSpec !== null || searchSpec !== undefined) {
        this.listSpecialties.push(searchSpec);
      }
    }
  }

  selectSpecialty() {
    this.listDoctors = [];
    let listFilterDoctors = this.listDoctorSpecialties.filter(x => x.specialtyCode === this.visitNote.codeSpecialty && x.codeHospital === this.visitNote.codeHospital);
    this.visitNote.codeDoctor = listFilterDoctors.length > 0 ? listFilterDoctors[0].codeDoctor : 0;
    for (let i = 0; i < listFilterDoctors.length; i++) {
      let searchDoc = <Doctor>this.doctorsApp.find(x => x.code == listFilterDoctors[i].codeDoctor);
      if (searchDoc !== null || searchDoc !== undefined) {
        this.listDoctors.push(searchDoc);
      }
    }

  }
}
