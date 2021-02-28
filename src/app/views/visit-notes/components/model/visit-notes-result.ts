export class VisitNotesResult {
    codePatient: number;
    namePatient: string;
    codeDoctor: number;
    nameDoctor: string;
    codeSpecialty: number;
    nameSpecialty: string;
    codeHospital: number;
    nameHospital: string;
    dateNote: Date;
    observations: string;
    prescription: string;
    code: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}
