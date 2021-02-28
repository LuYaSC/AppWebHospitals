import { Audit } from "./audit";

export class Person implements Audit {
    dateCreation: string;
    dateModification: string;
    userCreation: string;
    userModification: string;
    name: string;
    lastName: string;
    birthDate: string;
    address: string;
    avatar: string = 'https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg';
    code: number;
    isDeleted: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }


}
