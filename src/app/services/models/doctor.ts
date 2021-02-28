import { Person } from "./person";

export class Doctor extends Person {

  public CreateListDoctor() {
    var doctors = [];
    doctors.push(new Doctor({
      dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
      name: "Juan", lastName: "Peréz", address: "Direccion", birthDate: new Date("1992-01-14"), code: 1,
      avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
    }));
    doctors.push(new Doctor({
      dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
      name: "Armando", lastName: "Quito", address: "Direccion", birthDate: new Date("1992-01-14"), code: 2, avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
    }));
    doctors.push(new Doctor({
      dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
      name: "Sebastian", lastName: "Alvarez", address: "Direccion", birthDate: new Date("1992-01-14"), code: 3, avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
    }));
    doctors.push(new Doctor({
      dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
      name: "Salvador", lastName: "Quinteros", address: "Direccion", birthDate: new Date("1992-01-14"), code: 4, avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
    }));
    doctors.push(new Doctor({
      dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
      name: "Ana", lastName: "Diaz", address: "Direccion", birthDate: new Date("1992-01-14"), code: 5, avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
    }));
    doctors.push(new Doctor({
      dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
      name: "Julia", lastName: "Saravia", address: "Direccion", birthDate: new Date("1992-01-14"), code: 6, avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
    }));
    return doctors;
  }

}
export class DoctorSpecialty /*implements Audit*/ {
  //dateCreation: Date;
  //dateModification: Date;
  //userCreation: string;
  //userModification: string;
  specialtyCode: number;
  codeDoctor: number;
  codeHospital: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public AssingHospitalDoctors() {
    var list = [];
    list.push(new DoctorSpecialty({ codeDoctor: 1, specialtyCode: 1 , codeHospital: 1,}));
    list.push(new DoctorSpecialty({ codeDoctor: 2, specialtyCode: 1 , codeHospital: 1,}));
    list.push(new DoctorSpecialty({ codeDoctor: 2, specialtyCode: 2 , codeHospital: 1,}));
    list.push(new DoctorSpecialty({ codeDoctor: 3, specialtyCode: 3 , codeHospital: 1,}));
    list.push(new DoctorSpecialty({ codeDoctor: 4, specialtyCode: 4 , codeHospital: 1,}));
    list.push(new DoctorSpecialty({ codeDoctor: 5, specialtyCode: 5 , codeHospital: 1,}));
    list.push(new DoctorSpecialty({ codeDoctor: 6, specialtyCode: 6 , codeHospital: 1,}));
    list.push(new DoctorSpecialty({ codeDoctor: 1, specialtyCode: 1 , codeHospital: 2,}));
    list.push(new DoctorSpecialty({ codeDoctor: 2, specialtyCode: 2 , codeHospital: 2,}));
    list.push(new DoctorSpecialty({ codeDoctor: 3, specialtyCode: 3 , codeHospital: 2,}));
    list.push(new DoctorSpecialty({ codeDoctor: 4, specialtyCode: 4 , codeHospital: 2,}));
    list.push(new DoctorSpecialty({ codeDoctor: 5, specialtyCode: 5 , codeHospital: 2,}));
    list.push(new DoctorSpecialty({ codeDoctor: 1, specialtyCode: 1 , codeHospital: 3,}));
    list.push(new DoctorSpecialty({ codeDoctor: 2, specialtyCode: 2 , codeHospital: 3,}));
    list.push(new DoctorSpecialty({ codeDoctor: 3, specialtyCode: 3 , codeHospital: 3,}));
    list.push(new DoctorSpecialty({ codeDoctor: 4, specialtyCode: 4 , codeHospital: 3,}));
    list.push(new DoctorSpecialty({ codeDoctor: 1, specialtyCode: 1 , codeHospital: 4,}));
    list.push(new DoctorSpecialty({ codeDoctor: 2, specialtyCode: 2 , codeHospital: 4,}));
    list.push(new DoctorSpecialty({ codeDoctor: 3, specialtyCode: 3 , codeHospital: 4,}));
    list.push(new DoctorSpecialty({ codeDoctor: 4, specialtyCode: 4 , codeHospital: 4,}));
    list.push(new DoctorSpecialty({ codeDoctor: 1, specialtyCode: 1 , codeHospital: 5,}));
    list.push(new DoctorSpecialty({ codeDoctor: 2, specialtyCode: 2 , codeHospital: 5,}));
    list.push(new DoctorSpecialty({ codeDoctor: 3, specialtyCode: 3 , codeHospital: 5,}));
    list.push(new DoctorSpecialty({ codeDoctor: 1, specialtyCode: 1 , codeHospital: 6,}));
    list.push(new DoctorSpecialty({ codeDoctor: 2, specialtyCode: 2 , codeHospital: 6,}));
    return list;
  }

}


