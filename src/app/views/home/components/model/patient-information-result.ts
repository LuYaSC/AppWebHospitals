export class PatientInformationResult {
  code: number;
  name: string;
  birthDate: Date;
  address: string;
  attentions: string;
  avatar: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
}

}
