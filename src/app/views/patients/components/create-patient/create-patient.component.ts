import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/services/models/patient';
import { UtilsService } from 'src/app/services/utils-service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css'],
  providers: [UtilsService]
})
export class CreatePatientComponent implements OnInit {

  @Input() patientDto = new Patient();
  @Input() patient = new Patient();
  @Input() operationType: number;
  @Output() onChange = new EventEmitter();
  @Output() cancel = new EventEmitter();
  angForm: FormGroup;

  constructor(private utils: UtilsService, private fb: FormBuilder) {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      address: ['']
    });
  }

  ngOnInit(): void {
    this.patientDto = this.utils.AddAuditDates(this.patientDto, this.operationType);
    this.patient = Object.assign({}, this.patientDto);
  }

  managerPatient() {
    switch (this.operationType) {
      case 1:
      case 2:
        this.patientDto = Object.assign({}, this.patient);
        this.onChange.emit(this.patientDto);
        break;
      case 3:
        this.cancel.emit();
        break;
    }

  }
}
