export class DoctorInformationResult {
  name: string;
  specialty: string;
  dateCreation: Date;
  address: string;
  birthDate: Date;
  avatar: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
