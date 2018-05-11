import { Lesson } from './lesson';

export class Category {
    constructor(public name: string, private lessons: Array<Lesson>) { }

    public get Lessons(): Array<Lesson> {
        return this.lessons;
    }
}
