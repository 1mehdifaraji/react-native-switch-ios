declare module "react-native-switch-ios" {
  export interface SwitchProps {
    inactiveBgColor?: string;
    activeBgColor?: string;
    onToggle: () => void;
    isOn: boolean;
  }

  export function Switch(props: SwitchProps): any;
}
