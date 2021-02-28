export class SearchDoctorDto {
  name: string = '';
  lastName: string = '';
  birthDate: Date;
  codeHospital: number;
  codeSpecialty: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
