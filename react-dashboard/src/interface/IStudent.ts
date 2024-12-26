import { IPerson } from "./IPerson";

export interface Student extends IPerson {
    studentId: string;
    grade: number;
    class?: string;
    bio?: string;
}

