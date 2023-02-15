export interface ITeamStroke {
    index: number,
    name: string,
    location: string,
    busy: boolean,
    openModal?: (arg:any) => void,
    setSelectedTeam: (arg: any) => void,
    className?: string,
}

export interface IModal {
    className?: string;
    isOpen: boolean;
    open: (arg0: string) => void;
    close: () => void;
    customClasses?: boolean;
    children: any;
    onSideClick?: () => void;
}

export interface IRepair {
    openModal?: (arg:any) => void,
    setSelectedTeam: (arg: any) => void,
}

export interface ISendTeamModal {
    sendTeamModal: any;
    nameTeam: string;
}