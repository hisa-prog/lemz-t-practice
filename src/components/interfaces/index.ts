export interface ITeamString {
  index: number;
  name: string;
  location: string;
  busy: boolean;
  openSendModal: (arg: any) => void;
  openRevokeModal: (arg: any) => void;
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
  openSendModal: (arg: any) => void;
  openRevokeModal: (arg: any) => void;
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

export interface BatteryPackDto {
  name: string;
  is_on: boolean;
  alarm: boolean;
  durability: number;
  charge_level: number;
  capacitors: Array<{
    name: string;
    is_on: boolean;
    durability: number;
    charge_level: number;
    rated_voltage: number;
  }>;
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

export interface RepairTeamsDto {
  name_team: string;
  is_busy: boolean;
  current_location: string;
}

export interface OperationStatusModalProps {
  operationStatusModal: any;
  error?: boolean;
  rootModalClose: (arg: any) => void;
}

export interface RevokeTeamModalProps {
  revokeTeamModal: any;
  nameTeam: string;
}
