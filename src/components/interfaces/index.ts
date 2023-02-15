export interface ITeamStroke {
    index: number,
    name: string,
    location: string,
    busy: boolean,
    openModal?: (arg:any) => void,
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