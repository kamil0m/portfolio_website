export class Project {
    constructor(
        public projectName: string,
        public description: string,
        public context: string,
        public technologiesUsed: { name: string, purpose: string }[]
    ) {}
}