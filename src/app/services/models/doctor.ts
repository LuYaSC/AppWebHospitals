import { Person } from "./person";

export class Doctor extends Person {

  public CreateListDoctor() {
    var doctors = [];
    doctors.push(new Doctor({
      dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
      name: "Gregory", lastName: "House", address: "Direccion", birthDate: new Date("1992-01-14"), code: 1,
      avatar: "https://images.mygoodtimes.in/wp-content/uploads/2019/06/11071946/dr.-house.jpg"
    }));
    doctors.push(new Doctor({
      dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
      name: "Shaun", lastName: "Murphy", address: "Direccion", birthDate: new Date("1992-01-14"), code: 2,
      avatar: "https://cde.laprensa.e3.pe/ima/0/0/2/3/5/235171.jpg"
    }));
    doctors.push(new Doctor({
      dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
      name: "Eric", lastName: "Foreman", address: "Direccion", birthDate: new Date("1992-01-14"), code: 3,
      avatar: "https://i.pinimg.com/originals/cb/0e/9e/cb0e9e2328b2ac790bf880b35d0e118d.jpg"
    }));
    doctors.push(new Doctor({
      dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
      name: "Neil", lastName: "Melendez", address: "Direccion", birthDate: new Date("1992-01-14"), code: 4,
      avatar: "https://indiehoy.com/wp-content/uploads/2020/07/the-good-doctor-2.jpg"
    }));
    doctors.push(new Doctor({
      dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
      name: "Morgan", lastName: "Reznick", address: "Direccion", birthDate: new Date("1992-01-14"), code: 5,
      avatar: "https://screenfiction.org/content/image/0/5/188/c0483ced-full.webp"
    }));
    doctors.push(new Doctor({
      dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
      name: "Alisson", lastName: "Cameron", address: "Direccion", birthDate: new Date("1992-01-14"), code: 6,
      avatar: "https://i.pinimg.com/originals/dd/7e/37/dd7e37a72f1f6e1854f62575f8fc29db.jpg"
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


