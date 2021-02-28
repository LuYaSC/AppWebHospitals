import { Audit } from "./audit";

export class VisitNote implements Audit {
    dateCreation: string = '';
    dateModification: string;
    userCreation: string;
    userModification: string;
    isDeleted: boolean;
    code: number;
    codePatient: number;
    codeDoctor: number;
    codeSpecialty: number;
    codeHospital: number;
    observations: string;
    prescription: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    public CreateListVisitNote() {
        var hospitals = [];
        hospitals.push(new VisitNote({
            dateCreation: "2021-01-14", dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            code: 1, observations: '1 observaciones del paciente', prescription: 'receta medica', codeHospital: 1,
            codeDoctor: 1, codeSpecialty: 1, codePatient: 1
        }));
        hospitals.push(new VisitNote({
            dateCreation: "2021-01-14", dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            code: 2, observations: '2 observaciones del paciente', prescription: 'receta medica', codeHospital: 1,
            codeDoctor: 2, codeSpecialty: 2, codePatient: 1
        }));
        hospitals.push(new VisitNote({
            dateCreation: "2021-01-14", dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            code: 3, observations: '3 observaciones del paciente', prescription: 'receta medica', codeHospital: 1,
            codeDoctor: 3, codeSpecialty: 3, codePatient: 2
        }));
        hospitals.push(new VisitNote({
            dateCreation: "2020-01-14", dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            code: 4, observations: '4 observaciones del paciente', prescription: 'receta medica', codeHospital: 2,
            codeDoctor: 4, codeSpecialty: 4, codePatient: 2
        }));
        hospitals.push(new VisitNote({
            dateCreation: "2020-01-14", dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            code: 5, observations: '5 observaciones del paciente', prescription: 'receta medica', codeHospital: 2,
            codeDoctor: 5, codeSpecialty: 5, codePatient: 3
        }));
        hospitals.push(new VisitNote({
            dateCreation: "2020-01-14", dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            code: 6, observations: '6 observaciones del paciente', prescription: 'receta medica', codeHospital: 3,
            codeDoctor: 6, codeSpecialty: 6, codePatient: 3
        }));
        hospitals.push(new VisitNote({
            dateCreation: "2020-01-14", dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            code: 7, observations: '7 observaciones del paciente', prescription: 'receta medica', codeHospital: 3,
            codeDoctor: 6, codeSpecialty: 6, codePatient: 4
        }));
        hospitals.push(new VisitNote({
            dateCreation: "2019-01-14", dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            code: 8, observations: '8 observaciones del paciente', prescription: 'receta medica', codeHospital: 4,
            codeDoctor: 5, codeSpecialty: 5, codePatient: 4
        }));
        hospitals.push(new VisitNote({
            dateCreation: "2019-01-14", dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            code: 9, observations: '9 observaciones del paciente', prescription: 'receta medica', codeHospital: 4,
            codeDoctor: 4, codeSpecialty: 4, codePatient: 5
        }));
        hospitals.push(new VisitNote({
            dateCreation: "2019-01-14", dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            code: 10, observations: '10 observaciones del paciente', prescription: 'receta medica', codeHospital: 5,
            codeDoctor: 3, codeSpecialty: 3, codePatient: 6
        }));
        hospitals.push(new VisitNote({
            dateCreation: "2018-01-14", dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            code: 11, observations: '11 observaciones del paciente', prescription: 'receta medica', codeHospital: 5,
            codeDoctor: 2, codeSpecialty: 2, codePatient: 6
        }));
        hospitals.push(new VisitNote({
            dateCreation: "2018-01-14", dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            code: 12, observations: '12 observaciones del paciente', prescription: 'receta medica', codeHospital: 6,
            codeDoctor: 1, codeSpecialty: 1, codePatient: 6
        }));

        return hospitals;
    }

}
