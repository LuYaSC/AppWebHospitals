import { Audit } from "./audit";

export class Person implements Audit {
    dateCreation: Date;
    dateModification: Date;
    userCreation: string;
    userModification: string;
    name: string;
    lastName: string;
    birthDate: Date;
    address: string;
    avatar: string;
    code: number;
    isDeleted: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
    

}
