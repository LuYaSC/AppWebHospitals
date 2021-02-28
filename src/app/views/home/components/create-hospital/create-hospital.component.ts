import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hospital } from 'src/app/services/models/hospital';
import { UtilsService } from 'src/app/services/utils-service';

@Component({
  selector: 'app-create-hospital',
  templateUrl: './create-hospital.component.html',
  styleUrls: ['./create-hospital.component.css'],
  providers: [UtilsService]
})
export class CreateHospitalComponent implements OnInit {

  @Input() hospitalDto = new Hospital();
  @Input() hospital = new Hospital();
  @Input() operationType: number;
  @Output() onChange = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
    this.hospitalDto = this.utils.AddAuditDates(this.hospitalDto, this.operationType);
    this.hospital = Object.assign({}, this.hospitalDto);
  }

  managerHospital() {
    switch (this.operationType) {
      case 1:
      case 2:
        this.hospitalDto = Object.assign({}, this.hospital);
        this.onChange.emit(this.hospitalDto);
        break;
      case 3:
        this.cancel.emit();
        break;
    }

  }
}
