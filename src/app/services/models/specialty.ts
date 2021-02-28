import { Audit } from "./audit";

export class Specialty implements Audit {
    dateCreation: Date;
    dateModification: Date;
    userCreation: string;
    userModification: string;
    name: string;
    description: string;
    avatar: string;
    code: number;
    isDeleted: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    public CreateListSpecialty() {
        var list = [];
        list.push(new Specialty({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "Cardiologia", description: "description", code: 1, avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
        }));
        list.push(new Specialty({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "Pediatria", description: "description", code: 2, avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
        }));
        list.push(new Specialty({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "Infectología", description: "description", code: 3, avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
        }));
        list.push(new Specialty({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "Neumología", description: "description", code: 4, avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
        }));
        list.push(new Specialty({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "Neurología", description: "description", code: 5, avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
        }));
        list.push(new Specialty({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "Psiquiatría", description: "description", code: 6, avatar: "https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294774_960_720.png"
        }));
        return list;
    }
}

export class SpecDoctor {
    codeDoctor: number;
    codeSpec: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }


    public CreateListSpecDoctor() {
        var list = [];
        list.push(new SpecDoctor({ codeDoctor: 1, codeSpec: 1 }));
        list.push(new SpecDoctor({ codeDoctor: 1, codeSpec: 2 }));
        list.push(new SpecDoctor({ codeDoctor: 2, codeSpec: 1 }));
        list.push(new SpecDoctor({ codeDoctor: 2, codeSpec: 2 }));
        list.push(new SpecDoctor({ codeDoctor: 3, codeSpec: 1 }));
        list.push(new SpecDoctor({ codeDoctor: 3, codeSpec: 3 }));
        list.push(new SpecDoctor({ codeDoctor: 4, codeSpec: 4 }));
        list.push(new SpecDoctor({ codeDoctor: 4, codeSpec: 5 }));
        list.push(new SpecDoctor({ codeDoctor: 5, codeSpec: 3 }));
        list.push(new SpecDoctor({ codeDoctor: 6, codeSpec: 6 }));
        return list;
    }
}