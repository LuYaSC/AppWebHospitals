export interface Audit {
    dateCreation: Date;
    dateModification: Date;
    userCreation: string;
    userModification: string;
    isDeleted: boolean;
    code: number;
}
