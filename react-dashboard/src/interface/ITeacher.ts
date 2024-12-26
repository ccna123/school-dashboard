import { IPerson } from "./IPerson";

export interface Teacher extends IPerson {
    teacherId: string;
    subjects: string[];
    classes: string[];
    bloodType?: string;
    joinDate?: string;
    bio?: string;
}

