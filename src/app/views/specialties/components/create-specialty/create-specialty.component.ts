import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Specialty } from 'src/app/services/models/specialty';
import { UtilsService } from 'src/app/services/utils-service';

@Component({
  selector: 'app-create-specialty',
  templateUrl: './create-specialty.component.html',
  styleUrls: ['./create-specialty.component.css'],
  providers: [UtilsService]
})
export class CreateSpecialtyComponent implements OnInit {
  @Input() specialtyDto = new Specialty();
  @Input() specialty = new Specialty();
  @Input() operationType: number;
  @Output() onChange = new EventEmitter();
  @Output() cancel = new EventEmitter();

  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
    this.specialtyDto = this.utils.AddAuditDates(this.specialtyDto, this.operationType);
    this.specialty = Object.assign({}, this.specialtyDto);
  }

  managerSpecialty() {
    switch (this.operationType) {
      case 1:
      case 2:
        this.specialtyDto = Object.assign({}, this.specialty);
        this.onChange.emit(this.specialtyDto);
        break;
      case 3:
        this.cancel.emit();
        break;
    }

  }
}
