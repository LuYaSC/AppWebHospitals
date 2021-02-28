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
            name: "Cardiologia", description: "description", code: 1, avatar: "https://i.pinimg.com/originals/ca/29/e6/ca29e6f0a8d3e946a3231bca33c1ae2b.png"
        }));
        list.push(new Specialty({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "Pediatria", description: "description", code: 2, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBRcfo2DA2cN7cErfRuIFSAtc8Bc5z5OVtw&usqp=CAU"
        }));
        list.push(new Specialty({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "Infectología", description: "description", code: 3, avatar: "http://www.amofac.org/cursos/pluginfile.php/2678/course/overviewfiles/2.png"
        }));
        list.push(new Specialty({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "Neumología", description: "description", code: 4, avatar: "https://st.depositphotos.com/3356953/4654/v/600/depositphotos_46547529-stock-illustration-lungs-sign.jpg"
        }));
        list.push(new Specialty({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "Neurología", description: "description", code: 5, avatar: "https://thumbs.dreamstime.com/z/tecnolog%C3%ADa-de-red-inteligente-artificial-la-neurolog%C3%ADa-logo-template-141613248.jpg"
        }));
        list.push(new Specialty({
            dateCreation: new Date("2019-01-14"), dateModification: new Date("2020-02-16"), userCreation: "ADMIN", userModification: "ADMIN",
            name: "Psiquiatría", description: "description", code: 6, avatar: "https://st2.depositphotos.com/5665934/8873/v/600/depositphotos_88738868-stock-illustration-maze-of-human-mind.jpg"
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
