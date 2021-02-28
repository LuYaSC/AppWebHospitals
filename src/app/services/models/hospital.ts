import { Audit } from "./audit";

export class Hospital implements Audit {
  dateCreation: Date;
  dateModification: Date;
  userCreation: string;
  userModification: string;
  name: string;
  address: string;
  telephone: number;
  code: number;
  isDeleted: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public CreateListHospital() {
    var hospitals = [];
    hospitals.push(new Hospital({
      dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN", name: "Hospital Buenaventura",
      address: "Direccion", telephone: "123456", code: 1
    }));
    hospitals.push(new Hospital({
      dateCreation: new Date("2020-01-10"), dateModification: new Date("2021-01-01"), userCreation: "ADMIN", userModification: "ADMIN", name: "Hospital de clinicas",
      address: "Direccion", telephone: "123456", code: 2
    }));
    hospitals.push(new Hospital({
      dateCreation: new Date("2020-01-12"), dateModification: new Date("2021-01-22"), userCreation: "ADMIN", userModification: "ADMIN", name: "Hospital del toráx",
      address: "Direccion", telephone: "123456", code: 3
    }));
    hospitals.push(new Hospital({
      dateCreation: new Date("2019-01-13"), dateModification: new Date("2019-11-16"), userCreation: "ADMIN", userModification: "ADMIN", name: "Hospital del niño",
      address: "Direccion", telephone: "123456", code: 4
    }));
    hospitals.push(new Hospital({
      dateCreation: new Date("2018-01-08"), dateModification: new Date("2019-06-16"), userCreation: "ADMIN", userModification: "ADMIN", name: "Hospital de la mujer",
      address: "Direccion", telephone: "123456", code: 5
    }));
    hospitals.push(new Hospital({
      dateCreation: new Date("2021-01-10"), dateModification: new Date("2019-06-16"), userCreation: "ADMIN", userModification: "ADMIN", name: "Hospital ArcoIris",
      address: "Direccion", telephone: "123456", code: 6
    }));
    return hospitals;
  }
}

export class HospitalSpecialty /*implements Audit*/ {
  //dateCreation: Date;
  //dateModification: Date;
  //userCreation: string;
  //userModification: string;
  codeHospital: number;
  specialtyCode: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public AssingHospitalSpecialty() {
    var list = [];
    list.push(new HospitalSpecialty({ codeHospital: 1, specialtyCode: 1 }));
    list.push(new HospitalSpecialty({ codeHospital: 1, specialtyCode: 2 }));
    list.push(new HospitalSpecialty({ codeHospital: 1, specialtyCode: 3 }));
    list.push(new HospitalSpecialty({ codeHospital: 1, specialtyCode: 4 }));
    list.push(new HospitalSpecialty({ codeHospital: 1, specialtyCode: 5 }));
    list.push(new HospitalSpecialty({ codeHospital: 1, specialtyCode: 6 }));
    list.push(new HospitalSpecialty({ codeHospital: 2, specialtyCode: 1 }));
    list.push(new HospitalSpecialty({ codeHospital: 2, specialtyCode: 2 }));
    list.push(new HospitalSpecialty({ codeHospital: 2, specialtyCode: 3 }));
    list.push(new HospitalSpecialty({ codeHospital: 2, specialtyCode: 4 }));
    list.push(new HospitalSpecialty({ codeHospital: 2, specialtyCode: 5 }));
    list.push(new HospitalSpecialty({ codeHospital: 3, specialtyCode: 1 }));
    list.push(new HospitalSpecialty({ codeHospital: 3, specialtyCode: 2 }));
    list.push(new HospitalSpecialty({ codeHospital: 3, specialtyCode: 3 }));
    list.push(new HospitalSpecialty({ codeHospital: 3, specialtyCode: 4 }));
    list.push(new HospitalSpecialty({ codeHospital: 4, specialtyCode: 1 }));
    list.push(new HospitalSpecialty({ codeHospital: 4, specialtyCode: 2 }));
    list.push(new HospitalSpecialty({ codeHospital: 4, specialtyCode: 3 }));
    list.push(new HospitalSpecialty({ codeHospital: 4, specialtyCode: 4 }));
    list.push(new HospitalSpecialty({ codeHospital: 5, specialtyCode: 1 }));
    list.push(new HospitalSpecialty({ codeHospital: 5, specialtyCode: 2 }));
    list.push(new HospitalSpecialty({ codeHospital: 5, specialtyCode: 3 }));
    list.push(new HospitalSpecialty({ codeHospital: 6, specialtyCode: 1 }));
    list.push(new HospitalSpecialty({ codeHospital: 6, specialtyCode: 2 }));
    return list;
  }

}


