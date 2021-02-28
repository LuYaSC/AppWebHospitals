import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Specialty } from 'src/app/services/models/specialty';
import { UtilsService } from 'src/app/services/utils-service';
import { SearchSpecialtyDto } from './components/model/search-specialty-dto';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.css'],
  providers: [UtilsService]
})
export class SpecialtiesComponent implements OnInit {
  specialties: Specialty[] = [];
  listSpecialties: Specialty[] = [];
  specialtyDto = new Specialty();
  closeResult = '';
  operationType: number;
  searchSpecialtiesDto =  new SearchSpecialtyDto();
  @Output() CreateEditSpecialty: EventEmitter<any> = new EventEmitter();

  @ViewChild('detailForm') form: NgForm;
  constructor(private modalService: NgbModal, private utils: UtilsService) { }

  ngOnInit(): void {
    this.specialties = new Specialty().CreateListSpecialty();
    this.listSpecialties = this.specialties;
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    //this.specialtyDto = new Specialty();
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  handleActionsSpecialty(content: any, type: number, specialty?: Specialty) {
    this.operationType = type;
    if (type === 2) {
      this.specialtyDto = specialty;
    }
    this.open(content);
  }

  editSpecialty(content, specialty: Specialty) {
    this.specialtyDto = specialty;
    this.open(content);
  }

  createSpecialty(specialty: Specialty) {
    if (this.operationType === 1) {
      specialty.code = this.utils.getCodeArray(this.specialties) + 100;
      this.specialties.push(specialty);
    } else {
      for (let i = 0; i < this.specialties.length; i++) {
        if (this.specialties[i].code === specialty.code) {
          this.specialties[i] = Object.assign({}, specialty);
        }
      }
    }
    this.cleanSearch();
    this.searchSpecialty();
    this.specialtyDto = new Specialty();
  }

  deleteSpecialty(specialty: Specialty) {
    this.specialties = this.specialties.filter(x => x.code !== specialty.code);
    this.cleanSearch();
    this.searchSpecialty();
  }

  searchSpecialty(){
    this.listSpecialties = [];
    if (this.searchSpecialtiesDto.name !== null && this.searchSpecialtiesDto.name !== undefined && this.searchSpecialtiesDto.name !== '') {
      this.listSpecialties = this.listSpecialties.concat(this.specialties.filter(x => x.name.includes(this.searchSpecialtiesDto.name.trim())));
    }
    if (this.searchSpecialtiesDto.name === '') {
      this.listSpecialties = this.specialties;
    }
  }

  cleanSearch() {
    this.searchSpecialtiesDto.name = '';
    this.searchSpecialty();
  }

}
