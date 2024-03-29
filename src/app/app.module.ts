import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreateDoctorComponent } from './views/doctors/components/create-doctor/create-doctor.component';
import { DoctorsComponent } from './views/doctors/doctors.component';
import { CreateHospitalComponent } from './views/home/components/create-hospital/create-hospital.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './views/layout/footer/footer.component';
import { HeaderComponent } from './views/layout/header/header.component';
import { OptionsButtonsComponent } from './views/layout/options-buttons/options-buttons.component';
import { PageNotFoundComponent } from './views/layout/page-not-found/page-not-found.component';
import { CreatePatientComponent } from './views/patients/components/create-patient/create-patient.component';
import { PatientsComponent } from './views/patients/patients.component';
import { SpecialtiesComponent } from './views/specialties/specialties.component';
import { CreateSpecialtyComponent } from './views/specialties/components/create-specialty/create-specialty.component';
import { VisitNotesComponent } from './views/visit-notes/visit-notes.component';
import { CreateVisitNoteComponent } from './views/visit-notes/components/create-visit-note/create-visit-note.component';
import { DoctorsDetailsComponent } from './views/home/components/doctors-details/doctors-details.component';
import { SpecialtiesDetailsComponent } from './views/home/components/specialties-details/specialties-details.component';
import { PatientsDetailsComponent } from './views/home/components/patients-details/patients-details.component';
import { ControlMessagesComponent } from './views/components/control-messages/control-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    OptionsButtonsComponent,
    HomeComponent,
    PatientsComponent,
    DoctorsComponent,
    CreateDoctorComponent,
    CreatePatientComponent,
    CreateHospitalComponent,
    SpecialtiesComponent,
    CreateSpecialtyComponent,
    VisitNotesComponent,
    CreateVisitNoteComponent,
    DoctorsDetailsComponent,
    SpecialtiesDetailsComponent,
    PatientsDetailsComponent,
    ControlMessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
