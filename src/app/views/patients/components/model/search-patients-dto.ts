export class SearchPatientsDto {
  name: string;
  lastName: string;
  birthDate: Date;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
