export default interface Project {
    projectName: string,
    description: string,
    context: string,
    technologiesUsed: { name: string, purpose: string }[]
}