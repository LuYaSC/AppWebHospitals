import { Audit } from "./audit";

export class Hospital implements Audit {
  dateCreation: string;
  dateModification: string;
  userCreation: string;
  userModification: string;
  name: string = '';
  address: string = '';
  telephone: number;
  code: number;
  isDeleted: boolean;
  avatar: string = 'https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public CreateListHospital() {
    var hospitals = [];
    hospitals.push(new Hospital({
      dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN", name: "HOSPITAL OBRERO",
      address: "Calle Lucas Jaimes 76, La Paz", telephone: "123456", code: 1, avatar: 'https://www.cns.gob.bo/App_Themes/Images/Sitio/CNS_Logo.png'
    }));
    hospitals.push(new Hospital({
      dateCreation: new Date("2020-01-10"), dateModification: new Date("2021-01-01"), userCreation: "ADMIN", userModification: "ADMIN", name: "HOSPITAL DE CLINICAS",
      address: "Avenida Saavedra 2245, La Paz", telephone: "123456", code: 2, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCC27dD_ThURheRPgc4oGCC8Xz5qOaxDr0g&usqp=CAU'
    }));
    hospitals.push(new Hospital({
      dateCreation: new Date("2020-01-12"), dateModification: new Date("2021-01-22"), userCreation: "ADMIN", userModification: "ADMIN", name: "HOSPITAL DEL TORAX",
      address: "Avenida Saavedra &, Claudio Sanjinez, La Paz", telephone: "123456", code: 3, avatar: 'https://lh3.googleusercontent.com/proxy/zMaUTxUhU80PB7vA0y3U2FNkMKW-dWmctbaqjqR-ziWXt2ix4RX93vJNfGpVqrqAOTFLFJbonQJUg3_Nd5xbb_iWVpxidvORPish33WjsthXBV5hLLNi'
    }));
    hospitals.push(new Hospital({
      dateCreation: new Date("2019-01-13"), dateModification: new Date("2019-11-16"), userCreation: "ADMIN", userModification: "ADMIN", name: "HOSPITAL DEL NIÑO",
      address: "Av. Saavedra, Calle Mayor Zubieta, Nro. 100: La Paz", telephone: "123456", code: 4, avatar: 'https://hn.sld.pa/wp-content/uploads/2019/04/Redesocialogo-e1587062160982-415x321.jpg'
    }));
    hospitals.push(new Hospital({
      dateCreation: new Date("2018-01-08"), dateModification: new Date("2019-06-16"), userCreation: "ADMIN", userModification: "ADMIN", name: "HOSPITAL DE LA MUJER",
      address: "Complejo Hospitalario Zona Miraflores Nro. 2273, La Paz", telephone: "123456", code: 5, avatar: 'https://www.atb.com.bo/fotos/411111344.jpg'
    }));
    hospitals.push(new Hospital({
      dateCreation: new Date("2021-01-10"), dateModification: new Date("2019-06-16"), userCreation: "ADMIN", userModification: "ADMIN", name: "HOSPITAL ARCOIRIS",
      address: "Villa Fátima Av. 15 de Abril #40 Ingresando al Barrio Grafico, La Paz", telephone: "123456", code: 6, avatar: 'https://pbs.twimg.com/profile_images/1108507559630196737/FKGWdHGi_400x400.jpg'
    }));
    return hospitals;
  }
}

export class HospitalSpecialty  {
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


