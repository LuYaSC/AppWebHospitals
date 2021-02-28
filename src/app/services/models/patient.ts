import { Person } from "./person";

export class Patient extends Person {

    public CreateListPatient() {
        var patients = [];
        patients.push(new Patient({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "Alfonso", lastName: "Pelaez", address: "Direccion", birthDate: new Date("1990-01-14"), code: 1, 
            avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
        }));
        patients.push(new Patient({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "Sergio", lastName: "Velasquez", address: "Direccion", birthDate: new Date("1989-01-14"), code: 2, 
            avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
        }));
        patients.push(new Patient({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "Adolfo", lastName: "Illanes", address: "Direccion", birthDate: new Date("1980-01-14"), code: 3, 
            avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
        }));
        patients.push(new Patient({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "Gregorio", lastName: "Saravia", address: "Direccion", birthDate: new Date("1960-01-14"), code: 4, 
            avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
        }));
        patients.push(new Patient({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "Oscar", lastName: "Villegas", address: "Direccion", birthDate: new Date("1975-01-14"), code: 5, 
            avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
        }));
        patients.push(new Patient({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "Victor", lastName: "Humerez", address: "Direccion", birthDate: new Date("1985-01-14"), code: 6, 
            avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
        }));
        patients.push(new Patient({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "Luz", lastName: "Peña", address: "Direccion", birthDate: new Date("1985-01-14"), code: 7, 
            avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
        }));
        return patients;
    }
}
