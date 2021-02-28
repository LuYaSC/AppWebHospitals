import { Injectable } from '@angular/core';
import { Audit } from './models/audit';
import { DoctorSpecialty } from './models/doctor';
import { HospitalSpecialty } from './models/hospital';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }


  AddAuditDates<MODEL extends Audit>(data: MODEL, operation: number) {
    data.dateCreation = operation === 2 ? data.dateCreation : new Date().toString();
    data.dateModification = new Date().toString();
    data.userCreation = 'ADMIN';
    data.userModification = 'ADMIN';
    return data;
  }

  getCodeArray<MODEL extends Audit>(data: MODEL[]) {
    return data.length > 0 ? data[data.length - 1].code : 1;
  }

  assingDoctorsNewHospital(codeHospital: number) {
    var list: DoctorSpecialty[] = [];
    list.push(new DoctorSpecialty({ codeDoctor: 1, specialtyCode: 1, codeHospital: codeHospital }));
    list.push(new DoctorSpecialty({ codeDoctor: 2, specialtyCode: 2, codeHospital: codeHospital }));
    list.push(new DoctorSpecialty({ codeDoctor: 3, specialtyCode: 3, codeHospital: codeHospital }));
    list.push(new DoctorSpecialty({ codeDoctor: 4, specialtyCode: 4, codeHospital: codeHospital }));
    list.push(new DoctorSpecialty({ codeDoctor: 5, specialtyCode: 5, codeHospital: codeHospital }));
    list.push(new DoctorSpecialty({ codeDoctor: 6, specialtyCode: 6, codeHospital: codeHospital }));
    return list;
  }

  public assingNewHospitalSpecialty(codeHospital: number) {
    var list: HospitalSpecialty[] = [];
    list.push(new HospitalSpecialty({ codeHospital: codeHospital, specialtyCode: 1 }));
    list.push(new HospitalSpecialty({ codeHospital: codeHospital, specialtyCode: 2 }));
    list.push(new HospitalSpecialty({ codeHospital: codeHospital, specialtyCode: 3 }));
    list.push(new HospitalSpecialty({ codeHospital: codeHospital, specialtyCode: 4 }));
    list.push(new HospitalSpecialty({ codeHospital: codeHospital, specialtyCode: 5 }));
    list.push(new HospitalSpecialty({ codeHospital: codeHospital, specialtyCode: 6 }));
    return list;
  }
}
