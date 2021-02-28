import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Hospital } from 'src/app/services/models/hospital';
import { UtilsService } from 'src/app/services/utils-service';
import { SearchHospitalDto } from './components/model/search-hospital-dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UtilsService]
})
export class HomeComponent implements OnInit {

  hospitals: Hospital[] = [];
  listHospitals: Hospital[] = [];
  hospitalDto = new Hospital();
  hospitalDetail = new Hospital();
  closeResult = '';
  operationType: number;
  searchHospitalDto = new SearchHospitalDto();
  isVisibleInformation = false;
  codeHospital: number;
  @Output() CreateEditHospital: EventEmitter<any> = new EventEmitter();

  @ViewChild('detailForm') form: NgForm;
  constructor(private modalService: NgbModal, private utils: UtilsService) { }

  ngOnInit(): void {
    this.hospitals = new Hospital().CreateListHospital();
    this.listHospitals = this.hospitals;
  }

  open(content: any) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.hospitalDto = new Hospital();
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  handleActionsHospital(content, type: number, hospital?: Hospital) {
    this.isVisibleInformation = false;
    this.operationType = type;
    if (type === 2) {
      this.hospitalDto = hospital;
    }
    this.open(content);
  }

  createHospital(hospital: Hospital) {
    if (this.operationType === 1) {
      hospital.code = this.utils.getCodeArray(this.hospitals) + 100;
      hospital.avatar = 'https://image.freepik.com/vector-gratis/plantilla-logo-hospital_1061-6.jpg';
      this.hospitals.push(hospital);
    } else {
      for (let i = 0; i < this.hospitals.length; i++) {
        if (this.hospitals[i].code === hospital.code) {
          this.hospitals[i] = Object.assign({}, hospital);
        }
      }
    }
    this.cleanSearch();
    this.searchHospital();
    this.hospitalDto = new Hospital();
  }

  deleteHospital(hospital: Hospital) {
    this.hospitals = this.hospitals.filter(x => x.code !== hospital.code);
    this.cleanSearch();
    this.searchHospital();
  }

  searchHospital() {
    debugger;
    this.isVisibleInformation = false;
    this.listHospitals = [];
    if (this.searchHospitalDto.name !== null && this.searchHospitalDto.name !== undefined && this.searchHospitalDto.name !== '') {
      this.listHospitals = this.listHospitals.concat(this.hospitals.filter(x => x.name.includes(this.searchHospitalDto.name.trim().toUpperCase())));
    }
    if (this.searchHospitalDto.name === '') {
      this.listHospitals = this.hospitals;
    }
  }

  cleanSearch() {
    this.searchHospitalDto.name = '';
    this.searchHospital();
  }

  getInformation(hospital: Hospital){
    debugger;
    this.isVisibleInformation = true;
    this.hospitalDetail = hospital;
    this.codeHospital = hospital.code;
  }

}
