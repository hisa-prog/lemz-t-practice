export interface ITeamString {
  index: number;
  name: string;
  location: string;
  busy: boolean;
  openModal?: (arg: any) => void;
  setSelectedTeam: (arg: any) => void;
  className?: string;
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
  openModal?: (arg: any) => void;
  setSelectedTeam: (arg: any) => void;
}

export interface ISendTeamModal {
  sendTeamModal: any;
  nameTeam: string;
}

export interface IPlasmaStatString {
  name: string;
  value: number;
  color: string;
  procent?: boolean;
  className?: string;
}

export interface IBatteryStatString {
  name: string;
  value: number;
  color: string;
  procent?: boolean;
  minuts?: boolean;
  className?: string;
}

export interface IBatteryCapasitorCol {
  index: number;
  firstVal: number;
  firstColor: string;
  secondVal: number;
  secondColor: string;
  className?: string;
}

export interface PlasmaHeaterDto {
  name: string;
  is_on: boolean;
  alarm: boolean;
  durability: number;
  temperature: number;
  output_power_watt: number;
  input_current: number;
  input_voltage: number;
  input_power: number;
}
