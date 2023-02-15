export interface ITeamStroke {
    index: number,
    name: string,
    location: string,
    busy: boolean,
    openModal?: (arg:any) => void,
    className?: string,
}