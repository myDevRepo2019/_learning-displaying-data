export class Hero {
    // this might seem like an empty useless class, but it does a lot
    // * declares constructor parameters and their types
    // * declares public properties of the same name
    // * initializes those properties with the corresponding argument when creating an instance of the class
    constructor(
        public id: number,
        public name: string) {}
}
