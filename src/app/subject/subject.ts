import { Lesson } from './lesson';
import { Category } from './category';

export class Subject {
    imageUrl: string;

    constructor(public name: string, private categories: Array<Category>) { }

    public get Categories(): Array<Category> {
        return this.categories;
    }
}
