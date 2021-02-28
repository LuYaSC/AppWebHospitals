import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorsComponent } from './views/doctors/doctors.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/layout/page-not-found/page-not-found.component';
import { PatientsComponent } from './views/patients/patients.component';
import { SpecialtiesComponent } from './views/specialties/specialties.component';
import { VisitNotesComponent } from './views/visit-notes/visit-notes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'specialties', component: SpecialtiesComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'visit-notes', component: VisitNotesComponent },
  {path: '', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
