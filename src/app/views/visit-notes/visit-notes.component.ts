import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Doctor } from 'src/app/services/models/doctor';
import { Hospital, HospitalSpecialty } from 'src/app/services/models/hospital';
import { Patient } from 'src/app/services/models/patient';
import { Specialty } from 'src/app/services/models/specialty';
import { VisitNote } from 'src/app/services/models/visit-note';
import { UtilsService } from 'src/app/services/utils-service';
import { SearchNoteVisitDto } from './components/model/search-note-visit-dto';
import { VisitNotesResult } from './components/model/visit-notes-result';

@Component({
  selector: 'app-visit-notes',
  templateUrl: './visit-notes.component.html',
  styleUrls: ['./visit-notes.component.css'],
  providers: [UtilsService]
})
export class VisitNotesComponent implements OnInit {

  //Data
  hospitalsApp = new Hospital().CreateListHospital();
  doctorsApp = new Doctor().CreateListDoctor();
  patientsApp = new Patient().CreateListPatient();
  specialtiesApp = new Specialty().CreateListSpecialty();
  relationHospitals = new HospitalSpecialty().AssingHospitalSpecialty();
  listVisitNotes: VisitNotesResult[] = [];

  //Search
  searchVisitNoteDto = new SearchNoteVisitDto();

  visitNotes = [];
  visitNoteDto = new VisitNote();
  closeResult = '';
  operationType: number;
  @Output() CreateEditVisitNote: EventEmitter<any> = new EventEmitter();

  @ViewChild('detailForm') form: NgForm;
  constructor(private modalService: NgbModal, private utils: UtilsService) { }

  ngOnInit(): void {
    this.getListNotes();
  }

  getListNotes() {
    this.visitNotes = new VisitNote().CreateListVisitNote();
    this.convertList();
  }

  convertList() {
    for (let i = 0; i < this.visitNotes.length; i++) {
      this.listVisitNotes.push(new VisitNotesResult({
        observations: this.visitNotes[i].observations,
        prescription: this.visitNotes[i].prescription,
        codePatient: this.patientsApp.find(x => x.code == this.visitNotes[i].codePatient).code,
        namePatient: this.patientsApp.find(x => x.code == this.visitNotes[i].codePatient).name + ' ' + this.patientsApp.find(x => x.code == this.visitNotes[i].codePatient).lastName,
        codeDoctor: this.doctorsApp.find(x => x.code == this.visitNotes[i].codeDoctor).code,
        nameDoctor: this.doctorsApp.find(x => x.code == this.visitNotes[i].codeDoctor).name + ' ' + this.doctorsApp.find(x => x.code == this.visitNotes[i].codeDoctor).lastName,
        codeSpecialty: this.specialtiesApp.find(x => x.code == this.visitNotes[i].codeSpecialty).code,
        nameSpecialty: this.specialtiesApp.find(x => x.code == this.visitNotes[i].codeSpecialty).name,
        codeHospital: this.hospitalsApp.find(x => x.code == this.visitNotes[i].codeHospital).code,
        nameHospital: this.hospitalsApp.find(x => x.code == this.visitNotes[i].codeHospital).name,
        dateNote: this.visitNotes[i].dateCreation,
        code: this.visitNotes[i].code,
      }));
    }
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.visitNoteDto = new VisitNote();
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  handleActionsVisitNote(content: any, type: number, visitNote?: VisitNote) {
    this.operationType = type;
    if (type === 2) {
      this.visitNoteDto = visitNote;
    }
    this.open(content);
  }

  createVisitNote(visitNote: VisitNote) {
    debugger;
    if (this.operationType === 1) {
      visitNote.code = this.utils.getCodeArray(this.visitNotes) + 100;
      this.visitNotes.push(visitNote);
      this.convertList();
    } else {
      for (let i = 0; i < this.visitNotes.length; i++) {
        if (this.visitNotes[i].code === visitNote.code) {
          this.visitNotes[i] = Object.assign({}, visitNote);
        }
      }

    }
    this.visitNoteDto = new VisitNote();
  }

  deleteVisitNote(visitNote: VisitNotesResult) {
    debugger;
    this.listVisitNotes = this.listVisitNotes.filter(x => x.code !== visitNote.code);
  }

  searchVisitNote() {
    this.listVisitNotes = [];
    this.getListNotes();
    if (this.searchVisitNoteDto.codeHospital !== 0) {
      this.listVisitNotes = this.listVisitNotes.filter(x => x.codeHospital == this.searchVisitNoteDto.codeHospital);
    }
    if (this.searchVisitNoteDto.codeSpecialty !== 0) {
      this.listVisitNotes = this.listVisitNotes.filter(x => x.codeSpecialty == this.searchVisitNoteDto.codeSpecialty);
    }
    if (this.searchVisitNoteDto.codeDoctor !== 0) {
      this.listVisitNotes = this.listVisitNotes.filter(x => x.codeDoctor == this.searchVisitNoteDto.codeDoctor);
    }
    if (this.searchVisitNoteDto.codePatient !== 0) {
      this.listVisitNotes = this.listVisitNotes.filter(x => x.codePatient == this.searchVisitNoteDto.codePatient);
    }

  }
}
