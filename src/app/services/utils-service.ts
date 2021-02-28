import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Audit } from './models/audit';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }


  AddAuditDates<MODEL extends Audit>(data: MODEL, operation: number) {
    data.dateCreation = operation === 2 ? data.dateCreation : new Date();
    data.dateModification = new Date();
    data.userCreation = 'ADMIN';
    data.userModification = 'ADMIN';
    return data;
  }

  getCodeArray<MODEL extends Audit>(data: MODEL[]) {
    return data.length > 0 ? data[data.length - 1].code : 1;
  }
}
