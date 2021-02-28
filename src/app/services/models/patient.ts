import { Person } from "./person";

export class Patient extends Person {

    public CreateListPatient() {
        var patients = [];
        patients.push(new Patient({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "ALFONSO", lastName: "PELAEZ", address: "Direccion", birthDate: "1990-01-14", code: 1,
            avatar: "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
        }));
        patients.push(new Patient({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "SERGIO", lastName: "VELASQUEZ", address: "Direccion", birthDate: "1989-01-14", code: 2,
            avatar: "https://www.planeeo.com/wp-content/uploads/2020/09/louis-roze-trui-pink.jpg"
        }));
        patients.push(new Patient({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "ADOLFO", lastName: "ILLANES", address: "Direccion", birthDate: "1980-01-14", code: 3,
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyn361mcfxr1TxFBXw0kM3tRNKpmmzoaNMjA&usqp=CAU"
        }));
        patients.push(new Patient({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "GREGORIO", lastName: "SARAVIA", address: "Direccion", birthDate: "1960-01-14", code: 4,
            avatar: "https://pbs.twimg.com/profile_images/969073897189523456/rSuiu_Hr.jpg"
        }));
        patients.push(new Patient({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "OSCAR", lastName: "VILLEGAS", address: "Direccion", birthDate: "1975-01-14", code: 5,
            avatar: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg"
        }));
        patients.push(new Patient({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "VICTOR", lastName: "HUMEREZ", address: "Direccion", birthDate: "1985-01-14", code: 6,
            avatar: "https://pbs.twimg.com/profile_images/660002934780899328/0EKIaqSq_400x400.jpg"
        }));
        patients.push(new Patient({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "LUZ", lastName: "PEÑA", address: "Direccion", birthDate: "1985-01-14", code: 7,
            avatar: "https://data.whicdn.com/images/303284270/original.jpg?t=1513309244"
        }));
        return patients;
    }
}
