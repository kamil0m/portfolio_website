export default interface Project {
    projectId: string,
    projectName: string,
    description: string,
    context: string,
    technologiesUsed: { name: string, purpose: string }[]
}